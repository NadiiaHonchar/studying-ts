let num: number;
num=10;

let str: string;
str='ten';

let bool: boolean;
bool=true;

let arr1: string [] =[];
arr1=['df', 'df'];

let arr2: number[]=[];
arr2=[1, 2];

let arr3: any [] = [];
arr3 = ['dfr', 4];

let arrObject: {name: string}[];
arrObject = [{name: 'My'}, {name: 'NowMy'}]

let db:{
    id:number;
    title?: string; // не обов'язковий параметр
    info:{
        data: Date;
        isNew:boolean;
    }
}
db={
    id:1,
    title:'Title',
    info:{
        data: new Date(),
        isNew: true,
    }
}

let some: any;
some=10;
some=true;
str=some;

let unk: unknown;
unk='10';
if(typeof unk === 'string'){
    str=unk;
}

let fixed: [string, number];
fixed=['df', 5];
fixed.push['new'];

enum Toggle {ENABLE, DISABLE};
const service = {
    status: Toggle.ENABLE,
}
if(service.status===Toggle.ENABLE){
    console.log('It is active');
}

let union: number | string;
union=10;
union='fgf';

function combine(param1: number | string, param2: number | string) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  let newactive: 'start' | 'end';
  newactive= 'start';


function print():void{
    console.log('Hello');
}

function combine2 (num5: number, num6: number): number{
    return num5 + num6;
}

function customErr():never{
    throw new Error('Some error');
}

let foo: Function;
foo = ()=>{};

let foo2: (param1: number, param2: string)=> void;
foo2 = (param1: number, param2: string)=>{
    console.log("Hello");
}

type Person = {
    readonly name: string; //не можна змінювати
    age: number;
    showName:()=>void;
}

const person1: Person ={
    name:'name1',
    age: 5,
    showName(){
        console.log(this.name);
    }
}

const person2: Person ={
    name:'name2',
    age: 10,
    showName(){
        console.log(this.name);
    }
}

//практика

let age: number;
age = 50;

let name10: string;
name10 = 'Max';

let toggle2: boolean;
toggle2 = true;

let empty2: null;
empty2 = null;
let notInitialize: undefined;
notInitialize = undefined;

let callback2 = (a: number) : number => { return 100 + a };

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

let some7:unknown;
some7 = 'Text';
if (typeof some7 ==='string'){
    str = some7;
}

let person: [string, number]
person = ['Max', 21];

enum IsLoad {LOADING, READY}

let var7: string | number;
let activ7: 'enable'| 'disable';

function showMessage(message:string) :void {
    console.log(message);
  }
  
  
  function calc(num1:number, num2:number): number {
    return num1 + num2;
  }
  
  function customError():never {
    throw new Error('Error');
  }

type Page= {
    title: string;
    likes: number;
    accounts: string [];
    status: 'open' | 'close';
    details?:{
        createAt: Date;
        updateAt: Date;
    }
}

  const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }