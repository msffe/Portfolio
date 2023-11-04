// let 
// const 
// змінні

// Data types 
String="text"

Number="Number"

Boolean="Trur or False"    //boolean без лапок
    const boolTrue=true;
    const boolFalse=false; 


Null // початкове значення, яке можна змінити (картинки в соц.мережах, наприклад)
    const someNullvalue=null;


Undefined // значення немає. дефолтне значення
    const someUndefindedValue=undefined


Object 
  
    const objStat={                 // or const obj=newObject();
        name: 'Meph',
        age: 21,
        gender: 'female'
    };
    console.log(obj);


BigInt // маніпуляції з реально великими числами
    const bigInt=999999999999999999999999999n;
    console.log(bigInt);

Symbol // спосіб задання унікальних. 


// Умовні оператори 

const isUserLoggedIn=true;   // if else
if(isUserLoggedIn){
    alert('You`re logged in!')
} else{
    alert('You`re not logged in!')
}

// ternary oper.
    isUserLoggedIn?alert('You`re logged in!'):alert('You`re not logged in!') 

// switch 

   // const age=21;
    switch(age){
    case 10:
        alert('Happy b, sunny')
        break;
    case 20:
        alert('Happy b, hoeny')
        break;
    case 30:
        alert('Happy b, dummby')
        break;
    default:
        alert('Happy b')
    }


// Aрифм.
    const num1=10;
    const num2=5;
    console.log(num1+num2);


// Loggical oper.  
// === (рівний, перевіряє і значення, і тип)      !== (не рівний)
// == (рівний, перевіряє лише значення)
// && (і, та, _і_)   ||(або)
// !(not true)

    const age=21;
    const name='Meph';

    if(age===18 && name==='Meph'){
        alert("wassup");
    }

// Function