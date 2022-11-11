function switchVisibility(classname) {
  TriggeredColum = document.getElementsByClassName(classname);

  for (const cell of TriggeredColum) {
    if (cell.classList.contains("hidden")) {
      cell.classList.remove("hidden");
    } else {
      cell.classList.add("hidden");
    }
  }
}
