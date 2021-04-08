const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

 
request("https://developer.mozilla.org/en-US/", callback);

function callback(err, res, html){
    
    if(!err){
        fs.writeFileSync("MDN.html", html);
        let $ = cheerio.load(html);
        let data = $(".readable-line-length p");
        console.log(data.text());
        
        
    }

}
