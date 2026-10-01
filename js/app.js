document.querySelector('.primary')?.addEventListener('click', () => {
  alert('New project flow coming next.');
});

document.querySelectorAll('.bottom-nav button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav button').forEach((item) => {
      item.classList.remove('active');
    });
    button.classList.add('active');
  });
});
