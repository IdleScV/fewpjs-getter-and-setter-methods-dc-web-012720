// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return radius * 2
  }
  
  set diameter(diameter){
    this.radius = diameter/2
  }
  
  get circumference(){
    return Math.PI * this.diameter
  }
  
  set circumference( circumference ) {
    this.radius = circumference / ( pi * 2 )
  }

  
  get area(){
    return Math.PI * radius * radius
  }
  
  set area( area ) {
    this.radius = Math.sqrt( area / pi )
  }
  
}