function switchVisibility(classname) {
  const triggeredColum = document.getElementsByClassName(classname);

  for (const cell of triggeredColum) {
    if (cell.classList.contains("hidden")) {
      cell.classList.remove("hidden");
    } else {
      cell.classList.add("hidden");
    }
  }
}
