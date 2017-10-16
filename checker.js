function checkTasks() {
    var check = function(id) {
      var entry = $('.bootstrap-switch-id-' + id.toString());
      if (entry.length !== 0) {
          entry.removeClass('bootstrap-switch-off');
          entry.find('input')[0].checked = true;
      }
    };
    $( document ).ready(function() {
        console.log( "Automating Matt Ku.." );
		entries = [8,9,4,5,2];
        for (var i = 0; i < entries.length; i++) {
          check(entries[i]);
        }
    });
}

checkTasks();