document.addEventListener('DOMContentLoaded', function() {
    var inputText = document.getElementById('inputText');
    var button = document.getElementById('inputButton');

    var inputArray = inputText.value.split(","); //split correctly by changing to ints (maybe not)

    button.addEventListener('click', function() {
        chrome.storage.sync.set({'numbers': inputArray}, function(){
            console.log("Setting saved");
        });
    })
});