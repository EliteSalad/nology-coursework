// document.querySelector(".translate-btn").addEventListener("click", () =>{
// const englishWord = document.querySelector(".input-box").value

// if(englishWord === "hello" )//tripple === check content and the type
// document.querySelector(".translate-result").innerHTML = "Bonjour";
// else if(englishWord ==="bye")
// document.querySelector(".translate-result").innerHTML = "Bonjourno";
// else
// document.querySelector(".translate-result").innerHTML = "unavilable";
// })

// Make code more testable
// DECOUPLE LOGIC
// 1.translate english to rrench
// 2. dom interaction

// translate function
function translateEnglishToFrench(englishWord){
    if(englishWord =="hello")
    return "bonjour"
    else if (englishWord == "bye")
    return "byejourno"
    else
    return "unavailable"
}

//dom p tag write
document.querySelector(".translate-btn").addEventListener("click", () => {
    const englishWord = document.querySelector(".input-box").value;
    const frenchWord = translateEnglishToFrench(englishWord)

    document.querySelector(".translate-result").innerHTML = frenchWord;
})