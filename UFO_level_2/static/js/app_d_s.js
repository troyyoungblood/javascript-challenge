// from data.js
let tableData = data;

let tbody = d3.select("tbody");

tableData.forEach((dateRequest) => {
  let row = tbody.append("tr");
  Object.entries(dateRequest).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

// // confirming table read into app correctly
// console.log(tableData);

// Select the button
let button = d3.select("#filter-btn");

// Select the form
// let form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

  // resets the table
  let tbody = d3.select("tbody");
  tbody.html("")

  // Select the input element and get the raw HTML node
  // this is the id associated input form -control
  let inputElement = d3.select("#datetime");
  let inputElementS = d3.select("#state");

  // Get the value property of the input element
  let inputDate = inputElement.property("value");
  let inputState = inputElementS.property("value");

  console.log(inputDate);
  console.log(inputState);
  // console.log(tableData);

  let filteredData = tableData
  if (inputDate) {
    filteredData = filteredData.filter(dateEvent => dateEvent.datetime === inputDate);
  }
  if (inputState)  { 
  filteredData = filteredData.filter(stateEvent => stateEvent.state === inputState);
  }

  console.log(filteredData);

  // // Get a reference to the table body
  // let tbody = d3.select("tbody");

  filteredData.forEach((dateRequest) => {
    let row = tbody.append("tr");
    Object.entries(dateRequest).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });




  

}
