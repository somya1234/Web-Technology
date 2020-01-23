var animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'whale', 'octopus', 'rabbit', 'lion', 'dog']

// METHOD-1
function returnFirstcharacter(word){
    var letters = [];
    letters= word.split("");
    return letters[0];
}
// END


// METHOD-2
function getFirstCharAt(animal){
    return animal.charAt(0);
}
// END

const newArr = animals.map(returnFirstcharacter);
console.log(newArr.join(""));
