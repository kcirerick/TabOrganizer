document.getElementById('execute').addEventListener('click', () => {
  chrome.tabs.query({}, function(tabs) {
    for(let i = 0; i < tabs.length; i++) {
      console.log(tabs[i].url);
    }
  });
});






