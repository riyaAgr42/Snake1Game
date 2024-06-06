let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0= true;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgames=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
} 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turn0){
        box.innerText="X";
        turn0= false;
    }
        else{
            box.innerText="0";
            turn0= true;
        }
        box.disabled= true;
        checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }

}
const showWinner=(winner)=>{
    msg.innerText =`Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const checkWinner=()=>{
    for(pattern of winPatterns ){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val ){
                showWinner(pos1val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetgames);
resetBtn.addEventListener("click",resetgames);

