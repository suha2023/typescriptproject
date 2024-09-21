interface CreatProduct
{

    id:number;
    name:String;
    price:number;
    qty:boolean;

    tax():number;
    discount():number;
    Search():string;
}


class Product implements CreatProduct{


    id:number;
    name:String;
    price:number;
    qty:boolean;

    constructor(product_id:number,product_name:string,product_price:number,product_qty:boolean)
    {
    this.id=product_id;
    this.name=product_name;
    this.price=product_price;
    this.qty=product_qty;
        
    }
    tax():number{
        return (this.price*0.15)+this.price
    }
    discount():number {
        return this.price-10;
    }
    Search():string {
        return "iphone";
    }
   
}
var User={
    'id':1,
    'name':String,
    'isactive':true


}
const users:any[]=[
{'id':1,'name':'suha','isactive':true },
{ 'id':2,'name':'suha','isactive':true },
{'id':3,'name':'suha','isactive':true }

]

users.forEach(item=>{
    console.table(item);
})
let add=(a:number,b:number)=>{
    return a+b;

}
let add1=(a:number,b:number):number
   {
    return a+b;
   }
   function msg():String
   {
    return "welcom"
   }
   let mytuple:[string,number,boolean];
   mytuple=["suha",2000,false]
   console.log(mytuple[0]);
   mytuple.forEach(e=>{
   console.log(e)
   })

console.log(add(15,30));



var prod=new Product(1,"iphone 15 pro",4999,true)
console.log(prod.name)
console.log(prod.price)

    