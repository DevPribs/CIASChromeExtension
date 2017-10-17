function checkTasks(entries) {
    $( document ).ready(function() {
        console.log( "Automating Matt Ku.." );
        for (var i = 0; i < entries.length; i++) {
            check(entries[i]);
        }
    });
}

function check(taskId){
    var entry = $('.bootstrap-switch-id-' + taskId.toString());
    if (entry.length !== 0) {
        entry.removeClass('bootstrap-switch-off');
        entry.find('input')[0].checked = true;
    }
}

function saveCheckTasks(numbers){
    chrome.storage.sync.set({'numbers': numbers}, function(){
        console.log("Setting saved");
    });
}

function getCheckTasks()
{
    chrome.storage.sync.get('numbers', function(result){
        console.log("Settings retrieved: " + result.numbers);
        checkTasks(result.numbers[0]);
    });
}

saveCheckTasks([[8,9,4,5,2]]);//temporary
getCheckTasks();