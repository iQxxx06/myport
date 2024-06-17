let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active section for animate on scroll
      sec.classList.add("show-animate");
    }
    else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");
  footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};


document.addEventListener("DOMContentLoaded", function() {
  const homeSection = document.getElementById("home");

  function checkHomeSection() {
      if (window.innerWidth >= 850 && window.scrollY === 0) {
          document.body.classList.add("home-active");
      } else {
          document.body.classList.remove("home-active");
      }
  }

  // Saat halaman di-load pertama kali
  checkHomeSection();

  // Saat halaman di-scroll
  window.addEventListener("scroll", function() {
      checkHomeSection();
  });

  // Saat layar di-resize
  window.addEventListener("resize", function() {
      checkHomeSection();
  });

  // Tambahkan logika di sini jika ada interaksi lain yang perlu dipertimbangkan
});
