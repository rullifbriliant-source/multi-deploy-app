function addNote() {
  const input = document.getElementById('noteInput');
  const list = document.getElementById('noteList');

  if (input.value === '') {
    return;
  }

  const li = document.createElement('li');

  li.textContent = input.value;

  list.appendChild(li);

  input.value = '';
}