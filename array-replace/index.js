const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;


function arrayReplace() {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === elemToReplace) {
            array[i] = substitutionElem;
        }
    }
    console.log(array)
    return array;
}

arrayReplace()