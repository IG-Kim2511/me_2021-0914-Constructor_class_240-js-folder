
const stageElem = document.querySelector(".stage");
const btn = document.querySelector(".btn");

let num=0;  /* js 20 */


// 🍀Constructor

/*
🍄hard coding

function Character(a_num) {
    
    this.mainElem = document.createElement("div");
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML =`
        <img src="./img/poke(${a_num}).png" alt="">
    `;
    stageElem.appendChild(this.mainElem);
}
new Character(1);     */


//🍄js 10. soft coding 
function Character(a_num) {
    
    this.mainElem = document.createElement("div");
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML =`
        <img src="./img/poke(${a_num}).png" alt="">
    `;
    stageElem.appendChild(this.mainElem);
}

/*🍀Constructor응용 + for loop 

for (let i = 1; i < 6; i++) {
    let num = i;
    new Character(num);    
} */


// 🍀 Constructor응용 + num++
btn.addEventListener('click',()=>{

    num++;  /* js 20 */

    new Character(num);   /* js 10 */

    if (num > 6) {
        num=1;        
    }
});