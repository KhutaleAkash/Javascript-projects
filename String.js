//Count the Number of Vowels in given string
function count(str){
    let count=0
    let vowels='aeiouAEIOU'
    for(i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;

}
let num=count('hello')
console.log('The count of vowels in hello bhai is',num)


//Check if String is Palindrome or not
function palindrome(str){
    let char=''
    for(i=str.length-1;i>=0;i--){
        char=char+str[i]
    }
    return char==str
}
console.log(palindrome('pop'))

//Extract first word of sentences
function Extractword(str){
    let extract=''
    for(i=0;i<str.length;i++){
       if(str[i] === ' '){
        break
       }
       extract=extract+str[i]
    }
    return extract
}
let give=Extractword(" this is very good")
console.log("the extracted word is",give)

//Replace string with the '-'
function hypen(str){
    let chang=''
   for(i=0;i<str.length;i++){
     if(str[i] === ' '){
        chang+= '-'
     }else{
        chang+=str[i]
     }
   }
   return chang
}
let new1=hypen("  hello bhai ")
console.log(new1)
