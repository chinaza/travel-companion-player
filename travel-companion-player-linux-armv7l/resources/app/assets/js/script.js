const {dialog} = require('electron').remote;

window.$ = window.jQuery = require('jquery');

$(document).ready(function() {
  $('#fileSel').click(()=>{
    let fileURL = "";
    dialog.showOpenDialog({
      filters: [
        {name: 'Movies', extensions: ['ogg', 'webm', 'mp4']},
        {name: 'Music', extensions: ['mp3']}
      ]
    }, function(fileURLs){
      if (fileURLs === undefined) return;      
       $("#vidPlayer").attr("src", fileURLs[0]);
    });
  });
});
