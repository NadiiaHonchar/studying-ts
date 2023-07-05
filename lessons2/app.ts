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
    title?: string;
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
