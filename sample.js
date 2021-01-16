let get_num_stickers = function(word){
    if (word.length < 0){
        return -1;
    } 
    var currentCount = 1;
    let letters = word.split("");
    let control = "facebook".split("");

       
    for (var i = 0; i < letters.length; i++){
        let num = count(word, letters[i]);
        if (letters[i] === 'o' && num > currentCount){
            currentCount = Math.ceil(num/2) 
        }else if ( num > currentCount){
            currentCount = num;
        }
        else {
            currentCount = currentCount;
        }
    }

    return currentCount;
}

let stick = function(text){
    return get_num_stickers(text);
};

let newText = "ffacebook";
console.log("number of stickers = " + stick(newText));


function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
   }
   
