(function ($) {
  ("use strict");

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // // Counter
  // $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 2000
  // });

  // Counter
  $('[data-toggle="counter-up"]').each(function () {
    var $this = $(this);
    var finalValue = $this.text(); // Store the original final value

    $this.counterUp({
      delay: 10,
      time: 2000,
    });

    // Observe changes to detect when the counter stops
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "childList") {
          // When the counter reaches the final value, add '+'
          if ($this.text() === finalValue) {
            $this.text($this.text() + "+");
            observer.disconnect(); // Stop observing after adding '+'
          }
        }
      });
    });

    // Start observing the counter element
    observer.observe($this[0], { childList: true });
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Service carousel
  $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
  });
})(jQuery);

// for read less and more

function toggleText(button) {
  var targetId = button.getAttribute("data-target"); // Get target ID
  var moreText = document.getElementById(targetId); // Target element

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    button.innerHTML = "- Read Less";
  } else {
    moreText.style.display = "none";
    button.innerHTML = "+ Read More";
  }
}

// features
const featureCards = document.querySelectorAll(".feature-card");
const featureTitle = document.getElementById("feature-title");
const featureContent = document.getElementById("feature-content");

const contentMap = {
  "Track Orders":
    "Track your orders seamlessly with real-time updates. Stay informed about your shipments and manage your deliveries efficiently.",
  "Choose Themes":
    "Personalize your experience by choosing from a variety of vibrant themes that suit your style and brand.",
  "Record Expenses":
    "Easily record and manage your business expenses to keep track of your financial health.",
  "Receivables and Payables":
    "Manage your receivables and payables efficiently to maintain a healthy cash flow.",
  "Delivery Challan":
    "Generate and manage delivery challans to ensure smooth order fulfillment and tracking.",
  "Bank Accounts":
    "Manage multiple bank accounts seamlessly, track transactions, and monitor balances with ease.",
  "Business Reports":
    "Generate detailed business reports to analyze performance, track growth, and make informed decisions.",
  "GST Invoicing / Billing":
    "Simplify your GST invoicing and billing processes with automated features for accurate tax calculations.",
  "Automatic Data Backup":
    "Ensure your data is safe with automatic backups, reducing the risk of data loss and enhancing security.",
  "Regular / Thermal Printer":
    "Compatible with regular and thermal printers for quick and easy invoice printing.",
  "Online Store":
    "Manage your online store effortlessly, track orders, update inventory, and process payments smoothly.",
};

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    featureCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    const title = card.querySelector("h5").textContent;
    featureTitle.textContent = title;
    featureContent.textContent = contentMap[title];
  });
});

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.previousElementSibling;
    content.classList.toggle("d-none");
    this.textContent = content.classList.contains("d-none")
      ? "+ Read more"
      : "- Read less";
  });
});
