const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



 
request("https://github.com/topics", callback);

function callback(err, res, html){
   // let url =[];
    if(!err){
        fs.writeFileSync('githuburl.html', html);
        let $ = cheerio.load(html);
       let data = $(".no-underline.d-flex.flex-column.flex-justify-center");
       
       for(let i = 0; i < data.length; i++){
            request(('https://github.com'+($(data[i]).attr('href'))), getRepo);
            
       } 

    }

}
function getRepo(err, res, html){
    if(!err){
        fs.writeFileSync('getRepo.html', html);
        let $ = cheerio.load(html);
        let repo = $("a.text-bold");

        for(let i = 0; i < 8; i++){
            console.log("https://github.com"+$(repo[i]).attr('href') + " ");
        }



    }
}
