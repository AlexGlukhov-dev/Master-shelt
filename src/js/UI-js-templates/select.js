document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );

  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  dropDownListItems.forEach(listItem => {
    listItem.addEventListener("click", e => {
      e.stopPropagation();
      dropDownBtn.innerText = e.target.innerText;
      dropDownBtn.focus();
      dropDownInput.value = e.target.dataset.value;
      dropDownList.classList.remove("dropdown__list--visible");
      console.log('option',  dropDownInput.value)
    });
  });

  document.addEventListener("click", e => {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});
