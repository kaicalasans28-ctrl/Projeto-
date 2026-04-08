function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  // pegar a img

  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (hmtl.classList.contains("light")) {
    // se tiver light mode, adicinar a imagem light

    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal

    img.setAttribute("src", "assets/avatar.png")
  }
}
