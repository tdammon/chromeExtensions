

$( document ).ready( readyNow );
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;
let translated

function readyNow() {
    
    $('#loginButton').on('click', login)
    $('#sendToAPI').on('click', sendToAPI)
    $('#sendWord').on('click', sendWord)
    // let bgpage = chrome.extension.getBackgroundPage();
    // console.log(bgpage)
    // let word = bgpage.word;
    // console.log(word)
    // $('.word').empty();
    // $('.word').append(word);

    //$('.saveWord').on('click', sendWord())
    
    let target = 'en';
    let source = 'no';
    //  if(word.length> 0 && word.length< 100){
    //     $.ajax({
    //         type: 'GET',
    //         //url :`https://translation.googleapis.com/language/translate/v2?q=${word}&target=${target}&source=${source}&key=AIzaSyBir7Bz1nj6ckeTAZEw18H4W_kLmPA7BhM`
    //         url: `http://localhost:5000/api/search?q=${word}&target=en&source=no`,
            
    //     }).then(response => {
    //             translated =response.data.translations[0].translatedText;
    //             $('.word').empty();
    //             $('.word').append(`${word} |  ${translated}`);
    //             // if(req.query.q == response.data.data.translations[0].translatedText){
    //             //     res.send('reverse')
    //             // } else {
    //             //     res.send(response.data)
    //             // }
    //             return translated;
    //         }).catch(err => {
    //             console.log(err)
    //         })
    //     }
}


function login() {
    console.log('running')
    $.ajax({
        type: 'POST',
        //url :`https://translation.googleapis.com/language/translate/v2?q=${word}&target=${target}&source=${source}&key=AIzaSyBir7Bz1nj6ckeTAZEw18H4W_kLmPA7BhM`
        url: `http://localhost:5000/api/user/login`,
        data: {
            username: $('#nameImput').val(),
            password: $('#passInput').val(),
        }
    }).then(response => {
            // let translated =response.data.translations[0].translatedText;
            // $('.word').empty();
            // $('.word').append(`${word} |  ${translated}`);
            console.log(response)
            // if(req.query.q == response.data.data.translations[0].translatedText){
            //     res.send('reverse')
            // } else {
            //     res.send(response.data)
            // }
        }).catch(err => {
            console.log(err)
        })
}

function sendToAPI() {
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    console.log(word)
    $.ajax({
        type: 'GET',
        //url :`https://translation.googleapis.com/language/translate/v2?q=${word}&target=${target}&source=${source}&key=AIzaSyBir7Bz1nj6ckeTAZEw18H4W_kLmPA7BhM`
        url: `http://localhost:5000/api/search?q=${word}&target=en&source=no`,
        
    }).then(response => {
            translated =response.data.translations[0].translatedText;
            $('.word').empty();
            $('.word').append(`${word} |  ${translated}`);
            // if(req.query.q == response.data.data.translations[0].translatedText){
            //     res.send('reverse')
            // } else {
            //     res.send(response.data)
            // }
            return translated;
        }).catch(err => {
            console.log(err)
        })
}
    


function sendWord() {
    console.log('sending word')
    console.log(word, translated)
    $.ajax({
        type: 'POST',
        url: `http://localhost:5000/flashcards`,
        data:{
            id: 1,
            input: word,
            translation: translated,
            language: 13,
        }
    }).then(response => {
            console.log(response.data)
            // if(req.query.q == response.data.data.translations[0].translatedText){
            //     res.send('reverse')
            // } else {
            //     res.send(response.data)
            // }
        }).catch(err => {
            console.log(err)
        })
    
    
};
