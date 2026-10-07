function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  if (isNaN(rn) || isNaN(cn)) {
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be greater than 0");
    return;
  }

  const table = document.getElementById("myTable");

  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();

    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.innerText = "Row-" + i + " Column-" + j;
    }
  }
}