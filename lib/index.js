/**
	Author:		cava.zhang
	Email:		admin@cavacn.com
	Date:		2015-08-06 20:10:15
*/
var Class = function(){
	if(arguments.length != 0){
		if("function" == typeof(this.$)){
			this.$.apply(this,arguments);
		}else{
			this.super("$",arguments);
		}
	}
	
}

Class.prototype.super = function(name,args){
	if(this.__parent){
		if("function" == typeof(this.__parent.prototype[name])){
			this.__parent.prototype[name].apply(this,args);
		}
	}
}

Class.extends = function(prototypes){
	var _this = this;
	var fn = function(){
		_this.apply(this,arguments);
	}
	fn.prototype = new this;
	if("object" == typeof(prototypes)){
		for(var key in prototypes){
			fn.prototype[key] = prototypes[key];
		}
	}else if("function" == typeof(prototypes)){
		for(var key in prototypes.prototype){
			fn.prototype[key] = prototypes.prototype[key];
		}
	}
	fn.prototype.__parent = this;
	fn.extends = this.extends;
	return fn;
}

module.exports = exports = Class;