/* rwxLabs research tab: list + in-place reader for HackMD and local markdown. */
(function () {
  "use strict";
  var params = new URLSearchParams(location.search);
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var fmtDate = function (d) {
    var t = new Date(d + "T00:00:00Z");
    return isNaN(t) ? d : t.toLocaleDateString("en-GB", { year: "numeric", month: "short", timeZone: "UTC" });
  };

  // Where each item lives
  function hackmdView(it) { return "https://hackmd.io/@" + it.account + "/" + it.hackmd; }
  function rawUrl(it) {
    if (it.hackmd) return "https://hackmd.io/" + it.hackmd + "/download";
    if (it.local) return it.local;
    return null;
  }
  function pageUrl(it) { return it.external ? it.external : "research.html?id=" + encodeURIComponent(it.id); }

  fetch("research.json").then(function (r) { return r.json(); }).then(function (cat) {
    if (params.get("id")) reader(cat, params.get("id"));
    else list(cat);
  }).catch(function () {
    $("published").innerHTML = '<p class="empty">Could not load research.json. Browse <a href="https://hackmd.io/@rwxlabs">rwxLabs on HackMD</a>.</p>';
  });

  /* ---------- list ---------- */
  function list(cat) {
    var state = { track: params.get("track") || "all", inst: params.get("for") || "all" };

    function chips(host, entries, key, label) {
      host.innerHTML = "";
      var lab = document.createElement("span");
      lab.className = "tag"; lab.style.border = "0"; lab.textContent = label;
      host.appendChild(lab);
      entries.forEach(function (e) {
        var b = document.createElement("button");
        b.className = "chip"; b.textContent = e[1];
        b.setAttribute("aria-pressed", String(state[key] === e[0]));
        b.onclick = function () {
          state[key] = e[0];
          var q = new URLSearchParams();
          if (state.track !== "all") q.set("track", state.track);
          if (state.inst !== "all") q.set("for", state.inst);
          history.replaceState(null, "", "research.html" + (q.toString() ? "?" + q : ""));
          render();
        };
        host.appendChild(b);
      });
    }

    function card(it) {
      var fors = (it.for || []).map(function (k) { return cat.institutions[k] && cat.institutions[k].name.split(" ·")[0]; }).filter(Boolean);
      var src = it.external ? "external ↗" : it.hackmd ? "hackmd/@" + it.account : "draft";
      return '<a class="card" href="' + esc(pageUrl(it)) + '"' + (it.external ? ' rel="noopener"' : "") + ">" +
        '<div class="meta"><span class="tag ' + (it.status === "draft" ? "draft" : "live") + '">' + esc(it.status) + "</span>" +
        "<span>" + esc(fmtDate(it.date)) + "</span><span>· " + esc(src) + "</span></div>" +
        "<h3>" + esc(it.title) + "</h3><p>" + esc(it.summary) + "</p>" +
        (fors.length ? '<div class="for">for <b>' + fors.map(esc).join("</b>, <b>") + "</b></div>" : "") +
        "</a>";
    }

    function render() {
      chips($("trackFilters"), [["all", "All tracks"]].concat(Object.entries(cat.tracks)), "track", "track");
      var insts = Object.entries(cat.institutions).map(function (e) { return [e[0], e[1].name.split(" ·")[0].split(" (")[0]]; });
      chips($("forFilters"), [["all", "Everyone"]].concat(insts), "inst", "for");
      var match = cat.items.filter(function (it) {
        return (state.track === "all" || it.tracks.indexOf(state.track) > -1) &&
               (state.inst === "all" || (it.for || []).indexOf(state.inst) > -1);
      });
      var series = match.filter(function (it) { return it.status === "draft"; })
        .sort(function (a, b) { return a.id < b.id ? -1 : 1; });
      var pub = match.filter(function (it) { return it.status !== "draft"; })
        .sort(function (a, b) { return a.date < b.date ? 1 : -1; });
      $("series").innerHTML = series.map(card).join("") || '<p class="empty">Nothing in this filter yet.</p>';
      $("published").innerHTML = pub.map(card).join("") || '<p class="empty">Nothing in this filter yet.</p>';
    }
    render();
  }

  /* ---------- reader ---------- */
  function cleanHackmd(md) {
    return md
      .replace(/^\s*---\n[\s\S]*?\n---\n/, "")            // YAML front matter
      .replace(/^#{6}\s*tags:.*$/gim, "")                  // ###### tags: `x`
      .replace(/^\[TOC\]\s*$/gim, "")
      .replace(/^:::\s*\w*.*$/gm, "")                      // ::: info containers
      .replace(/\{%\s*youtube\s+([\w-]+)\s*%\}/g, "[Watch on YouTube](https://www.youtube.com/watch?v=$1)")
      .replace(/\{%\s*\w+\s+[^%]*%\}/g, "");
  }

  function reader(cat, id) {
    var it = cat.items.find(function (x) { return x.id === id; });
    $("list").hidden = true; $("reader").hidden = false;
    if (!it) { $("article").innerHTML = '<p class="empty">Not found. <a href="research.html">Back to research</a>.</p>'; return; }
    if (it.external) { location.replace(it.external); return; }

    document.title = it.title + " — rwxLabs Research";
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", it.summary);

    var acts = [];
    if (it.hackmd) acts.push('<a class="btn" href="' + esc(hackmdView(it)) + '" rel="noopener">open on HackMD ↗</a>',
                             '<button class="btn" id="embedBtn" type="button">embed HackMD view</button>');
    acts.push('<a class="btn" href="' + esc(rawUrl(it)) + '">raw markdown</a>');
    if (it.status === "draft") acts.push('<button class="btn" id="copyBtn" type="button">copy for HackMD</button>');
    $("readerActions").innerHTML = acts.join("");

    if (it.status === "draft") {
      $("readerNotice").innerHTML = '<div class="notice">Draft in the rwxLabs institutional series. Not yet published to HackMD; under review by the author.</div>';
    }

    var rawText = "";
    fetch(rawUrl(it)).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (txt) {
      rawText = txt;
      var html = DOMPurify.sanitize(marked.parse(cleanHackmd(txt), { gfm: true, breaks: false }));
      var art = $("article");
      art.innerHTML = html;
      art.querySelectorAll("table").forEach(function (t) {
        var w = document.createElement("div"); w.className = "table-wrap";
        t.parentNode.insertBefore(w, t); w.appendChild(t);
      });
      // relative links between drafts -> reader links
      art.querySelectorAll("a[href]").forEach(function (a) {
        var href = a.getAttribute("href");
        var m = href.match(/^\.\/([\w-]+\.md)$/);
        if (m) {
          var tgt = cat.items.find(function (x) { return x.local && x.local.endsWith("/" + m[1]); });
          if (tgt) a.setAttribute("href", "research.html?id=" + tgt.id);
        } else if (/^https?:/.test(href)) { a.setAttribute("rel", "noopener"); }
      });
    }).catch(function () {
      $("article").innerHTML = '<p class="empty">Could not load the note here.' +
        (it.hackmd ? ' <a href="' + esc(hackmdView(it)) + '">Read it on HackMD ↗</a>' : "") + "</p>";
    });

    var embedBtn = $("embedBtn");
    if (embedBtn) embedBtn.onclick = function () {
      var host = $("embedHost");
      if (host.firstChild) { host.innerHTML = ""; embedBtn.textContent = "embed HackMD view"; $("article").hidden = false; return; }
      var f = document.createElement("iframe");
      f.className = "frame-embed"; f.loading = "lazy"; f.title = it.title + " on HackMD";
      f.src = hackmdView(it);
      host.appendChild(f); $("article").hidden = true; embedBtn.textContent = "show rwxLabs view";
    };
    var copyBtn = $("copyBtn");
    if (copyBtn) copyBtn.onclick = function () {
      navigator.clipboard.writeText(rawText).then(function () { copyBtn.textContent = "copied ✓"; });
    };

    // citation + structured data
    var url = location.origin + location.pathname + "?id=" + it.id;
    var year = it.date.slice(0, 4);
    $("citeText").textContent =
      cat.author.name + " (" + year + "). " + it.title + ". rwxLabs Research" +
      (it.status === "draft" ? " [draft]" : "") + ". " + (it.hackmd ? hackmdView(it) : url);
    $("cite").hidden = false;
    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "ScholarlyArticle",
      headline: it.title, abstract: it.summary, datePublished: it.date,
      author: { "@type": "Person", name: cat.author.name },
      publisher: { "@type": "Organization", name: "rwxLabs", url: "https://rwxlabs.com" },
      url: it.hackmd ? hackmdView(it) : url, encoding: { "@type": "MediaObject", contentUrl: rawUrl(it), encodingFormat: "text/markdown" },
      creativeWorkStatus: it.status, keywords: it.tracks.map(function (t) { return cat.tracks[t]; }).join(", ")
    });
    document.head.appendChild(ld);
  }
})();
