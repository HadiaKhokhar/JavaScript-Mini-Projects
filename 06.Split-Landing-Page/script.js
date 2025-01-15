const leftSide = document.querySelector('.split.left');
const rightSide = document.querySelector('.split.right');
const container = document.querySelector('.container');
const expandSide = (side)=>{
    side.classList.add('expand')
}
const shrinkSide = (side)=>{
    side.classList.remove('expand')
}
leftSide.addEventListener('mouseenter', ()=>{
    expandSide(leftSide);
    shrinkSide(rightSide);
})
rightSide.addEventListener('mouseenter', ()=>{
    expandSide(rightSide);
    shrinkSide(leftSide);
})
container.addEventListener('mouseleave', ()=>{
    leftSide.classList.remove('expand');
    rightSide.classList.remove('expand');
})