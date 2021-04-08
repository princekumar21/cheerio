const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

 
request("https://www.espncricinfo.com/series/the-marsh-cup-2020-21-1244113/western-australia-vs-tasmania-15th-match-1244120/full-scorecard", callback);

function callback(err, res, html){
    
    if(!err){
        fs.writeFileSync("playerofmatch.html", html);
        let $ = cheerio.load(html);
        let data = $(".best-player-name");
        console.log(data.text());
        
        
    }

}
