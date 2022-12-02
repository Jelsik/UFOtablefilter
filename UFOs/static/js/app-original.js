//import the data from data,js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear the table
    tbody.html("");
    //loop thorugh each object in the data
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); //add a new row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val); //add the text to the cell
        });
    });
}

function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if data entered and then filter the data
    if(date){ //apply filter to the table data
        filteredData = filteredData.filter(row=> row.datetime === date);
        
    };
    //rebuild the table with the filtered data
    //since filttered is equivalent to the original, a non date entry will cause orginaltable to reoccur
    buildTable(filteredData);
}
//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick); 
//build table when the page loads
buildTable(tableData);
//do not forget to add the #for id and . for class infront of what
//JS is looking for