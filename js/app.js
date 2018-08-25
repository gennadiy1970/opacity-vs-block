const btnOpasity = document.getElementById('btnOpasity');
const btnBlock = document.getElementById('btnBlock');
const middle = document.getElementById('middle');
const reflow = document.querySelector('.reflow');
const repaint = document.querySelector('.repaint');


btnOpasity.addEventListener('click', changeOpasity, false)
btnBlock.addEventListener('click', changeDisplayBlock, false)

function changeOpasity () {
    middle.classList.toggle('opacity')
    btnOpasity.classList.toggle('activeBtn')
    repaint.classList.toggle('opacity')
}

function changeDisplayBlock () {
    middle.classList.toggle('displayBlock')
    btnBlock.classList.toggle('activeBtn')
    reflow.classList.toggle('opacity')
}
