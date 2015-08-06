var Class = require("../");

var Person = Class.extends({
	name:"person",
	sex:1,
	age:28,
	sayHello:function(msg){
		console.log("Hello , My name is %s, I'm %s years old, I'm %s, %s",this.name,this.age,this.sex == 0? "girl" : "boy" ,msg);
	}
});

var Boy = Person.extends({
	name:"boy",
	sex:1,
	sayHello:function(){
		this.super("sayHello",arguments);
		this.play();
	},
	play:function(){
		console.log("I'm playing football")
	}
})

var Girl = Person.extends({
	name:"girl",
	sex:0,
	sayHello:function(){
		this.super("sayHello",arguments);
		this.sing();
	},
	sing:function(){
		console.log("I'm singing");
	}
})

var Tom = new Boy({
	name:"Tom",
	age:16
})

Tom.sayHello("I like playing football");

var Marry = new Girl({
	name:"Marry",
	age:14
})

Marry.sayHello("I like singing");

