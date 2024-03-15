document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['useURL'], function(result) {
        if (result.useURL) {
            document.getElementById('urlSelect').value = result.useURL;
        }
    });
});

document.getElementById('saveButton').onclick = function() {
    let selectedUrl = document.getElementById('urlSelect').value;
    chrome.storage.local.set({'useURL': selectedUrl}, function() {
        console.log('URL saved');
    });
};