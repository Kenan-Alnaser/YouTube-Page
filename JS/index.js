//hamburger menu
let clicked = false;
document.querySelector(".menu-btn").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector("aside").style.cssText =
      "display: block; position: fixed;left:0;z-index: 1; opacity: 0.9;";
    document.querySelector(".x-1").style.cssText =
      "  transform: rotate(-0.15turn); transition: 1s ease; position: absolute;";
    document.querySelector(".x-2").style.cssText =
      "  position: absolute; animation-name: move-right; animation-iteration-count: 1; animation-duration: 1s; transform: scale(0);";
    document.querySelector(".x-3").style.cssText =
      "  transform: rotate(0.15turn); transition: 1s ease; position: absolute;";
  } else {
    document.querySelector("aside").style.cssText = "display: none;";
    document.querySelector(".x-1").style.cssText = " ";
    document.querySelector(".x-2").style.cssText =
      "  position: absolute; transform: scale(1);";
    document.querySelector(".x-3").style.cssText = " ";
  }
});

//Dark-light mode slider
const theme = () => {
  const subCount = document.querySelector(".channel-subscriber-count").style;
  const mode = document.querySelector("#light-dark").checked;
  const headers = document.querySelectorAll("h1");
  const vTitles = document.querySelectorAll(".video-title");
  const info = document.querySelector(".channel-info").style;
  const head = document.querySelector(".head-section").style;
  const body = document.querySelector("body").style;
  const nav = document.querySelector(".channel-nav").style;
  if (mode) {
    vTitles.forEach((h3) => {
      h3.style.color = "white";
    });
    headers.forEach((h1) => {
      h1.style.color = "white";
    });
    subCount.color = "white";
    info.backgroundColor = "#1d1c1c";
    nav.backgroundColor = "#1d1c1c";
    head.backgroundColor = "#202020";
    body.backgroundColor = "#0c0b0b";
  } else {
    vTitles.forEach((h3) => {
      h3.style.color = "black";
    });
    headers.forEach((h1) => {
      h1.style.color = "black";
    });
    subCount.color = "black";
    info.backgroundColor = "white";
    nav.backgroundColor = "white";
    head.backgroundColor = "white";
    body.backgroundColor = "#e3e3e3";
  }
};
