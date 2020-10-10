import { e } from './e.js';
let a;
const b = document.getElementById('game-name');
function c(){
    const board = document.getElementById('board-holder');
    if(!a){
        board.classList.add('is-invisible');
    }else{
        board.classList.remove('is-invisible');
        b.innerHTML = a.j();
        for(let columnIdx = 0; columnIdx <= 6; columnIdx++){

            if(a.l(columnIdx)){
                document.getElementById(`column-${columnIdx}`).classList.add('full');
            }else{
                document.getElementById(`column-${columnIdx}`).classList.remove('full');
            }
        }
    }
    for(let rowIdx = 0; rowIdx <= 5; rowIdx++){
        for(let columnIdx = 0; columnIdx <= 6; columnIdx++){
            const square = document.getElementById(`square-${rowIdx}-${columnIdx}`);
            square.innerHTML = '';
            const playerNumber = a.k(rowIdx,columnIdx);
            if(playerNumber === 1){
                const tokenDiv = document.createElement('div');
                tokenDiv.classList.add('black', 'token');
                square.appendChild(tokenDiv);
            }else if(playerNumber === 2){
                const tokenDiv = document.createElement('div');
                tokenDiv.classList.add('red', 'token');
                square.appendChild(tokenDiv);
            }
        }
    }
    const clickTargets = document.getElementById('click-targets');
    const currentPlayer = a.c;
    if (currentPlayer === 1) {
        clickTargets.classList.add('black');
        clickTargets.classList.remove('red');
    } else {
        clickTargets.classList.add('red');
        clickTargets.classList.remove('black');
    }
}

window.addEventListener('DOMContentLoaded', event => {
    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');
    const newGame = document.getElementById('new-game');
    playerOne.addEventListener('keyup', event =>{
        if(playerOne.value !== '' && playerTwo.value !== ''){
            newGame.removeAttribute('disabled')
        }
    })
    playerTwo.addEventListener('keyup', event =>{
        if(playerOne.value !== '' && playerTwo.value !== ''){
            newGame.removeAttribute('disabled')
        }
    })
    newGame.addEventListener('click', event =>{

        a = new e(playerOne.value, playerTwo.value);
        c();
    })
    const clickTargets = document.getElementById('click-targets');
    clickTargets.addEventListener('click', event => {
        const targetId = event.target.id;
        const columnIdx = Number.parseInt(targetId.split('column-').join(''));

        if(a.l(columnIdx)) return;

        if(!targetId.startsWith('column-')) return;
        a.i(columnIdx);
        c();
    });
});
