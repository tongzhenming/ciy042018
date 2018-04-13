const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
  
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var pushNew; 
var pushInitial;


function renderList(){
    var result = '';
    numbers.forEach((value, index)=>{
        result = result + `<div class="item item${value}" id='item${value}'>${value}</div>`;
    });
    document.getElementById('items').innerHTML = result;
}



renderList();

function doPush(pushNew){
    if (numbers[0] < numbers [1]) {
    pushNew = numbers[numbers.length-1] +1 ;
    numbers.push(pushNew);}

    else {
    pushNew = numbers[numbers.length-1] - 1 ;
    numbers.push(pushNew);}

    renderList();
}

function doPop(){

    numbers.pop();
    
    renderList();
}

function doShift(){

    numbers.shift();

    renderList();
}

function doUnShift(pushInitial){

    if (numbers[0] < numbers [1]){
    pushInitial = numbers[0] - 1;
    numbers.unshift(pushInitial);}

    else {
    pushInitial = numbers[0] + 1;
    numbers.unshift(pushInitial);}

    renderList();
}

function doSplice(){

    numbers.splice(2,1,4.5);

    renderList();

}

function doSort(){

    numbers.reverse();

    renderList();

}


