let fs = require('fs');



function print(err,data){

    if(!err){
        console.log(data);
    }
    else{
        console.log(err);
    }

    
    
}

for(let i = 1; i <= 5; i++){
    
fs.readFile('q'+i+'.html','utf-8', print);

}
