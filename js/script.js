const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('.game-over');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'Assets/1567af474c4ecf3a1e84c293d02bca7e59140719_hq.gif'

            clearInterval(loop);

            over.style.display = 'flex';

        }

} , 10);

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)