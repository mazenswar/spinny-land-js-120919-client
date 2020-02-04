fetch(DOGS_URL)
  .then(r => r.json())
  .then(doggos => {
    mainContainerTemplate(doggos[0]);
    doggos.forEach(liTemplate);
  });
