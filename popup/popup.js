document.getElementById('execute').addEventListener('click', () => {
  chrome.tabs.query({}, function(tabs) {
    const tabsList = document.getElementById('tabsList');
    tabsList.innerHTML = ''; // Clear the list before adding tabs.
    
    for(let i = 0; i < tabs.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = tabs[i].url;
      tabsList.appendChild(listItem);
    }
  });
});





