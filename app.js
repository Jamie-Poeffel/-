const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenues();
  }
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}
function toggleSidebar() {
  const isClosed = sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate', isClosed);

  localStorage.setItem('sidebarClosed', isClosed);

  closeAllSubMenues();
}

function closeAllSubMenues() {
  Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}
