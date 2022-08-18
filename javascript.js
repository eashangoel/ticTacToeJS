
let imgXarr= [];
let imgOarr= [];
function getElements(){
    let gameElementArr= [];
    for (let i=0; i<9; i++){
        gameElementArr[i]= document.getElementById(i+1);
    }
    return gameElementArr;
}
function setBoard(gameBoard, gameElements){
    for (let i=0; i<9; i++){
        imgXarr[i]= document.createElement("img");
        imgXarr[i].setAttribute("src", "./images/x.png");
        imgXarr[i].setAttribute("class", "innerImg");
        imgOarr[i]= document.createElement("img");
        imgOarr[i].setAttribute("src", "./images/circle.png");
        imgOarr[i].setAttribute("class", "innerImg");
        imgOarr[i].style.visibility= "hidden";
        imgXarr[i].style.visibility= "hidden";
    }
    for (let i=0; i<9; i++){
        gameElements[i].appendChild(imgOarr[i]);
        gameElements[i].appendChild(imgXarr[i]);
    }
}
function alreadyChecked(ele){
    setActive (player1, player2);
    ele.className += " blinker";
}
function updateGameBoard(gameBoard, ele, player1, player2){
    if (player1.active){
        if (gameBoard[(ele.id)-1]!=0){
            alreadyChecked(ele);
        }
        else{
        gameBoard[(ele.id)-1]= 1;
        }
    }
    if (player2.active){
        if (gameBoard[(ele.id)-1]!=0){
            alreadyChecked(ele);
        }
        else{
        gameBoard[(ele.id)-1]= 2;
        }
    }
    console.log(gameBoard);
}
function updateBoard(gameBoard, gameElements){
    for (let i=0; i<9; i++){
        if(gameBoard[i]==0){
            imgOarr[i].style.visibility= "hidden";
            imgXarr[i].style.visibility= "hidden";
        }
        if(gameBoard[i]==1){
            imgOarr[i].style.visibility= "visible";
            imgXarr[i].style.visibility= "hidden";
        }
        if(gameBoard[i]==2){
            imgOarr[i].style.visibility= "hidden";
            imgXarr[i].style.visibility= "visible";
        }
    }
    console.log(gameBoard);
}
function checkWinner(gameBoard){
   if (gameBoard[0]==gameBoard[1] && gameBoard[1]==gameBoard[2] && gameBoard[0]!=0&&gameBoard[1]!=0&&gameBoard[2]!=0){
    alert("Game over")
   }else
   if (gameBoard[3]==gameBoard[4] && gameBoard[4]==gameBoard[5] && gameBoard[3]!=0&&gameBoard[4]!=0&&gameBoard[5]!=0){
    alert("Game over")
   }else
   if (gameBoard[6]==gameBoard[7] && gameBoard[7]==gameBoard[8] && gameBoard[6]!=0&&gameBoard[7]!=0&&gameBoard[8]!=0){
    alert("Game over")
   }else
   if (gameBoard[0]==gameBoard[3] && gameBoard[3]==gameBoard[6] && gameBoard[0]!=0&&gameBoard[3]!=0&&gameBoard[6]!=0){
    alert("Game over")
   }else
   if (gameBoard[1]==gameBoard[4] && gameBoard[4]==gameBoard[7] && gameBoard[1]!=0&&gameBoard[4]!=0&&gameBoard[7]!=0){
    alert("Game over")
   }else
   if (gameBoard[2]==gameBoard[5] && gameBoard[5]==gameBoard[8] && gameBoard[2]!=0&&gameBoard[5]!=0&&gameBoard[8]!=0){
    alert("Game over")
   }else
   if (gameBoard[0]==gameBoard[4] && gameBoard[4]==gameBoard[8] && gameBoard[0]!=0&&gameBoard[4]!=0&&gameBoard[8]!=0){
    alert("Game over")
   }else
   if (gameBoard[2]==gameBoard[4] && gameBoard[4]==gameBoard[6] && gameBoard[2]!=0&&gameBoard[4]!=0&&gameBoard[6]!=0){
    alert("Game over")
   }
}
function createGameBoard(){
    let a = [0,0,0,0,0,0,0,0,0]
    return a;
}
function playerFactory(number, name){
    return{
       playerNumber: number,
       playerName: name,
       active: false,
}
}
function setActive(player1, player2){
    if (player1.active==false && player2.active==false){
        player1.active= true;
        label[0].innerText= player2.playerName+ "\'s Turn."
    }
    else if (player1.active==true && player2.active==false)
    {
        player2.active= true;
        player1.active=false;
        label[0].innerText= player1.playerName+ "\'s Turn."
    }
    else if (player1.active==false && player2.active==true)
    {
        player2.active= false;
        player1.active=true;
        label[0].innerText= player2.playerName+ "\'s Turn."
    }
}


let gameBoard= createGameBoard();
let gameElements= getElements();
setBoard(gameBoard, gameElements);
let submitbutton = document.getElementsByClassName("submitButton");
player1= null;
player2 = null;
let label= document.getElementsByClassName("label");
submitbutton[0].addEventListener("click", event => {
    let playerName1= document.getElementById("input1").value;
    player1= playerFactory(1, playerName1);
    let playerName2= document.getElementById("input2").value;
    player2= playerFactory(2, playerName2);
    label[0].innerText= player1.playerName+ "\'s Turn.";
});
gameElements.forEach(item => {
    item.addEventListener('click', event => {
        if (player1==null || player2 == null){
            alert("Create Players");
        }
        else{
                if (event.target.tagName== 'IMG')
                {
                    setActive(player1, player2);
                    updateGameBoard(gameBoard, event.target.parentNode, player1, player2);
                    updateBoard(gameBoard, gameElements);
                    checkWinner(gameBoard);
                }
                if (event.target.tagName== 'DIV')
                {
                    setActive(player1, player2);
                    updateGameBoard(gameBoard, event.target, player1, player2);
                    updateBoard(gameBoard, gameElements);
                    checkWinner(gameBoard);
                }
        }
    })
  });






