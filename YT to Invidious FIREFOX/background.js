chrome.browserAction.onClicked.addListener(tab => {

    var url = tab.url;
    var youtubeUrls = ["https://www.youtube.com", "http://www.youtube.com", "https://youtube.com", "http://youtube.com"];
    for(var i = 0; i < youtubeUrls.length; i++) {
        if(url.includes(youtubeUrls[i])) {
            var newUrl = url.split("youtube.com/watch?v=")[1];
            chrome.storage.local.get(['useURL'], function(result) {
                if(result.useURL == undefined) {
                    chrome.storage.local.set({useURL: "https://iv.ggtyler.dev/watch?v="});
                    var oldUrl = "https://iv.ggtyler.dev/watch?v=";
                }
                else {
                    var oldUrl = result.useURL;
                }
                newUrl = oldUrl + newUrl;
                chrome.tabs.update(tab.id, {url: newUrl});
            });
            break;
        }
    }
});