// This is your background script
function checkURL(tabId, url) {
    // Check if the URL is from YouTube
    if (url.includes('https://youtube.com/watch?v=') || url.includes('https://www.youtube.com/watch?v=')) {
        // Get the YouTube video watch ID
        let watchID = url.split('v=')[1];
        let ampersandPosition = watchID.indexOf('&');
        if(ampersandPosition != -1) {
          watchID = watchID.substring(0, ampersandPosition);
        }
        console.log(watchID);
        // Get the selected URL from chrome.storage.local
        chrome.storage.local.get(['useURL'], function(result) {
            let selectedUrl = result.useURL;
            // Change the current tab's URL to the selected URL plus the watch ID
            chrome.tabs.update(tabId, {url: selectedUrl + watchID});
        });
    }
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        checkURL(tabId, changeInfo.url);
    }
});

chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.url) {
        checkURL(tab.id, tab.url);
    }
});

