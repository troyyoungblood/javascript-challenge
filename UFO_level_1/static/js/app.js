// from data.js

// // confirming table read into app correctly
// console.log(tableData);

let tableData = data;

let tbody = d3.select("tbody");

// this step renders the entire table for a starting point

tableData.forEach((dateRequest) => {
  let row = tbody.append("tr");
  Object.entries(dateRequest).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

// starting code for capturing user input and 
// filtering the data based on date entered

// Select the button
let button = d3.select("#filter-btn");

// Select the form - not used for date entry
// enter button is used to refresh the table to all listings
// let form = d3.select("form");

// Create event handler  - as noted above, only filter-btn used to 
// activate the filter function - enter refeshes the table
button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the button
function runEnter() {

  // resets the table so only the filtered date
  // is displayed. If not completed, can have instances of 
  // filtered data being appended to the bottom of the entire table
  let tbody = d3.select("tbody");
  tbody.html("")

  // Select the input element and get the raw HTML node
  // this is the id associated input button -control
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  // which in this case is the date entered by the user
  let inputDate = inputElement.property("value");

  console.log(inputDate);
  // console.log(tableData);

  // this creates the filtered table with information on the desired date
  let filteredData = tableData.filter(dateEvent => dateEvent.datetime === inputDate);

  console.log(filteredData);

// this creates the table that is rendered using the filtered data

  filteredData.forEach((dateRequest) => {
    let row = tbody.append("tr");
    Object.entries(dateRequest).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });




  

}
