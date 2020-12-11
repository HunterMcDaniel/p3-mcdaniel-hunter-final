class Body {

    constructor(bodyContent = bodyConent, menu = 'Todays Lunch Is:') {
        this.bodyContent = bodyContent;
        this.menu = menu;
    }

    logSomething(){
        console.log('hello');
    }
}

export const body = new Body('Welcome to Lunch');


// export const myList =[
// "Hey" ,
// "Bonjour" ,
// "Hola" ,
// "Welcome" ,
// "Greetings" ,
// "Hiya!" ,
// "Hey, bud" ,
// "Sup?" ,
// "Hello" ,
// "Hey party people"
// ]


// let randomItem = myList[Math.floor(Math.random()*myList.length)];
//
// document.getElementById('mybutton').addEventListener('click', ()=>{
//             console.log('random');
//             document.getElementById('fill').innerHTML = randomItem;
//         });
