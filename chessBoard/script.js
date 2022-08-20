var chessBoard = document.getElementById("chessBoard");

var x = 8;
var y = 8;

for(var i = 0;i< y;i++){
 var row = chessBoard.appendChild(document.createElement("div"));
 for(var j = 0;j< x;j++){
     if(j%2 == i%2){
       let black = row.appendChild(document.createElement("span"));
       black.classList.add('black')
  
    }else{
        let white= row.appendChild(document.createElement("span"));
        white.classList.add('white')
    }
 }
}