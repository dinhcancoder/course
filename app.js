let contentItemEl = document.querySelectorAll(".content-item");

contentItemEl.forEach((item) =>
  item.addEventListener("click", () => {
    if (!item.className.includes("active")) {
      resetContent();
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  })
);

function resetContent() {
  contentItemEl.forEach((item) => {
    item.classList.remove("active");
  });
}

// scroll to top
document.querySelector(".scroll").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let bookContent = document.querySelector(".book-content");

document.querySelector(".book").addEventListener("click", () => {
  bookContent.classList.toggle("showBook");
});

document.querySelector("#close").addEventListener("click", () => {});
