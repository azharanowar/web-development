const loadQuote = () => {
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => displayQuote(data))
}

const displayQuote = data => document.getElementById("displayQuote").innerText = data.quote;

document.getElementById("loadQuoteBtn").onclick = () => loadQuote();