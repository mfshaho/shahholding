function quarter() {
  window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
}


window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px")
  } else {
    console.log("Screen less than 500px")
  }
})
