//.1
function reverse(text){
    return text.split("").reverse().join("");
}

//.2
function longest(text){
    const words = text.split(" ");
    words.sort((a, b) => b.length - a.length);
    return words[0]
}

//.3
function stringMatching(inputArray, queryArray){
    const wordCount = {};
    for (const x of inputArray){
        if (!wordCount[x]){
            wordCount[x] = 1;
        } else {
            wordCount[x]++;
        }
    }
    
    const output = queryArray.map(query => {
        if (wordCount[query]) {
            return wordCount[query];
        } else {
            return 0;
        }
    });
    
    return output;
}

//.4
function penguranganMatrix(matrix){
    let diagonal1 = 0;
    let diagonal2 = 0
    for(let i = 0; i < matrix.length; i++){
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][matrix.length - 1 -i]
    }
    
    return Math.abs(diagonal1 - diagonal2);
}

console.log(reverse("NEGIE1"));
console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
console.log(stringMatching(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']  ))
console.log(penguranganMatrix([[1, 2, 0], [4, 5, 6], [7, 8, 9]]))