/* rwxLabs writeups: a simple list, plus an in-place reader for HackMD notes. */
(function () {
  "use strict";
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
  var view = function (it) { return "https://hackmd.io/@" + it.account + "/" + it.hackmd; };
  var href = function (it) { return it.external || "research.html?id=" + encodeURIComponent(it.id); };

  var id = new URLSearchParams(location.search).get("id");

  fetch("research.json").then(function (r) { return r.json(); }).then(function (cat) {
    var items = cat.items.filter(function (it) { return it.status === "published"; });
    if (id) reader(items, id); else list(items);
  }).catch(function () {
    $("posts").innerHTML = '<li class="empty">Could not load writeups. Read them on <a href="https://hackmd.io/@rwxlabs">HackMD</a>.</li>';
  });

  function list(items) {
    items.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    $("posts").innerHTML = items.map(function (it) {
      return '<li><a href="' + esc(href(it)) + '"' + (it.external ? ' rel="noopener"' : "") + ">" +
        '<span class="d">' + esc(fmtDate(it.date)) + "</span>" +
        '<span class="t">' + esc(it.title) + (it.external ? " ↗" : "") + "</span>" +
        '<span class="s">' + esc(it.summary) + "</span></a></li>";
    }).join("");
  }

  function reader(items, id) {
    $("list").hidden = true; $("reader").hidden = false;
    var it = items.find(function (x) { return x.id === id; });
    if (!it) { location.replace("research.html"); return; }
    if (it.external) { location.replace(it.external); return; }
    document.title = it.title + " — rwxLabs";
    $("note").title = it.title;
    $("note").src = view(it);
  }
})();
