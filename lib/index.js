/**
	Author:		cava.zhang
	Email:		admin@cavacn.com
	Date:		2015-08-06 20:10:15
*/
var Class = function(inobj){
	for(var key in inobj){
		this[key] = inobj[key];
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
	for(var key in prototypes){
		fn.prototype[key] = prototypes[key];
	}
	fn.prototype.__parent = this;
	fn.extends = this.extends;
	return fn;
}

module.exports = exports = Class;