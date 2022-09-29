function switchvisibility(classname) {
    test = document.getElementsByClassName(classname);

    for(const cell of test) {
        if(cell.classList.contains("hidden")) {
            cell.classList.remove("hidden");
        }else {
            cell.classList.add("hidden");
        }
    }

}