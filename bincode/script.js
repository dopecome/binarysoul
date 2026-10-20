const views = document.querySelectorAll(".view");

function showView() {
  const name = location.hash.slice(1) || "home";

  views.forEach(function (view) {
    view.hidden = view.id !== name;
  })
}

window.addEventListener("hashchange", showView);
showView();
