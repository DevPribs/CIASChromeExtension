chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason === "install")
    {
        saveCheckTasks([8,9,4,5,2]);
    }
});