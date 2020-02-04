////////////////////////// VARIABLES //////////////////////////
const mainContainer = document.querySelector('#main-container');
const sideBar = document.querySelector('#side-bar');
const BASE_URL = 'http://localhost:3000';
const DOGS_URL = BASE_URL + '/dogs';
const NICK_URL = BASE_URL + '/nicknames';

////////////////////////// DOM FUNCTIONS ////////////////////////////
function liTemplate(dog) {
  const liElement = document.createElement('li');
  liElement.className = 'doggo-li';
  liElement.innerText = dog.mood;
  liElement.addEventListener('click', () => mainContainerTemplate(dog));
  sideBar.append(liElement);
}

function mainContainerTemplate(dog) {
  mainContainer.innerHTML = `
        <img src="${dog.img}" alt="${dog.mood}" />
        <h2> ${dog.mood} </h2>
        <ul class="nickname-list">
          <h3> Nicknames </h3>
        </ul>
        <form id="new-nickname-form" data-dogid="${dog.id}">
          <input type="text" name="nickname" />
          <input type="submit" value="Add new nickname" />
        </form>
    `;
  // FORM
  const form = document.querySelector('#new-nickname-form');
  form.addEventListener('submit', createNewNicknameToAPI);
  // NICKNAMES
  dog.nicknames.forEach(nicknameLiTemplate);
}

function nicknameLiTemplate(nick) {
  const nicknameUl = document.querySelector('.nickname-list');
  const nickLi = document.createElement('li');
  nickLi.className = 'nick-li';
  nickLi.innerText = nick.content;
  nicknameUl.append(nickLi);
}

///////////////////////////// FETCH ///////////////////////////////

function createNewNicknameToAPI(event) {
  event.preventDefault();
  // data
  const data = {
    dog_id: event.target.dataset.dogid,
    content: event.target.nickname.value
  };
  // fetch
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  fetch(NICK_URL, config)
    .then(r => r.json())
    .then(nicknameLiTemplate);
}
