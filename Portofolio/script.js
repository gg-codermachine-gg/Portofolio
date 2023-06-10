const Bar = document.getElementById("Bar");

const Options = [
  document.getElementById("AboutMeBtn"),
  document.getElementById("ServicesBtn"),
  document.getElementById("ProjectsBtn"),
  document.getElementById("ContactBtn"),
];

function HoverOnPC() {
  Bar.style.top = "5px";

  Options.forEach((optionBtn) => {
    optionBtn.addEventListener("mouseenter", function checkHover(event) {
      const hoveredBtn = event.target;
      let x = hoveredBtn.offsetLeft;

      Bar.style.position = "absolute";
      Bar.style.top = "61px";
      if (hoveredBtn !== Options[0]) {
        Bar.style.left = `${x}px`;
      } else {
        Bar.style.left = `calc(${x}px - 6px)`;
      }
    });
  });
}

function HoverOnMobile() {
  //in one day i will finish this
  Bar.style.display = "none";
}

if (window.matchMedia("(max-width: 767px)").matches) {
  HoverOnMobile();
} else {
  HoverOnPC();
}

const contact = document.getElementById("contact");

contact.addEventListener("click", () => {
  window.location = "#Contact";
});

function sendEmail() {
  let date = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_2k6tstd";
  const emailTemplate = "template_8dhn77m";

  if (date.name && date.email && date.message) {
    emailjs
      .send(serviceId, emailTemplate, date)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent");
      })
      .catch((err) => console.log(err));
  }
}

let button = document.getElementById("HamburgerIcon");
let Mbutton = document.getElementById("Menu-button");

let checker = false;
let contentCopy;

contentCopy = button.innerHTML;

button.addEventListener("click", (e) => {
  e.preventDefault();
  Mbutton.classList.toggle("show");

  if (Mbutton.classList.contains("show")) {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>`;
  } else {
    button.innerHTML = `${contentCopy}`;
  }
});
