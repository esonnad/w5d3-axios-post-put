document = document.addEventListener("DOMContentLoaded", function (event) {

  // Create <tr> for all characters in table inside the HTML
  function addTableRows(characters) {
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
      addTableRows(response.data)
    })

  setTimeout(() => {
    // When the "add" button is clicked
    document.getElementById('add-character').onclick = function () {
      // A character based on the input values is created
      const characterInfo = {
        name: document.querySelector('input[name=name]').value,
        occupation: document.querySelector('input[name=occupation]').value,
        weapon: document.querySelector('input[name=weapon]').value,
      };
      // The character is posted to the API
      axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
        .then(response => {
          // The character is added in the table
          let characterCreated = response.data
          addTableRows([characterCreated])
        })
        .catch(error => {
          console.log('Oh No! Error!');
          console.log(error)
        })
    }
  }, 100)
});
