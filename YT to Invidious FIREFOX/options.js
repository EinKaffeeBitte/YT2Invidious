document.addEventListener('DOMContentLoaded', function() {
    browser.storage.local.get(['useURL'], function(result) {
        if (result.useURL) {
            document.getElementById('urlSelect').value = result.useURL;
        }
        else {
            browser.storage.local.set({'useURL': "https://iv.ggtyler.dev/watch?v="});
            document.getElementById('urlSelect').value = result.useURL;
        }
    });
});

document.getElementById('saveButton').onclick = function() {
    let selectedUrl = document.getElementById('urlSelect').value;
    browser.storage.local.set({'useURL': selectedUrl}, function() {
        console.log('URL saved');
    });
};