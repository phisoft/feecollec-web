(function () {
  "use strict";

  var owlCarousel = function () {
    new WOW().init();

    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 170,
      center: true,
      smartSpeed: 900,
      nav: true,
      navText: [
        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
        "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
          margin: 120,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
          autoplay: true,
          autoplayTimeout: 1500,
          navText: [
            "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
            "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
          ],
        },
      },
    });
  };

  $.fn.goTo = function () {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top + "px",
      },
      "slow",
    );
    return this;
  };

  $(function () {
    owlCarousel();
  });

  // ========== FAQ Accordion with ARIA support ==========
  var containerItemHeaders = document.querySelectorAll(
    ".faq-container-item-header",
  );

  containerItemHeaders.forEach(function (header) {
    // Set initial ARIA attributes
    header.setAttribute("aria-expanded", "false");
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");

    var bodyEl = header.nextElementSibling;
    if (bodyEl) {
      bodyEl.setAttribute("role", "region");
      var bodyId = "faq-body-" + Math.random().toString(36).substr(2, 9);
      bodyEl.id = bodyId;
      header.setAttribute("aria-controls", bodyId);
    }

    function toggleFaq(h) {
      var currentlyActive = document.querySelector(
        ".faq-container-item-header.active",
      );
      if (currentlyActive && currentlyActive !== h) {
        currentlyActive.classList.remove("active");
        currentlyActive.setAttribute("aria-expanded", "false");
        currentlyActive.nextElementSibling.style.maxHeight = "0";
      }
      h.classList.toggle("active");
      var isActive = h.classList.contains("active");
      h.setAttribute("aria-expanded", isActive ? "true" : "false");
      var body = h.nextElementSibling;
      if (isActive) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = "0";
      }
    }

    header.addEventListener("click", function () {
      toggleFaq(header);
    });

    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFaq(header);
      }
    });
  });

  // ========== Back to Top Button ==========
  var backToTop = document.createElement("button");
  backToTop.id = "back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(backToTop);

  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ========== Sticky Navbar Shadow Enhancement ==========
  var navContainer = document.querySelector("#page-wrap > .bg-light");
  if (navContainer) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 10) {
          navContainer.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
        } else {
          navContainer.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.06)";
        }
      },
      { passive: true },
    );
  }
})();
