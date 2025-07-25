let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;// player O

let count = 0;

const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turnO==true)
        {
            box.innerText="O";
            box.style.color="#CEEC97";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#7A28CB";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
        count++;
        checkDraw();
        
    });


});


const resetGame = () =>{
    count=0;
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled= true; 
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled= false; 
        box.innerText="";
    }   
};

const checkDraw = ()=>{
    if(count===9){
        count=0;
        msg.innerText= "Game was a Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

const showWinner = (winner) => {
    count=0;
    msg.innerText =`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
            }
        }

    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
