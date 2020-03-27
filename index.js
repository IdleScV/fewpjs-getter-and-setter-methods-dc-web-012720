// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return radius * 2
  }
  
  set diameter
  
  get circumference(){
    return Math.PI * this.diameter
  }
  
  get area(){
    return Math.PI * radius * radius
  }
  
  
}