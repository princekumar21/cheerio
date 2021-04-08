const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



 
request("https://github.com/topics", callback);

function callback(err, res, html){
    let url =[];
    if(!err){
        fs.writeFileSync('githuburl.html', html);
        let $ = cheerio.load(html);
       let data = $(".topic-box.position-relative.hover-grow.height-full.text-center.border.color-border-secondary.rounded.color-bg-primary.p-5");
       
       for(let i = 0; i < data.length; i++){
            url.push('https://github.com'+($(data[i]).find('a').attr('href')));
       } 
       
        console.log(url);
        
        
    }

}
