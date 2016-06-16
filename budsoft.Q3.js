Array.prototype.sumItems = function(){
  var sum = 0;
  for(var i=0; i<this.length; i++){
	  sum=sum+this[i];
  }
  
  return(sum);
}

var arr = new Array;
arr = [5,10];
arr.push(50);
arr.sumItems();


var myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.sumItems();


