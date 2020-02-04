const DOGS_URL = `http://localhost:3000/dogs`;
let mainContainer = document.querySelector('#main-container');
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

// t.string "mood"
// t.string "img"

const form = `
    <form id="new-form">
        <input type="text" name="mood"  placeholder="mood"/>
        <input type="text" name="img"  placeholder="img"/>
        <input type="submit" value="Make Doggoo" />
    </form>
`;

// mainContainer.innerHTML = mainContainer.innerHTML + form;
// console.log(form);
