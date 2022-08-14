fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(quoteData =>{
        const quoteTesxt = quoteData.content.text;
        const quoteElement = document.getElementById('quoteElemen');

        quoteElement.innerHTML=quoteText        

    })