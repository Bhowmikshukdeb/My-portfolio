function myMenuFunction() {
  var menuBtn = document.getElementById("myNavmenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*------------Darkmode--------------*/

const body = document.querySelector("body"),
  toggleswitch = document.getElementById("toggle-switch");
toggleswitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//................. typing effect....................

var typingEffect = new Typed(".typedText", {
  strings: [ "Développeur web","Passionné de code","Explorateur de tech","Étudiant en informatique"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
});



// """""""""""""""""""""scroll Animation"""""""""""""""""""""

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal("project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skil", { delay: 100 });
srRight.reveal(".skil-box", { delay: 100 });

// """""""""""""""""""ativelink"""""""""""""""""""

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav-menu a [href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
}

window.addEventListener("scroll",scrollActive);
