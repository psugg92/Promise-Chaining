$(document).ready(function() {

    let body = $('body');
    let div = $('<div id="title">The Amazing Math Robot</div>');
    let div2 = $('<div id="message"></div>');
    let div3 = $('<div class="btnDiv"></div>');
    div.appendTo(body);
    div2.appendTo(body);
    div3.appendTo(body);
    let h1 = $('<h1> Behold my math skills!</h1>')
    let btnHappy = $('<button>If Amazed, Click Here!</button>');
    let btnSad = $('<button>If Not Amazed, Click Here.</button>');

    h1.appendTo(div2);
    
    slowMath.add(6,2)
    .then(function(sum) {
        console.log(sum);
        h1.text(`6 plus 2 is ${sum}!`)
        return slowMath.multiply(sum, 2);
    }).then(function(product) {
        console.log(product);
        h1.text(`That times 2 is ${product}!`)
        return slowMath.divide(product, 4);
    }).then(function(quotient) {
        console.log(quotient);
        h1.text(`That divided by 4 leaves ${quotient}!`)
        return slowMath.subtract(quotient,3);
    }).then(function(difference) {
        console.log(difference);
        h1.text(`That minus 3 leaves ${difference}!`)
        return slowMath.add(difference, 98);
    }).then(function(sum2) {
        console.log(sum2);
        h1.text(`That plus 98 is ${sum2}!`)
        return slowMath.remainder(sum2, 2);
    }).then(function(remaining) {
        console.log(remaining);
        h1.text(`That modulus 2 leaves ${remaining}!`)
        return slowMath.multiply(remaining, 50);
    }).then(function(product2) {
        console.log(product2);
        h1.text(`That times 50 is ${product2}!`)
        return slowMath.remainder(product2, 40);
    }).then(function(remaining2) {
        console.log(remaining2);
        h1.text(`That modulus 40 leaves ${remaining2}!`)
        return slowMath.add(remaining2, 32);
    }).then(function(sum3) {
        console.log(`The final result is ${sum3}`);
        h1.text(`and finally that plus 32 is ${sum3}!`)
        btnHappy.appendTo(div3);
        btnSad.appendTo(div3);
    }).catch(function (err) {
        console.log(err);
    })

    $(btnSad).click(function() {
        let imgSad = $('<img src="https://openclipart.org/image/2400px/svg_to_png/279690/Button---Sad.png" alt="" />')
        h1.html(imgSad)
        div3.text("Sorry to have disappointed you...");
    })

    $(btnHappy).click(function() {
        let imgHappy = $('<img src="http://clipartbarn.com/wp-content/uploads/2017/02/Happy-face-excited-smiley-face-clipart-kid.png" alt="" />')
        h1.html(imgHappy);
        div3.text("I'm Amazing!");
    })

    

})