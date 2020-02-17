const testCreditCard = (number) => {
    const cardArray = [];
    const array1 = [];
    const array2 = [];

    // Step 1 : On balance les chiffres dans un array
    for (var a = 0; a < number.length; a += 1) {
        cardArray.push(+number[a]);
    };

    // If cardArray.length even
    for (var a = number.length - 2; a >= 0; a -= 2) {
        if ((number[a] * 2) >= 10) {
            const miniSum = (number[a] * 2).toString().split('').map(Number);
            array1.push(...miniSum);
        } else {
            array1.push(number[a] * 2);
        }
    }

    // Step 4 : On calcule la somme de tous les chiffres dans l'array
    let arrSum = array1.reduce((a, b) => a + b);

    // Step 5 : On ajoute la somme calculée plus haut a la somme de tous les autres chiffres restants
    for (var a = number.length -1; a >= 0; a -= 2) {
        array2.push(+number[a]);
    }
    arrSum = arrSum + array2.reduce((a, b) => a + b);
    
    // Step 6 : Si modulo 10 alors it's a win
    if (arrSum % 10 === 0) {
        return true
    } else {
        return false
    }
}; 

export default testCreditCard;