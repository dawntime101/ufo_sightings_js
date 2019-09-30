// from data.js
var tableData = data;

//grab info from data in tbody
var tbody= d3.select("tbody");

    //build table/always clear first in case
function buildTable(data) {
    tbody.html("")
    //loop through data, appending into html
    data.forEach((dataRow) => {
        var row= tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            var cell= row.append("td");
                cell.text(val);
        }
    );
});
}
function handleClick() {

    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
