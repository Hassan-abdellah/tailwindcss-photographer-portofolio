const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const message = document.querySelector(".message");
const form = document.querySelector("form");
const toTop = document.querySelector("#to-top");

// scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    toTop.style.transform = "translateY(0)";
  } else {
    toTop.style.transform = "";
  }
});
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: "0",
    left: "0",
  });
});

// Make the humburger menu show or hide
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    menu.classList.remove("active");
  });
});

// validate the email
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("input").value;

  if (email === "") {
    message.innerText = "Please Provide an Email address";
    message.style.opacity = " 1";
    setTimeout(() => {
      message.style.opacity = "0";
    }, 2000);
  } else {
    if (validateEmail(email)) {
      form.querySelector("input").value = "";
      message.style.opacity = "1";
      message.style.color = "green";
      message.innerText = "Thanks,I’ll get back to you very soon";
      setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
          message.style.color = "";
        }, 1000);
      }, 2000);
    } else {
      message.style.opacity = "1";
      message.innerText = "Please Provide a valid email address";
      setTimeout(() => {
        message.style.opacity = "0";
      }, 2000);
    }
  }
});
