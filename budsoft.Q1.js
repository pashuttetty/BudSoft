
for (i = 1; i < 101; i++) {
  var num=0;
   if ((i % 3 == 0) && (i % 5 == 0)) {
    num = "BudSoft";
  } else if (i % 3 == 0) {
    num = "Bud"
  } else if (i % 5 == 0) {
    num = "soft"
  } 
  else{
  	num=i;
  };
	document.write(num + ", ");
}
