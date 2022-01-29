// import using require
const Shape =require("./shape")
// declare class
class Circle extends Shape{
  super(radius){
    this.radius= radius;
  }

     calculateArea(){
    console.log('Area');
     }

}
module.exports = Circle;

// export class using module.exports
