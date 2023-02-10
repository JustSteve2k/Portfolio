document.getElementById("btnClear").addEventListener("click", ClearForm);
document.getElementById("return").addEventListener("click", () => {
  Jump("home");
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function () {
    window.requestAnimationFrame(animateBoxes);
  };
});

function animateBoxes() {
  gsap.from(".buttonBar", { x: 100, opacity: 0, duration: 1 });
  //gsap.from(".intro", { x: -100, opacity: 0, duration: 1 });
  gsap.from(".intro h1", { opacity: 0, duration: 1 });
  gsap.from(".intro p", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: {
      each: 0.1,
      from: "end",
      grid: "auto",
    },
  });

  gsap.from(".introSvg", { opacity: 0, duration: 2 });

  //gsap.from(".project", { scrollTrigger: ".project", y: 100, opacity: 0, duration: 1 });
  gsap.from(".project", {
    y: 50,
    opacity: 0,
    scrollTrigger: ".project",
    stagger: {
      each: 0.1,
      from: "center",
      grid: "auto",
    },
  });

  gsap.from(".midBackground", { scrollTrigger: ".midBackground", y: 200, opacity: 0, duration: 1 });
  gsap.from(".techBackground", { scrollTrigger: ".midBackground", y: -200, opacity: 0, duration: 1 });

  gsap.from(".contactMainBox", { scrollTrigger: ".contactMainBox", y: 100, opacity: 0, duration: 1 });
}

function ClearForm() {
  document.getElementById("formName").value = "";
  document.getElementById("formEmail").value = "";
  document.getElementById("formMessage").value = "";
}

function Jump(h) {
  var url = location.href;
  location.href = "#" + h;
  history.replaceState(null, null, url);
}
