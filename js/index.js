const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const infoArea = document.querySelector('.info');
const infoMes = document.querySelector('.info__text');
const icon = document.querySelector('.info__icon');

icon.addEventListener('click', startPlay);

function startPlay() {
  const link = window.location.href;
  setTimeout(() => {
    cactus.classList.add('start');
    infoMes.innerText = 'Game over';
    icon.innerHTML = `<img src="img/restart.png" alt="restart icon">`;
    infoArea.classList.add('lose');
  }, 800);
  infoArea.classList.add('hidden');

  function jump() {
    if (dispatchEvent.classList != 'jump') {
      dino.classList.add('jump');
      setTimeout(() => {
        dino.classList.remove('jump');
      }, 300);
    }
  }
  let aliveCheck = setInterval(() => {
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top')
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left')
    );
    if (cactusLeft > 5 && cactusLeft < 61 && dinoTop <= 130 && dinoTop >= 110) {
      dino.style.animationPlayState = 'paused';
      cactus.style.animationPlayState = 'paused';
      infoArea.classList.remove('hidden');
      icon.addEventListener('click', reload);
    }
  }, 1);

  document.addEventListener('keydown', function (e) {
    jump();
  });
}

function reload() {
  setTimeout(() => {
    //window.location.href = link;
    infoArea.classList.remove('lose');
    infoArea.classList.add('hidden');
    window.location.reload();
  }, 100);
}
