/*! docsify-live-demo v1.0.0 by Kossi D. T. S. | MIT */ (() => {
  "use strict";
  const e = [
    {
      type: "script",
      src: "./js/codemirror.min.js",
      id: "codemirror",
    },
    {
      type: "script",
      src: "./js/css.min.js",
      parent_id: "codemirror",
    },
    {
      type: "script",
      src: "./js/javascript.min.js",
      parent_id: "codemirror",
    },
    {
      type: "script",
      src: "./js/xml.min.js",
      parent_id: "codemirror",
    },
    {
      type: "script",
      src: "./js/htmlmixed.min.js",
      parent_id: "codemirror",
    },
    {
      type: "style",
      rel: "stylesheet",
      href: "./css/codemirror.min.css",
    },
    {
      type: "style",
      rel: "stylesheet",
      href: "./css/monokai.min.css",
    },
  ];
  let t = e.filter((e) => "script" === e.type);
  e.filter((e) => "style" === e.type).forEach((e) => {
    let t = document.createElement("link");
    (t.rel = "stylesheet"),
      (e.type = "text/css"),
      Object.keys(e).forEach((r) => {
        t[r] = e[r];
      }),
      document.head.append(t);
  });
  let r = 0;
  const o = () => (r += 1),
    s = [],
    c = [];
  t.forEach((e, t) => {
    let r = document.createElement("script");
    (e.type = "text/javascript"),
      Object.keys(e).forEach((t) => {
        r[t] = e[t];
      }),
      r.parent_id
        ? ((r.id = `${r.parent_id}-child${t}`),
          delete r.parent_id,
          c.push(r),
          (r.onload = o))
        : (r.id ? s.push(r) : (r.onload = o),
          (r.async = !0),
          document.head.append(r));
  }),
    s.forEach((e) => {
      e.onload = () => {
        c
          .filter((t) => t.id.split("-")[0] === e.id)
          .forEach((e) => {
            document.head.append(e);
          }),
          o();
      };
    });
  let i = null;
  function n(e) {
    if (r != t.length) return;
    clearInterval(i);
    document.querySelectorAll(".live-demo").forEach((t) => {
      let r = t.dataset,
        o = 500;
      r.height &&
        !isNaN(parseInt(r.height, 10)) &&
        (o = parseInt(r.height, 10)),
        (t.style.height = o + "px");
      let s = t.querySelector("textarea"),
        c = t.querySelector(".preview"),
        i = CodeMirror.fromTextArea(s, {
          lineNumbers: !0,
          mode: "htmlmixed",
          theme: "monokai",
          tabSize: 4,
        }),
        n = null;
      i.on("change", function () {
        clearTimeout(n),
          (n = setTimeout(() => {
            a(c, i.getValue(), e);
          }, 330));
      }),
        setTimeout(() => {
          t.classList.remove("hidden"), a(c, i.getValue(), e);
        }, 330);
    });
  }
  function a(e, t, r) {
    let o = document.createElement("iframe");
    (o.onload = function () {
      let e = o.contentDocument || o.contentWindow.document;
      e.open(),
        e.write(
          `\n        <!doctype html>\n        <html>\n          <head>\n            <meta charset=utf-8>\n            <title>HTML5 canvas demo</title>\n            <style>*, *::before, *::after{box-sizing: border-box;} img{max-width: 100%}</style>\n            ${r}\n          </head>\n          <body>\n            ${t}\n            </body>\n            </html>\n        `
        ),
        e.close();
    }),
      (e.innerHTML = ""),
      e.appendChild(o);
  }
  (window.$docsify = window.$docsify || {}),
    (window.$docsify.plugins = [].concat(
      window.$docsify.plugins || [],
      function (e, t) {
        const r = t.config.liveDemo || {};
        console.log("globals..", r),
          (r.assets && Array.isArray(r.assets)) || (r.assets = []);
        const o = r.assets.reduce(
          (e, t) =>
            "script" === t.type
              ? `${e}<script type="text/javascript" src="${t.uri}"><\/script>`
              : "style" === t.type
              ? `${e}<link rel="stylesheet" href="${t.uri}" type="text/css">`
              : void 0,
          ""
        );
        e.afterEach(function (e, t) {
          t(
            (e = e.replace(
              /<code class="live-demo"(.*?)>(.*?)<\/code>/gms,
              '<div class="live-demo hidden" $1><textarea class="editor">$2</textarea><div class="preview"></div></div>'
            ))
          );
        }),
          e.doneEach(function () {
            (i = setInterval(n, 200, o)), console.log("DoneEach");
          });
      }
    ));
})();
