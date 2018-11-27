window.addEventListener('mouseup', checkWord);

function checkWord() {
    
    let word = window.getSelection().toString();
    console.log(word);
    if(word.length > 0) {
        let message = {
            text: word,
        }
        chrome.runtime.sendMessage(word)
    }
    
}

// chrome.runtime.sendMessage(word)

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message,sender,sendResponse){
//     console.log(message.txt);
//     if(message.txt ==='hello'){
//         alert('Hello!');
//     }
// }
