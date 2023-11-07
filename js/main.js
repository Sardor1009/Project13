let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/light.svg";
  }
  document.body.classList.toggle("light");
 });
//  const loading = document.getElementById("loading");

// window.addEventListener("load", () => {
//   loading.classList.add("loading-none");
//  });
//  or;
const loading = document.getElementById("loading");

const loadingDuration = 4000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
 
