window.addEventListener('mouseup', checkWord);

function checkWord() {
    console.log('the word is')
    let word = window.getSelection().toString();
    console.log(word);
    alert(word);
}

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message,sender,sendResponse){
//     console.log(message.txt);
//     if(message.txt ==='hello'){
//         alert('Hello!');
//     }
// }
