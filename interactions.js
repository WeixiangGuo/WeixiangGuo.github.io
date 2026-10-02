(function initFigurePreview() {
  const dialog = document.getElementById("figure-dialog");
  const image = document.getElementById("figure-image");
  const caption = document.getElementById("figure-caption");
  if (!dialog || typeof dialog.showModal !== "function") return;

  let trigger = null;
  document.querySelectorAll("a[data-figure]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom)) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", function () {
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
