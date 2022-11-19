const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if ( err ) throw err;

    console.log( "data : ", data);
    console.log("data2 : ", data.toString()); //String(data)
});

//promise 형태로 써보기
const fs2 = require("fs").promises;
fs2.readFile("./test.txt")
    .then((data) => {
        console.log("promise - data : ", data );
    });

    fs2.writeFile("./write.txt", 'sesac')
        .then(function(){
            return fs2.readFile('./write.txt')
        })
        .then(function(data){
            console.log(data.toString());
        });

// callback으로 써보기
fs.writeFile('./write2.txt', 'codingon', function(err){
    if (err) throw err;
    console.log("writeFile success!");
    fs.readFile("./write2.txt", function(err, data){
        if(err) throw err;
        console.log("write2File data : ", data.toString());
    })
});