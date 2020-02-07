function testCreditCard(number) {
    // TODO: implement this function
    var cardArray = [];
    document.getElementById('submit').addEventListener('click', function() {
        var cardNumber = document.getElementById('card-number').value.toString(); 
        for (var i = 0, len = cardNumber.length; i < len; i += 1) {
            cardArray.push(+cardNumber[i]);
        }
        console.log(cardArray);
        if(cardArray.length != 16) {
            document.querySelector('.no-valide').classList.add('display');
            return false;
        } else {
            var sum = [];
            for (var a = 0, len = cardNumber.length; a < len; a += 2) {
                sum.push(+cardNumber[a]*2);
                
            } console.log(sum);
        }
    });
    
    
}

function init() {
    testCreditCard();
}

init();