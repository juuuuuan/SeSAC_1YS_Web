/*
new promise(function(resolve, reject){
    // resolve : 함수형태. 성공했을 때 실행할 친구
    // reject : 함수형태. 실패 or 에러를 처리할 때 사용되는 친구
});
*/
function func3(flag){
    return new Promise(function(resolve, reject){
        if(flag) {
            resolve("flag는 ture");
        } else{
            reject("flag는 false");
        }
    });
}
/*
func3(true).then(
    function(msg){
        console.log("msg1 : ", msg);
    },
    function(msg){
        console.log("msg2 : ", msg);
    }
);
*/

func3(false).then(
    function(msg){
        console.log("msg1 : ", msg);
    },
    function(msg){
        console.log("msg2 : ", msg);
    } // then에서 처리하는 거면, catch실행안되고, msg2가 실행된다.
).catch(
    function(msg){
        console.log("msg2 : ", msg);
    }
);