(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const t = document.querySelector(".burger__menu"),
    n = document.querySelector(".main-page__items"),
    i = document.querySelector(".burger__line");
  t &&
    t.addEventListener("click", function (e) {
      t.classList.toggle("_active"),
        n.classList.toggle("_active"),
        i.classList.toggle("_active");
    }),
    document.addEventListener("click", function (e) {
      const s = e.target,
        c = s == n || n.contains(s),
        o = s == t,
        a = n.classList.contains("_active");
      c ||
        o ||
        !a ||
        (n.classList.remove("_active"), i.classList.remove("_active")),
        n.classList.contains("_active") &&
          ((n.style.transition = "all 1s ease 0s"),
          window.addEventListener("resize", function () {
            window.matchMedia("(max-width: 768.98px)").matches ||
              (n.style.transition = "none");
          }));
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
