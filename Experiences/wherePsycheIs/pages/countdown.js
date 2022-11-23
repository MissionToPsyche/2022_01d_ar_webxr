console.log("Hello world!")

var count = 5;

function countDown(){ 
    if(count > 0){
        count = count - 1;
        var number = document.getElementById('count');
        number.innerHTML = count;
    } else {
        window.location.href = './mars.html';
    }
};

setInterval(countDown, 1000);