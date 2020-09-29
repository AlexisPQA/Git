function Dog{
	this.name ="Milu",
	this.age=2,
	this.stomach=[]
}
Dog.prototype.eat = function(chicken){
	this.stomach.push(chicken);
}