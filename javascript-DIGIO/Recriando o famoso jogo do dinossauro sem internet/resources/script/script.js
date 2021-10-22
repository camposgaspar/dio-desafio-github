// Dinossauro!

const dinossauro = document.querySelector('.dinossauro');
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if(event.keyCode === 32) if (!isJumping) jump();

}
function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
        // Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                position -= 20;
                dinossauro.style.bottom = position + 'px';
                }
            }, 20)
        }else{
        // Subindo
            position += 20;
            dinossauro.style.bottom = position + 'px';
        }
    }, 20);
}
// Fim Dinossauro!


// Inicio Cactus
const background = document.querySelector('.background')

function createCactus() {
    const cactus = document.createElement('div');

    let cactusPosition = 1500;
    let randomTime = Math.random() * 6000;



    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px'

        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over">Fim do jogo</h1>'
        }else{    
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

// Fim Cactus
document.addEventListener('keyup', handleKeyUp);




console.log(dinossauro)