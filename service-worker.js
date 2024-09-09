if (!self.define) {
    let i,
      n = {};
    const l = (l, o) => (
      (l = new URL(l + ".js", o).href),
      n[l] ||
        new Promise((n) => {
          if ("document" in self) {
            const i = document.createElement("script");
            (i.src = l), (i.onload = n), document.head.appendChild(i);
          } else (i = l), importScripts(l), n();
        }).then(() => {
          let i = n[l];
          if (!i) throw new Error(`Module ${l} didn’t register its module`);
          return i;
        })
    );
    self.define = (o, e) => {
      const r =
        i ||
        ("document" in self ? document.currentScript.src : "") ||
        location.href;
      if (n[r]) return;
      let s = {};
      const t = (i) => l(i, r),
        u = { module: { uri: r }, exports: s, require: t };
      n[r] = Promise.all(o.map((i) => u[i] || t(i))).then((i) => (e(...i), s));
    };
  }
  define(["./workbox-6567b62a"], function (i) {
    "use strict";
    i.setCacheNameDetails({ prefix: "quick_flow" }),
      self.addEventListener("message", (i) => {
        i.data && "SKIP_WAITING" === i.data.type && self.skipWaiting();
      }),
      i.precacheAndRoute(
        [
          { url: "/devpigcontrol/css/app.f1f955d8.css", revision: null },
          {
            url: "/devpigcontrol/img/carnitasQuesadilla.d0588307.png",
            revision: null,
          },
          {
            url: "/devpigcontrol/img/desechables-min.5fdbb526.png",
            revision: null,
          },
          {
            url: "/devpigcontrol/img/gorditaChicharron.fd635084.png",
            revision: null,
          },
          { url: "/devpigcontrol/img/gorditas-min.301c0204.png", revision: null },
          {
            url: "/devpigcontrol/img/gorditasChicharronCarnitas.9cacf38e.png",
            revision: null,
          },
          { url: "/devpigcontrol/img/peso.0a5aacae.png", revision: null },
          {
            url: "/devpigcontrol/img/quesadillaSimple.4af6a0d6.png",
            revision: null,
          },
          { url: "/devpigcontrol/img/quesito.9bc2a187.png", revision: null },
          { url: "/devpigcontrol/img/taquito.44a65fb3.png", revision: null },
          { url: "/devpigcontrol/img/torta.9beb7ba3.png", revision: null },
          { url: "/devpigcontrol/img/tortasimple.a64b5820.png", revision: null },
          { url: "/devpigcontrol/img/vidrio-min.7d8e16b1.png", revision: null },
          {
            url: "/devpigcontrol/index.html",
            revision: "cb86c2a3b16c04ffcec364b306899ba0",
          },
          { url: "/devpigcontrol/js/456.764d2e2c.js", revision: null },
          { url: "/devpigcontrol/js/about.16427663.js", revision: null },
          { url: "/devpigcontrol/js/app.ae99d631.js", revision: null },
          { url: "/devpigcontrol/js/chunk-vendors.ca7f5ee4.js", revision: null },
          { url: "/devpigcontrol/js/error.659a38c9.js", revision: null },
          { url: "/devpigcontrol/js/history.3328267d.js", revision: null },
          { url: "/devpigcontrol/js/sales.1c141c2b.js", revision: null },
          { url: "/devpigcontrol/js/settings.441fd03d.js", revision: null },
          {
            url: "/devpigcontrol/manifest.json",
            revision: "74611ec84428713d5e0f14996e4afb64",
          },
          {
            url: "/devpigcontrol/robots.txt",
            revision: "735ab4f94fbcd57074377afca324c813",
          },
        ],
        {}
      );
  });
  //# sourceMappingURL=service-worker.js.map
  self.addEventListener('install', (event) => {
      self.skipWaiting(); // Forzar que el Service Worker activo aplique inmediatamente las actualizaciones
    });
    
    self.addEventListener('activate', (event) => {
      event.waitUntil(self.clients.claim()); // Tomar el control de la página inmediatamente
    });
    