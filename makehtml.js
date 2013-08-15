var ghm = require("github-flavored-markdown")
  , fs = require('fs')
  ;

setInterval(function(){
  fs.readFile('/home/robw/repo/uwilbro/featuremanager/README.md', 'utf8', function (error, data) {
    var content = (error) ? error : ghm.parse(data);
    fs.writeFile('/home/robw/repo/uwilbro/featuremanager/editview.html', "<html><head><link href='editview.css' media='screen' rel='stylesheet' type='text/css' /><script>setTimeout(function(){window.location.reload(1);}, 1000);</script><meta http-equiv='cache-control' content='max-age=0' /><meta http-equiv='cache-control' content='no-cache' /><meta http-equiv='expires' content='0' /><meta http-equiv='expires' content='Tue, 01 Jan 1980 1:00:00 GMT' /><meta http-equiv='pragma' content='no-cache' /></head><body>\n" + content + "</body></html>", function(error) {if (error) console.log(error)});});
  }
  , 500
);
