
const stageElem = document.querySelector(".stage");
const btn = document.querySelector(".btn");
const btnC = document.querySelector(".btn_c");

let num=0;  /* js 20 */


// 🍀Constructor,
//js 10-20 같은값을 공유하는 객체는 prototype으로 만들면 좋음
/* js 10-30  실무 스킬 : 
Card constructor를 넣어서, 
prototype실행시 원본의 constructor도 같이 실행되게하기. */

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

    this.init();        /* js 10-40 */
}

// js 10-20
Character.prototype = {

    constructor : Character,    /*  js 10-30 */

    init:function (params) {        /* js 10-40 */
        console.log(`prototype :)`); 
        
    }
}

/*🍀js 40 Constructor응용 + for loop 

for (let i = 1; i < 6; i++) {
    let num = i;
    new Character(num);    
} */


// 🍀 Constructor응용 + num++
btn.addEventListener('click',()=>{

    num++;  /* js 20 */

    new Character(num);   /* js 10 */
    /* 같은 뜻 : let 변수이름 = new Character(num);  */

    if (num > 6) {
        num=1;        
    }
});



// 🍀 js 30. class

class Character_c {
    constructor(a_num){
        this.mainElem = document.createElement("div");
        this.mainElem.classList.add('character');
        this.mainElem.innerHTML =`
            <img src="./img/poke(${a_num}).png" alt="">
        `;
        stageElem.appendChild(this.mainElem);
    }

    sayHi(){
        console.log('prototype')
    }
}

// let ig = new Character_c(num);

btnC.addEventListener('click',()=>{

    num++;  /* js 20 */

    let ig = new Character_c(num);   /* js 30 */

    if (num > 6) {
        num=1;        
    }

    console.log(ig)
});
