const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
const infoArea = document.querySelector('.info');
const infoMes = document.querySelector('.info__text');
const restart = document.querySelector('.info__restart');
function jump() {
  if (dispatchEvent.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 300);
  }
}

let aliveCheck = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );
  //console.log(dinoTop, cactusLeft);
  if (cactusLeft > 5 && cactusLeft < 60 && dinoTop <= 130 && dinoTop >= 110) {
    dino.style.animationPlayState = 'paused';
    cactus.style.animationPlayState = 'paused';
    infoArea.classList.remove('hidden');
    infoMes.innerText = 'Game over';
    restart.innerHTML = `<img src="img/restart.png" alt="restart icon">`;
    restart.addEventListener('click', function (e) {
      window.location.reload();
    });
  }
}, 1);

document.addEventListener('keydown', function (e) {
  jump();
});
