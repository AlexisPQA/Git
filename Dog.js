function Dog{
	this.name ="Milu",
	this.age=2,
	this.stomach=[],
	this.Bark ="gau gau"
}
Dog.prototype.eat = function(chicken){
	this.stomach.push(chicken);
}