var Horseman = require('node-horseman');
var json2csv = require('json2csv');
var fs = require('fs');
var horseman = new Horseman({timeout: 10000});
var fields = ["city", "partner name", "address", "latitude", "longitude", "average rating", "phone number"];
var fileName = "kfit_partners.csv";
var data = {
  "city":"",
  "partner name": "",
  "address": "",
  "latitude":"",
  "longitude":"",
  "average rating":"",
  "phone number":""
}
var secondUrl = "";

horseman
.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
.open('http://access.kfit.com/partners/517?city=kuala-lumpur')
.evaluate(function(){ return window.outlet_details})
.then(function(details){
  data["city"] = formatCity(details.city);
  data["partner name"] = details.name.toUpperCase();
  data["address"] = details.address;
})
.evaluate(function(){
  var scripts = $('script');
  var match = false;
  for (i=0; i<scripts.length; i++){
    t = $(scripts[i]).text();
    if(t.match(/outlet_details/)){
      match = $(scripts[i]).text().match(/google.maps.LatLng\('([0-9.]+)'\s*,\s*'([0-9.]+)'\)/);
      break;
    }
  }
  return match;
})
.then(function(match){ 
  data["latitude"] = match[1];
  data["longitude"] = match[2];
})
.text('.rating:eq(0)')
.then(function(text){
  data["average rating"] = text;
})
.evaluate(function(){ return $('.reserve-col .btn-sm:first').prop('href').replace("https", "http")})
.click('.reserve-col .btn-sm')
.waitForNextPage()
.evaluate(function(){
  var m = $('.minor');
  var i=0;
  var match = false;
  for (i=0; i<m.length; i++){
    if($(m[i]).text().match(/\+[0-9]/)){
      match = $(m[i]).text();
      break;
    }
  }
  return match;
})
.then(function(match){ 
  console.log(match);
  data["phone number"] = match;
})
.then(function(){
  var result = json2csv({ data: data, fields: fields }); 
  fs.writeFile( fileName, result, function (err) {
    if (err) return console.log(err);
    console.log('File written.');
  });
})
.close();
function formatCity(city){
  var x = city.split('-');
  return [x[0].camel(), x[1].camel()].join(" ");
}
String.prototype.camel = function() {
    return this.substr( 0, 1 ).toUpperCase() + this.substr( 1 );
}
