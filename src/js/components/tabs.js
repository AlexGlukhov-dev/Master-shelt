const wrapper = document.querySelector(".tab__btns-wrapper");

wrapper.addEventListener("mousedown", e => {
  wrapper.addEventListener("scroll", () => {
    screenX += 50;
    console.log(screenX);
  })

})
