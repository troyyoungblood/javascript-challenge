// from data.js
let tableData = data;

// // confirming table read into app correctly
// console.log(tableData);

// this displays the entire table upon initial rendering
let tbody = d3.select("tbody");

tableData.forEach((dateRequest) => {
  let row = tbody.append("tr");
  Object.entries(dateRequest).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

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

// Complete the event handler function for filtering data
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // this is the id associated with the respective input 
  let inputElement = d3.selectAll("#datetime");
  let inputElementS = d3.selectAll("#state");
  let inputElementC = d3.selectAll("#city");
  let inputElementCo = d3.selectAll("#country");
  let inputElementSh = d3.selectAll("#shape");


  // Get the value property of the input element
  let inputDate = inputElement.property("value");
  let inputState = inputElementS.property("value").toLowerCase();
  let inputCity = inputElementC.property("value").toLowerCase();  
  let inputCountry = inputElementCo.property("value").toLowerCase();
  let inputShape = inputElementSh.property("value").toLowerCase();  

// Display respective value in console
  console.log(inputDate);
  console.log(inputState);
  console.log(inputCity); 
  console.log(inputCountry);
  console.log(inputShape);  
  
  // console.log(tableData);

  // initializes filterData to tableData - the full set of data for filter event
  let filteredData = tableData;
  if (inputDate) {
    filteredData = filteredData.filter(dateEvent => dateEvent.datetime === inputDate);
  };
  if (inputState)  { 
    filteredData = filteredData.filter(stateEvent => stateEvent.state === inputState);
  };
  if (inputCity)  { 
    filteredData = filteredData.filter(cityEvent => cityEvent.city === inputCity);
  };
  if (inputCountry)  { 
    filteredData = filteredData.filter(countryEvent => countryEvent.country === inputCountry);
  };
  if (inputShape)  { 
    filteredData = filteredData.filter(shapeEvent => shapeEvent.shape === inputShape);
  };

  console.log(filteredData);

  let tbody = d3.select("tbody");
  tbody.html("")

  filteredData.forEach((dataRequest) => {
    let row = tbody.append("tr");
    Object.entries(dataRequest).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });


}
