// This is your popup script
document.getElementById('saveButton').onclick = function() {
    let selectedUrl = document.getElementById('urlSelect').value;
    // Save the selected URL in chrome.storage.local
    chrome.storage.local.set({'useURL': selectedUrl}, function() {
        console.log('URL saved');
    });
}

