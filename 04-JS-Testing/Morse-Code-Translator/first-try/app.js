class MorseCode{
    constructor(phrase){
        this.phrase = phrase;
        // this.sentence = null;
        this.tranlatedSentance = '.__ ..._ __.. __... ._._.';
    }

    ///insted of having multiple audios just changes the src and play again 
    ReadTranslation()
    {
        var audio = new Audio("wave-sounds/long-pause.wav");
        for (let index = 0; index < this.tranlatedSentance.length; index++) {
            switch (this.tranlatedSentance[index]) {
                case '.':
                    audio.src = "wave-sounds/single.wav"
                    break;
                case '_':
                    audio.src = "wave-sounds/long.wav"
                    break; 
                case ' ':
                    audio.src = "wave-sounds/long-pause.wav"
                    break;
                default:
                    break;
    }
    audio.play();
    audio.onended = function(){
        for (let index = 0; index < this.tranlatedSentance.length; index++) {
            switch (this.tranlatedSentance[index]) {
                case '.':
                    audio.src = "wave-sounds/single.wav"
                    break;
                case '_':
                    audio.src = "wave-sounds/long.wav"
                    break; 
                case ' ':
                    audio.src = "wave-sounds/long-pause.wav"
                    break;
                default:
                    break;
    }
    audio.play();
    }
}
}
}


    stringToArray(){

    }

    ArrayToString(){
        return "This works";
    }

    TranslateChar(letter){

        switch (letter) {
            //LETTERS
                case 'a': 
                return '10';
                case 'b':
                return '0111';
                case 'c':
                return '0101';
                case 'd':
                return '011';
                case 'e':
                return '1';
                case 'f':
                return '1101';
                case 'g':
                return '001';
                case 'h':
                return '1111';
                case 'i':
                return '11';
                case 'j':
                return '1000';
                case 'k':
                return '010';
                case 'l':
                return '1011';
                case 'm':
                return '00';

                case 'n':
                return '01';
                case 'o':
                return '000';
                case 'p':
                return '1001';
                case 'q':
                return '0010';
                case 'r':
                return '101';
                case 's':
                return '111';
                case 't':
                return '0';
                case 'u':
                return '110';
                case 'v':
                return '1110';
                case 'w':
                return '100';
                case 'x':
                return '0110';
                case 'y':
                return '0100';
                case 'z':
                return '0011';
            //NUMBERS
                case '1':
                return '10000';
                case '2':
                return '11000';
                case '3':
                return '11100';
                case '4':
                return '11110';
                case '5':
                return '11111';
                case '6':
                return '01111';
                case '7':
                return '00111';
                case '8':
                return '00011';
                case '9':
                return '00001';
                case '0':
                return '00000';     
            //SYMBOLS
                case '?':
                return '110011';
                case '!':
                return '010100';
                case '.':
                return '101010';
                case ',':
                return '001100';
                case ';':
                return '010101';
                case ':':
                return '000111';
                case '+':
                return '10101';
                case '-':
                return '011110';
                case '/':
                return '01101';
                case '=':
                return '01110';                   
            default:
                break;
        }
    }

    TranslateWord(word){
        let currentWord = []
        for (let letter of word){
            //let temp = letter.ToLowerCase()
            currentWord.push(this.TranslateChar(word));
        }
        console.log(currentWord);
        return(currentWord);
    }

    TranslateSentence(fullString){
        //split sentance into words
        let splited = fullString.split(" ");
        console.log(splited);
        //send word for translation one by one
        splited.forEach(word => {
            this.tranlatedSentance += this.TranslateWord(word);
            this.tranlatedSentance += " ";
        });
        console.log(this.tranlatedSentance);
         
        // for (let index = 0; index < this.tranlatedSentance.length; index++) {
        //     let bAD = this.tranlatedSentance.replace(' ','  ')
        //     let bADa += bAD;
        // }
        // for (let index = 0; index < this.tranlatedSentance.length; index++) {
        //     let bAD =this.tranlatedSentance.replace(',',' ')
        // }
        // console.log(bADa);
    }

    DotsAndDashes(){
        // this.tranlatedSentance.forEach(binary => {
        //     if(binary === '1')
        //     let dAD += '.';
        //     else if(binary === '0')
        //     let dAD += '-';
        //     else if(binary ===' ')
        //     let dAD += ' '
        //     else if(binary ===',')
        //     let dAD += ','

        // });
        // let dAD = this.tranlatedSentance.replace('1','.')
        // return dAD;
    }


}

test = new MorseCode("phrase")
//test.ReadTranslation();
document.getElementById("listenBtn").addEventListener("click", test.ReadTranslation())




    //let testString = new MorseCode("hello");
//testString.TranslateWord(testString.phrase);
//console.log(testString.tranlatedSentance);
    //console.log(testString.TranslateChar('a'));
    //console.log(testString.TranslateWord('hello'));
    //testString.TranslateSentence('hi my name is');
//console.log(testString.DotsAndDashes());
//console.log("working");
//console.log(testString.ArrayToString());

function DisplayTranslation(){
    //document.getElementById("output").innerHTML = testString.tranlatedSentance;
    console.log("display tanslation called")
    let input = new MorseCode(document.getElementById("input").value)
    input.TranslateSentence(input.phrase);
    console.log(input);
}

///DOM
document.getElementById("myBtn").addEventListener("click", DisplayTranslation());



///get tranlated to show in p tag
/// remove error from first space / null character Capital letter bug
