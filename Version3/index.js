const minimumSize = 150;

const columnTypeToRatioMap = {
  numeric: 1,
  "text-short": 1.67,
  "text-long": 3.33,
};

const table = document.querySelector("table");

const columns = [];
let headerBeingResized;

const onMouseMove = (e) =>
  requestAnimationFrame(() => {

    horizontalScrollOffset = document.documentElement.scrollLeft;
    const width =
      horizontalScrollOffset + e.clientX - headerBeingResized.offsetLeft;

    const column = columns.find(header => header === headerBeingResized);
    column.size = Math.max(min, width) + "px";

    columns.forEach((column) => {
      if (column.size.startsWith("minmax")) {
        column.size = parseInt(column.header.clientWidth, 10) + "px";
      }
    });

    table.style.gridTemplateColumns = columns
      .map(({ header, size }) => size)
      .join(" ");
  });

const onMouseUp = () => {

  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
  headerBeingResized.classList.remove("header--being-resized");
  headerBeingResized = null;
};

const initResize = ({ target }) => {

  headerBeingResized = target.parentNode;
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
  headerBeingResized.classList.add("header--being-resized");
};

document.querySelectorAll("th").forEach((header) => {
  const maximumSize = columnTypeToRatioMap[header.dataset.type] + "fr";
  columns.push({
    header,
    size: `minmax(${minimumSize}px, ${maximumSize})`,
  });

  header
    .querySelector(".resize-handle")
    .addEventListener("mousedown", initResize);
});
