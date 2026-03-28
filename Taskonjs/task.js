function wordcounter(str){
    let count = 0;
    str = str.trim();

    if(str === ""){
        return 0;
    }

    for(let i = 0; i < str.length; i++){
        
        if(str[i] !== " " && (i === 0 || str[i-1] === " ")){
            count++;
        }
    }

    return count;
}

let value = wordcounter("   Hii       this   is   akash   ");
console.log("The total words are", value);


function longestword(str){
    let words=str.trim().split(/\s+/)
    let largest=""
    for(i=0;i<words.length;i++){
        if(words[i].length > largest.length){
            largest=words[i]
        }
    }
    return largest;

}
word=longestword("hii Akash Bro how khutale you")
console.log("The largest words in given string is", word)





function removefalsy(Arr){
    let result=[]
    for(i=0;i<Arr.length;i++){
        if(Arr[i]){
            result.push(Arr[i])
        }
    }
    return result;


}
let array=['Akash','Khutale',12,null,undefined]
remove=removefalsy(array)
console.log( remove)


let arr = [10, 5, 20, 8, 15];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);


 


function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(sortArray([5, 2, 9, 1, 5, 6]));
