
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector("header nav");

const colorBtn1 = document.querySelector('.box1');
const colorBtn2 = document.querySelector('.box2');
const colorBtn3 = document.querySelector('.box3');
const colorBtn4 = document.querySelector('.box4');

colorBtn1.addEventListener('click', () => {
    document.documentElement.style.setProperty('--main-color', '#ff7b00')
})

colorBtn2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--main-color', '#00c3ff')
})

colorBtn3.addEventListener('click', () => {
    document.documentElement.style.setProperty('--main-color', '#f5b400')
})

colorBtn4.addEventListener('click', () => {
    document.documentElement.style.setProperty('--main-color', '#06bb9d')
})


menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("ri-close-large-line");
  navBar.classList.toggle("active");
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("ri-close-large-line");
  navBar.classList.remove("active");
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 12) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 13;
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});
document.getElementById('download-cv').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  // Set Font
  doc.setFont("times", "normal");

  // Function to add section divider
  function addSectionDivider(y) {
      doc.setDrawColor(200, 200, 200); // Light gray color
      doc.setLineWidth(0.5);
      doc.line(20, y, 190, y);
  }

  // Title
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 102); // Dark Blue
  doc.text("Parwinder Kaur", 105, 20, { align: "center" });
doc.setFont("times", "normal");
  // Contact Details
  doc.setFontSize(12);
  doc.setTextColor(50, 50, 50);
  doc.text("Email: parwinderkaur385@gmail.com.com  |  Phone: 9501268759", 20, 30);
  doc.text("Location: Punjab, India", 20, 38);

  addSectionDivider(44); // Section divider
doc.setFont("times", "bold");
  // Career Objective
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 102);
doc.setFont("times", "normal");
doc.text("Career Objective", 105, 52, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Driven and innovative Full-Stack Developer with a passion for crafting user-friendly and efficient websites. Proficient in HTML, CSS, JavaScript, PHP, and NodeJs, I aspire to leverage my expertise to excel in a Web Developer role. My goal is to contribute to projects that challenge me to work with complex codebases while delivering visually appealing and seamlessly navigable websites. Committed to providing top-notch maintenance and support services to ensure the continuous optimal performance of web applications.`, 20, 60, { maxWidth: 170 });

  addSectionDivider(90); // Section divider

  // Academics
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 102);
  doc.text("Academics", 105, 100, { align: "center" });
  doc.setFont("times", "normal");

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text("MCA Degree, Lovely Professional University, Phagwara, 2018-2020", 20, 110);
  doc.text("BCA Degree, Lovely Professional University, Phagwara, 2015-2018", 20, 118);
  doc.text("SR. SECONDARY, PSEB, 2014", 20, 126);

  addSectionDivider(135); // Section divider

  // Work Experience
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 102);
  doc.text("Work Experience", 105, 145, { align: "center" });
doc.setFont("times", "normal");

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);

  // Full-Stack Developer - Tulip Elastics
  doc.setFont("times", "bold");
  doc.text("Full-Stack Developer - Tulip Elastics Private Limited (Aug 2023 – May 2024)", 20, 155);
  doc.setFont("times", "normal");
  doc.text(`Developed custom Google Workspace applications and add-ons using Google Apps Script, JavaScript, and HTML/CSS. Created automated workflows and processes within Google Workspace applications to improve efficiency.Integrated third-party APIs and services into Google Workspace applications for enhanced functionality.Utilized AWS S3 Bucket for storage and bucket policy settings.Designed, developed, and enhanced system functionalities using various technologies.Handled backend tasks and created APIs for web and mobile applications using PHP & NodeJS.Third-party APIs: Login with Google, Facebook, Razorpay payment API, OTP-based login, WhatsApp messaging.Implemented event triggers for lead generation from social media. Developed biometric system, PDF generation, invoices, email triggers, and face recognition attendance.`, 20, 160, { maxWidth: 170 });


  // Software Engineer - Mentorkart
  doc.setFont("times", "bold");
  doc.text("Software Engineer - Mentorkart (Dec 2021 – May 2023)", 20, 215);
  doc.setFont("times", "normal");
  doc.text(`Developed admin panel for product management with multiple admin users and role-based access. Integrated payment gateways and social login APIs.Handled backend tasks and created APIs for web and mobile applications using NodeJS.Proficiency with front-end technologies like CSS, HTML, JavaScript, jQuery, and JSON.Implemented MySQL database technologies and agile development methodologies.Developed authentication and authorization using JWT, cookies, and session-based security.Optimized and tuned Node.js applications for performance.Ensured proper adherence to privacy and security standards.Managed API versioning for mobile applications with JWT token authentication.Worked with GitHub, FileZilla, and version control tools for application deployment.`, 20, 220, { maxWidth: 170 });

// New Page for Next Jobs
  doc.addPage();  

  // Web Developer - Dikonia
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.text("Web Developer - Dikonia (Nov 2020 – Nov 2021)", 20, 20);
  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text(`Worked on various projects, including telecom solutions and e-commerce websites.Handled backend tasks and created APIs for web and mobile applications using PHP. Developed features for managing schools, students,and parents. Implemented a biometric device for student attendance. Worked on an admin panel for category and product management. Designed a website with online ordering functionality.`, 20, 30, { maxWidth: 170 });

  addSectionDivider(52); // Section divider

  // Technical Skills
  doc.setFont("times", "bold");
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 102);
  doc.text("Technical Skills", 105, 60, { align: "center" });
doc.setFont("times", "normal");

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  
  doc.setFont("times", "bold");
  doc.text("Languages & Frameworks:", 20, 70);
  doc.setFont("times", "normal");
  doc.text("JavaScript, jQuery, CorePHP, CakePHP, CodeIgniter, Laravel,", 72, 70, { maxWidth: 220 });
	doc.text(" NodeJS, AdonisJS, SailsJS, MySQL", 72, 80, { maxWidth: 220 });
    
  doc.setFont("times", "bold");
  doc.text("Web Technologies:", 20, 90);
  doc.setFont("times", "normal");
  doc.text("HTML, CSS3, Bootstrap, REST/RESTful, JSON, AJAX, Google Apps Script", 57, 90, { maxWidth: 170 });

  doc.setFont("times", "bold");
  doc.text("Tools:", 20, 100);
  doc.setFont("times", "normal");
  doc.text("Postman, JIRA, FileZilla, GitHub, WebStorm, Visual Studio Code, MySQL Workbench", 35, 100, { maxWidth: 170 });

  doc.setFont("times", "bold");
  doc.text("Operating Systems:", 20, 110);
  doc.setFont("times", "normal");
  doc.text("Windows XP/7/10, Linux", 57, 110);

  doc.setFont("times", "bold");
  doc.text("Servers:", 20, 120);
  doc.setFont("times", "normal");
  doc.text("Amazon Web Services (AWS) and Apache (XAMPP)", 36, 120);
  // Save PDF
  doc.save("Parwinder_Kaur_CV.pdf");
});