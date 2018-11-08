// When the WALL-E button is clicked
document.getElementById("post-wall-e").onclick = function () {
  // Create an object with data to submit
  const characterInfo = {
    name: 'WALL-E',
    occupation: 'Waste Allocation Robot',
    weapon: 'Head laser'
  };
  // Make a POST request
  axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
    .then(response => {
      console.log('post success');
      showFeedback(response)
    })
    .catch(error => {
      console.log('Oh No! Error!');
      console.log(error)
    })
}

// function showFeedback(response) {
//   const newCharacterHtml =
//     `
//       <li>
//         <h3> ${response.data.name} </h3>
//         <p> Id: ${response.data.id} </p>
//       </li>
//     `;
//   document.getElementById("characters-list").innerHTML += newCharacterHtml;
// }

// Create <tr> for all characters in table inside the HTML
function displayTableRows(characters) {
  for (let i = 0; i < characters.length; i++) {
    document.getElementById('tbody').innerHTML += `
      <tr>
        <td>${characters[i].id}</td>
        <td>${characters[i].name}</td>
        <td>${characters[i].occupation}</td>
        <td>${characters[i].weapon}</td>
      </tr>
    ` 
  }
}

axios.get('https://ih-crud-api.herokuapp.com/characters')
.then(response => {
  displayTableRows(response.data)
})