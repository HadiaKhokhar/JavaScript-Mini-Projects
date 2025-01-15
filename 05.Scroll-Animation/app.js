const listOfBox = [...document.getElementById("section").children]

listOfBox.slice(1).forEach((box, index) => {
  box.classList.add(index%2 === 0 ? "left" : "right");
});


window.addEventListener("scroll", () => {
  listOfBox.forEach((box, index) => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight / 1.6) {
      box.classList.add("visible");
      if (listOfBox[1] === box && window.scrollY === 0) {
        box.classList.remove("visible");
      }
    } else {
      box.classList.remove("visible")
    }
  })
})


