

$( document ).ready( readyNow );
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;
let translated

function readyNow() {
    
    $('#loginButton').on('click', login)
    $('#sendToAPI').on('click', sendToAPI)
    $('#saveWord').on('click', sendWord)
    
}


function login() { 
    $.ajax({
        type: 'POST',
        url: `https://evening-temple-42477.herokuapp.com/api/user/login?username=${$('#nameInput').val()}&password=${$('#passInput').val()}`,
        data: {
            username: $('#nameInput').val(),
            password: $('#passInput').val(),
        }
    }).then(function(response) {
            console.log(response)
            $('#nameInput').val('')
            $('#passInput').val('')
        }).catch(function(err) {
            console.log(err)
        })
}

function sendToAPI() {
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    console.log(word)
    if(word.length> 0 && word.length< 100){
    $.ajax({
        type: 'GET',
        url: `https://evening-temple-42477.herokuapp.com/api/search/?q=${word}&target=en&source=no`
        //url: `https://translation.googleapis.com/language/translate/v2?q=${word}&target=en&source=no&key=AIzaSyBir7Bz1nj6ckeTAZEw18H4W_kLmPA7BhM`,       
    }).then(function(response) {      
            translated =response.data.translations[0].translatedText;
            $('.word').empty();
            $('.word').append(`<h2>${word} &nbsp;&nbsp;| &nbsp;&nbsp;${translated}</h2>`);
            
            return translated;
        
        }).catch(function(err) {
            
            // sendReverse();
        })
    }  
}

// function sendReverse() {
//     let bgpage = chrome.extension.getBackgroundPage();
//     let word = bgpage.word;
//     console.log('sending Reverse')
//     if(word.length> 0 && word.length< 100){
//     $.ajax({
//         type: 'GET',
//         url: `https://translation.googleapis.com/language/translate/v2?q=${word}&target=no&source=en&key=AIzaSyBir7Bz1nj6ckeTAZEw18H4W_kLmPA7BhM`,
        
//     }).then(function(response) {
       
//             translated =response.data.translations[0].translatedText;
//             $('.word').empty();
//             $('.word').append(`${word}  |  ${translated}`);
            
//             return translated;
        
//         }).catch(function(err) {
//             console.log(err)
//         })
//     }
// }
    


function sendWord() {
    console.log('sending word')
    console.log(word, translated)
    $.ajax({
        type: 'POST',
        url: `https://evening-temple-42477.herokuapp.com/flashcards`,
        data:{
            id: 1,
            inputText: word,
            translation: translated,
            language_id: 13,
        }
    }).then(function(response) {
            console.log(response)
        }).catch(function(err) {
            console.log(err)
        })
    
    
};
