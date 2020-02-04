fetch(DOGS_URL)
  .then(r => r.json())
  .then(dogs => {
    renderDogs(dogs);
    renderDogInfo(dogs[0]);
  });

function renderDogs(dogs) {
  dogs.forEach(dog => renderOneDog(dog));
}

function renderOneDog(dog) {
  let sideBar = document.querySelector('#side-bar');
  let dogLi = document.createElement('li');
  dogLi.innerText = dog.mood;
  dogLi.className = 'doggo-li';
  dogLi.addEventListener('click', () => renderDogInfo(dog));
  sideBar.append(dogLi);
}

const renderNicknames = n => {
  const nicknameUl = document.querySelector('.nickname-list');
  nicknameUl.innerHTML =
    `<li class="nick-li"> ${n} </li>` + nicknameUl.innerHTML;
};

function renderDogInfo(dog) {
  mainContainer.innerHTML = `<img src=" ${dog.img} " alt=" ${dog.mood} " />
      <h2> ${dog.mood} </h2>
      <h3> Nicknames </h3>
      <form id="new-form" data-id="${dog.id}">
        <input type="text" name="mood"  placeholder="mood"/>
        <input type="text" name="img"  placeholder="img"/>
        <input type="submit" value="Make Doggoo" />
      </form>
      <ul class="nickname-list">
      </ul>
      `;
  //// NEW FORM

  const newForm = mainContainer.querySelector('#new-form');
  console.log(newForm);
  newForm.addEventListener('submit', e => {
    e.preventDefault();
    debugger;
    // DATA
    const data = {
      mood: e.target.mood.value,
      img: e.target.img.value
    };
    // CONFIG OBJECT
    const config = {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    };
    // FETCH
    fetch(DOGS_URL + '/' + e.target.dataset.id, config)
      .then(r => r.json())
      .then(dog => renderDogInfo(dog));
    // END
  });

  ///
  // NICKNAMES
  // <form id="new-nickname-form">
  //     <input type="text" name="nickname" />
  //     <input type="submit" value="Add new nickname" />
  // </form>;

  dog.nicknames.forEach(nickname => {
    renderNicknames(nickname.content);
  });
  // FORM

  // const form = mainContainer.querySelector('#new-nickname-form');

  // form.addEventListener('submit', e => {
  //   e.preventDefault();
  //   // DATA
  //   const userInput = {
  //     dog_id: dog.id,
  //     content: e.target.nickname.value
  //   };
  //   // CONFIG OBJ
  //   const config = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify(userInput)
  //   };

  //   // FETCH
  //   fetch('http://localhost:3000/nicknames', config)
  //     .then(r => r.json())
  //     .then(newNickname => {
  //       renderNicknames(newNickname.content);
  //     });
  // });
}
