
const stageElem = document.querySelector(".stage");

// let num;

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


//🍄soft coding + for loop
function Character(a_num) {
    
    this.mainElem = document.createElement("div");
    this.mainElem.classList.add('character');
    this.mainElem.innerHTML =`
        <img src="./img/poke(${a_num}).png" alt="">
    `;
    stageElem.appendChild(this.mainElem);
}

for (let i = 1; i < 6; i++) {
    let num = i;
    new Character(num);    
}