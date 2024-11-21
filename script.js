const fullScreen = document.querySelector('.Fullscreen');
const container = document.querySelector('.container')
const topLogo = document.querySelector('.TopLOGO');

setTimeout(() => {
    fullScreen.style.opacity = '0';
  }, 3000);

  setTimeout(() => {
    fullScreen.style.display = 'none';
    // container.style.display = 'flex';
  }, 3200);

  const passwordInput = document.getElementById('password');
  const submitButton = document.querySelector('.submit');

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
      submitButton.style.backgroundColor = 'green';
    } else {
      submitButton.style.backgroundColor = 'gray';
    }
  });
  

