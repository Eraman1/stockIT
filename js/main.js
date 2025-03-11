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
      time: 2000
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
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows"
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
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true
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
  "Track Orders": `Using our advanced GST-compliant software for billing makes creating
   sales or purchase order formats easier.<br><br>
It helps set up a due date for seamless order tracking. With Stock It GST Accounting and Billing 
Software, you get auto stock adjustment, ensuring the availability of inventory items.<br><br>
Having tracking features is highly beneficial for fulfilling orders on time.<br><br>
Proper tracking helps avoid unnecessary losses. You can save time with automated tracking and focus
on other essential day-to-day tasks, leading to better customer satisfaction.<br><br>
You can also attach tax invoices with orders and track due payments using the app.<br><br>
Using our GST billing app, it is easier to enhance your purchase and sales order formats.<br><br>
Stock It provides multiple format options, including Word, PDF, and Excel.<br><br>
With our GST invoicing software, you can reduce labor costs and efforts, saving time by converting 
orders into sales or purchase invoices automatically.<br><br>
You can track open, closed, and overdue orders effortlessly using Stock It billing software.<br>
These features make the entire tracking process seamless, making Stock It the perfect choice for businesses.<br><br>
In short, it helps improve overall efficiency and employee performance.`,

  "Choose Themes": `Maintaining and sharing professional invoices with your clients can enhance your brand’s identity.<br><br>
Stock It GST Billing App offers two invoice themes for thermal printers and twelve invoice themes for regular printers.<br><br>
With this GST invoice software, you can easily customize and improve the look of your invoices.<br><br>
Using the available customization options, you can neatly prepare professional invoices that leave 
a lasting impression on clients.<br><br>
Stock It Billing App for GST is the best solution for managing your accounting and inventory needs.<br><br>
It is simple to use and offers a variety of GST invoice formats to suit your business requirements.<br><br>
Most businesses prefer Stock It billing software to maintain a professional image and enhance their brand reputation.<br><br>
This billing app is efficient for generating high-quality invoices quickly.<br>
It provides multiple theme options for both thermal and regular printers, ensuring flexibility and customization.<br><br>
Stock It GST Invoicing Software is suitable for all types of businesses, including retailers, 
pharmaceutical companies, gyms, restaurants, and many more.`,

  "Receivables and Payables": `A professional billing and accounting software lets users keep all 
transaction details and track business cash flow seamlessly.<br><br>
Now, you have a better way to keep your transaction details safe.<br><br>
Stock It GST Invoicing Software allows you to track party-wise receivables and payables.<br><br>
Using the business dashboard in the Stock It mobile app, you can monitor the money you ‘have to 
receive’ and the money you ‘need to pay’.<br><br>
You can easily track and identify who hasn’t paid you back.<br><br>
Set payment reminders to collect dues from these customers on time.<br><br>
Send payment reminders via WhatsApp, SMS, and email to any party.<br><br>
Stock It provides multiple online payment solutions to help you collect dues seamlessly, saving time for your daily tasks.<br><br>
With the bulk payment reminder feature, you can send reminders to all your customers at once, saving valuable time.<br>
The GST Billing and Invoicing Software performs automated calculations, helping track receivables and payables efficiently.<br><br>
Using the Stock It cash flow management system enables you to avoid excessive debt and revisit your business plan as it provides early indicators of cash flow issues.<br><br>
Additionally, you can use the Stock It billing app to perform party-to-party balance transfers.`,

  "Bank Accounts": `It is an ideal solution for businesses handling all online transactions through the Stock It invoicing app.<br><br>
To use the bank accounts feature, simply link your business bank account to the GST Accounting Software.<br>
With Stock It, you can easily manage credit cards, overdrafts (OD), and loan accounts.<br>
This ensures that all financial transactions are recorded accurately and efficiently.<br><br>
The Stock It invoicing and accounting software can be accessed anywhere with internet connectivity from your mobile.<br>
You can manually adjust amounts and manage online payments effortlessly.<br><br>
Stock It also offers advanced tracking features, allowing businesses to monitor transactions in real time.<br>
Alongside multiple online payment options, the app helps you maintain complete financial control with ease.`,

  "Business Reports": `Businesses need to make informed decisions to ensure a consistent growth trajectory.<br>
With Stock It, you can access 37+ business reports generated using our GST billing software to meet all your business requirements.<br><br>
Stock It accounting software comes with professional balance sheet formats.<br>
Using Stock It extensively enhances your business’s operational efficiency, as you can easily export reports in PDF or Excel.<br><br>
Key reporting features include:<br>
• Accounting and management<br>
• Billing and e-payments<br>
• GST reports and taxation<br><br>
Users can instantly view and analyze data using our GST Invoicing & Accounting Software.<br>
You can create graphical reports to track sales and expenses seamlessly.<br>
Stock It provides accurate business insights, helping you manage accounts efficiently and analyze profits quickly.<br><br>
Available reports include:<br>
• GSTR 1 format report<br>
• GSTR 3B format report<br>
• GST-related reports<br>
• Balance Sheet<br>
• Profit & Loss`,

  "GST Invoicing / Billing": `Our all-in-one GST billing software is an excellent addition to your business as it helps you automate your billing requirements.<br><br>
It is highly efficient in assisting medium and small enterprises to save more time in accounting.<br><br>
With the help of our billing software with GST, business owners can efficiently perform various tasks, including GST return filing, inventory management, invoicing, and billing.<br><br>
Our accounting app allows businesses to customise the fields as per their unique requirements.<br><br>
You can use the app to generate GST invoices for your clients within 20 seconds and print/share them with customers.<br><br>
Bills are primarily recommended in the GST invoice format, and you can create them using our GST Software for billing.<br><br>
You can use the barcode billing software to scan and speed up your billing process, while shortcut keys help in performing redundant tasks faster.<br><br>
"Bill wise payment" in the Stock It app is one of the essential features, making it easy to link your payments with your sales invoices.<br><br>
The GST mobile app creates multiple parties to manage all clients seamlessly.<br><br>
With this feature, it becomes easier to track due dates in invoices and retrieve old invoices anytime.<br><br>
The Stock It app allows businesses to quickly identify any overdue payments.<br><br>
We offer a 14-day demo to help you explore all the features before making a decision.`,

  "Automatic Data Backup": `Stock It GST billing & accounting software is 100% secure, allowing you to store your data accurately.<br><br>
Our app ensures data security by providing local, external, or online Google Drive backup options.<br><br>
With Stock It GST Invoicing & Accounting Software, you can quickly recover data whenever needed.<br><br>
The data is encrypted with enhanced security, making Stock It an advanced invoicing & accounting solution.<br><br>
Stock It GST billing software in India comes with a hassle-free backup system featuring the “auto-backup” option.<br><br>
Once activated, the system automatically creates daily backups, ensuring your data is always safe and accessible.<br><br>
Many businesses in India rely on Stock It accounting and invoicing software to simplify tasks while maintaining data security.<br><br>
The built-in encryption system ensures that only the owner can access the data, enhancing overall protection.<br><br>
No one from the Stock It team can access your business data, ensuring complete privacy.<br><br>
With multiple backup options, you can create data backups as per your requirements and safeguard your business information.<br>`,

  "Regular / Thermal Printer": `Whether you need your invoice in a perfect format instead of a bill format or Excel format, Stock It billing software is the best choice.<br><br>
Stock It is compatible with thermal and regular (laser) printers, allowing you to get your desired printout within minutes.<br><br>
Stock It’s invoicing and accounting software is an efficient way to print invoices and bills.<br><br>
Now, you have a better option to quickly generate prints in all suitable sizes, including regular paper size A4 & A5, thermal paper size 2” & 3”, and other custom paper sizes.<br><br>
Connect our app with your regular or thermal printer via Bluetooth or plug-in to start printing invoices instantly.<br><br>
You can use the Stock It app to create and send professional invoices to your customers without the need for printing, using digital methods like email, SMS, or WhatsApp.<br><br>
With the GST invoicing app, you can choose from multiple formats such as Excel, Word, or PDF, fully customize your invoices, and print them as needed.<br><br>
The process is seamless, ensuring efficiency and cost-effectiveness for your business.<br><br>
You can use both regular and thermal printers to print invoices and hand them over to clients.`,

  "Online Store": `Set up your online store within a few hours using Stock It GST billing software.<br>
With our mobile shop billing app, you can list all the services and products you offer, creating a digital catalog to boost your online sales.<br><br>
Stock It billing software does not charge any fees for using online store features, making it easier to take your business online.<br>
You can share your store link with customers, allowing them to place orders online and pick up their products once they are ready.<br><br>
Using the online store feature in the Stock It GST billing and invoicing app helps reduce waiting time at the store counter.<br>
Your customers can place orders in advance, and you can have their packages ready before they arrive.<br><br>
Expand your reach and attract more local customers by taking your business online with the Stock It online store.<br>
Offer doorstep delivery or in-store pickup services to enhance customer convenience and increase sales.<br>
With Stock It GST billing software, you can update your online store anytime, ensuring your products and services are always up to date.`
};

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    featureCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    const title = card.querySelector("h5").textContent;
    featureTitle.innerHTML = title;
    featureContent.innerHTML = contentMap[title];
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

// faq

const faqs = [
  {
    question: "Which is the best software for billing?",
    answer: `Stock It is the ultimate billing software designed for SMEs in 
              India, offering a range of powerful features to streamline 
              business management. <br/><br/>
              With Stock It, you can save time and effort by automating GST 
              invoicing, tracking inventory in real-time, and generating 
              detailed reports using stored data.`
  },
  {
    question: "What is billing software?",
    answer: `Stock It is a powerful invoicing and billing software designed 
              to create personalized GST bills that enhance your brand identity.
              With fully customizable invoice templates, businesses can generate 
              professional-looking invoices that leave a lasting impression 
              on customers.`
  },
  {
    question: "How much does a billing software cost?",
    answer: `You can use Stock It billing software on Android devices and 
              desktop to manage your business efficiently. We offer a 14-day 
              free trial for the desktop version. <br/>
              After the trial period, you can continue using the software by 
              choosing a suitable plan.`
  },
  {
    question: "Is there free billing software?",
    answer: `You can get the professional billing software by Stock It with a 14-day free demo to experience its powerful features. Our software helps you manage billing, invoicing, and inventory efficiently. After the demo period, you can choose a suitable plan to continue using Stock It for seamless business operations.`
  },
  {
    question: "Can we you Stock it Offline?",
    answer: `Current NOT! but in the future YES`
  }
];

function generateFAQ() {
  const faqContainer = document.getElementById("faqAccordion");
  faqContainer.innerHTML = faqs
    .map(
      (faq, index) => `
        <div class="card">
          <div class="card-header faq-header collapsed" role="tab" id="heading${index}" 
              data-toggle="collapse" href="#collapse${index}" aria-expanded="false" 
              aria-controls="collapse${index}">
            <h6 class="mb-0 d-flex justify-content-between align-items-center text-secondary">
              ${faq.question}
              <i class="fas fa-chevron-down"></i>
            </h6>
          </div>
          <div id="collapse${index}" class="collapse ${
        index === 0 ? "show" : ""
      }" 
              role="tabpanel" aria-labelledby="heading${index}" data-parent="#faqAccordion">
            <div class="card-body">${faq.answer}</div>
          </div>
        </div>`
    )
    .join("");
}

generateFAQ();



function toggleBilling(option) {
      var monthlyDiv = document.getElementById("monthly");
      var yearlyDiv = document.getElementById("yearly");

      if (option === "monthly") {
        monthlyDiv.classList.remove("d-none");
        yearlyDiv.classList.add("d-none");
      } else if (option === "yearly") {
        monthlyDiv.classList.add("d-none");
        yearlyDiv.classList.remove("d-none");
      } else if (option === "all") {
        monthlyDiv.classList.remove("d-none");
        yearlyDiv.classList.remove("d-none");
      }
    }


    