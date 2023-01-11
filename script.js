const form = document.getElementById('name-form');
const nameTagContainer = document.getElementById('name-tag-container');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from refreshing the page
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;

  const nameTag = document.createElement('div');
  nameTag.classList.add('name-tag');
  nameTag.innerHTML = `<h1>${name}</h1>`;

  nameTagContainer.appendChild(nameTag);
});
