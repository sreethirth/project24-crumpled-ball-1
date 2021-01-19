class Dustbin {
  constructor(x,y){
    var options={isStatic:true}
    this.bottomBody=Bodies.rectangle(x,y,100,10,options)
    World.add(world,this.bottomBody)
    this.leftBody=Bodies.rectangle(x,y,10,100,options)
    World.add(world,this.leftBody)
    this.rightBody=Bodies.rectangle(x,y,10,100,options)
    World.add(world,this.rightBody)




  }
  
  display(){
    var positionBottom=this.bottomBody.position
    push()
    translate(positionBottom.x,positionBottom.y)
    fill('yellow')
    rectMode(CENTER)
    rect(0,0,100,10)
    pop()

    var positionLeft=this.leftBody.position
    push()
    translate(positionLeft.x,positionLeft.y)
    fill('yellow')
    rectMode(CENTER)
    rect(0,0,10,100)
    pop()

    var positionRight=this.rightBody.position
    push()
    translate(positionRight.x,positionRight.y)
    fill('yellow')
    rectMode(CENTER)
    rect(0,0,10,100)
    pop()
  }
}
