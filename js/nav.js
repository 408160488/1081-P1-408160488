function change(index) {
  const p = document.getElementById("section");
  p.style.backgroundColor = "azure";
  switch (index) {
    case 7:
      p.innerHTML = "<iframe width=100% height=100% src='intro.html' >";
      break;

    case 8:
      p.innerHTML = "<iframe width=100% height=100% src='pokemon.html' >";
      break;

    case 9:
      p.innerHTML =
        "<iframe width=100% height=100% src='./w02/imageGallery.html' >";
      break;

    case 10:
      p.innerHTML = "<iframe width=100% height=100% src='./w02/blog.html' >";
      break;

    case 11:
      p.innerHTML = "<iframe width=100% height=100% src='./w03/div.html' >";
      break;

    case 12:
      p.innerHTML = "<iframe width=100% height=100% src='./w04/tku60.html' >";
      break;
  }
}
