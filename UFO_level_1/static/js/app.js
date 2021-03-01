// from data.js

let tableData = data;

// // confirming table read into app correctly
// console.log(tableData);

// this step renders the entire table for a starting point
let tbody = d3.select("tbody");

tableData.forEach((dateRequest) => {
    let row = tbody.append("tr");
    Object.entries(dateRequest).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

// starting code for capturing user input and 
// filtering the data based on date entered

// Select the button to filter data
let buttonEntry = d3.select("#filter-btn");

// Select button to refresh the page
let buttonClear = d3.select("#clear-btn");

// Create event handlers
buttonEntry.on("click", runEnter);
buttonClear.on("click", runClear);

// Complete the event handler function for clearing data entry and resetting table
function runClear() {
    location.reload();
};

// Complete the event handler function for the button
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

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
