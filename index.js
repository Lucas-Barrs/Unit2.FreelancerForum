// freelancer has props name, occupation, and price
// freelancer array including starting examples
const freelancers=[
  {name: 'alice', price: 30, occupation: 'writer'},
  {name: 'Bob', price: 50, occupation: 'teacher'},
  {name: 'carol', price: 70, occupation:'programer'},
  {name: 'SpongeBob', price: 15, occupation: 'chef'},
  {name: 'Patrick', price: 10, occupation: 'life coach'},
  {name: 'Squidward', price: 30, occupation: 'musician'},
  {name: 'Mr. Krabs', price: 100, occupation: 'entrepreneur'},
  {name: 'Sandy', price: 45, occupation: 'scientist'},
  {name: 'Plankton', price: 20, occupation: 'entrepreneur'},
  {name: 'Mrs. Puff', price: 30, occupation: 'teacher'},
];
// name array
const names =['alice', 'bob', 'carol', 'gary', 'patrick', 'squilliam', 'kevin', 'steven', 'pearl', 'garnet', 'amathyst', 'joey', 'simon', 'ben', 'grant', 'archie', 'rachel', 'cassi', 'ro', 'mickey', 'bug', 'ruben'];
// occupation array 
const occupations = ['writer', 'teacher', 'programer', 'chef', 'musician', 'life coach', 'entrepreneur', 'scientist', 'electrician', 'plumber', 'contractor', 'babysitter', 'tutor', 'truck driver', 'detailer', 'doctor', 'lawyer', 'artist'];
//display i like the example. h1 centered, average price under that, h2, then freelancer info in columns 

//price array
const prices =[10, 20, 30, 40, 50, 60, 70, 80, 90, 22, 33, 44, 55, 66, 15, 25, 35, 45, 65, 75];

// render function *create div*
function renderFreelancers(){
  const freelancersList = document.getElementById("freelancersList")

  // const heading = document.createElement('h1')
  // const freeList = document.createElement('ul')
//   freelancers.forEach(freelancer => {
//     const flElement = document.createElement('li')
//     flElement.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
//     unorderedList.append(listItem)
//   })
//   freeList.replaceChildren(unorderedList)
const table = document.createElement('table')
const headerRow = document.createElement('tr')
headerRow.innerHTML = `<th>Name</th>
<th>Occupation</th>
<th>Starting Price</th>`
table.append(headerRow)
freelancers.forEach(freelancer => {
  const tableRow = document.createElement('tr')
  tableRow.innerHTML = `<td>${freelancer.name}</td>
  <td>${freelancer.occupation}</td>
  <td>${freelancer.price}</td>`
  table.append(tableRow)
})
// replace the existing contents of the freelancers list with our new table
freelancersList.replaceChildren(table)
}

//renderAverage should:
function renderAverage() {
  //select the avgPrice div
  const averageDiv = document.getElementById("averagePrice")
  // calc avg 
  const average = freelancers.reduce((total, current) => total+current.price, 0)/freelancers.length
//update avgPrice div 
averageDiv.textContent = `$${average.toFixed(2)}`
}

// generates new freelancers
function addNewFreelancer() {
  const randomName = Math.floor(Math.random()* names.length);
  const randomOccupation = Math.floor(Math.random()* occupations.length);
  const randomPrice = Math.floor(Math.random()*prices.length)
  freelancers.push({
    name: names[randomName],
    occupation: occupations[randomOccupation],
    price: prices[randomPrice]
  })
  renderFreelancers()
  renderAverage()
}


renderFreelancers()
// has a message that shows avg price which continues to update with new listings
renderAverage()
// generates new freelancer listings after a few seconds
setInterval(addNewFreelancer, 2500)