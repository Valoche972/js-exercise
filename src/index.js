function testCreditCard(number) {
    const cardArray = [];
    // Step 1 : On balance les chiffres dans un array
    for (var a = 0; a < number.length; a += 1) {
        cardArray.push(+number[a]);
    };

    if (cardArray.length != 16) {
        document.querySelector('.no-valide').classList.add('display');
        return false;
    } else {
        // Step 2 : On cree un nouvel array avec seulement 1 chiffre sur 2
        const array1 = [];
        const array2 = [];
        for (var a = 0; a < number.length; a += 2) {
            // Step 3 : Dans la loop, on check si le chiffre multiplié par 2 est > 10 pour le décomposer
            if ((number[a] * 2) >= 10) {
                const miniSum = (number[a] * 2).toString().split('').map(Number);
                // Ca c'est une tuerie
                array1.push(...miniSum)
                    // Step 3b : Sinon, on push simplement le resultat dans cet array
            } else {
                array1.push(+number[a] * 2);
            }
        }
        // Step 4 : On calcule la somme de tous les chiffres dans l'array
        let arrSum = array1.reduce((a, b) => a + b);

        // Step 5 : On ajoute la somme calculée plus haut a la somme de tous les autres chiffres restants
        for (var a = 1; a < number.length; a += 2) {
            array2.push(+number[a]);
        }
        arrSum = arrSum + array2.reduce((a, b) => a + b);

        // Step 6 : Si modulo 10 alors it's a win
        if (arrSum % 10 === 0) {
            document.querySelector('.valide').classList.add('display');
            return true
        } else {
            document.querySelector('.no-valide').classList.add('display');
            return false
        }
    }
}

function init() {
    document.getElementById('submit').addEventListener('click', function() {
        const cardNumber = document.getElementById('card-number').value;
        testCreditCard(cardNumber);
    });
}

init();