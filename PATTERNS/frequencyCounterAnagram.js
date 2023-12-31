
/*
Create an function which is anagram
*/


function isAnagram(first, second) {
    if(first.length !== second.length){
        return false
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // cant find letter or letter is zero then it is not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(isAnagram("qsha", "ashq"));