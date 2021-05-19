//change color

function changeColor() {
	"use strict";
	//var cl = document.getElementById("circle");
	
	//document.getElementById("circle").setAttribute("id" , "transition1");
	//transition 1
	//document.getElementById("circle").onclick = function () {
	document.querySelector(".toggle").onclick = function () {
	    document.querySelector(".toggle").setAttribute("class", "toggle2");
	    document.getElementById("circle").setAttribute("id", "transition1");
	    //document.getElementById("circle").style.color = "hsl(25, 98%, 40%)";
	    document.getElementById("transition1").style.color = "hsl(25, 98%, 40%)";
		document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
		document.getElementById("input").style.backgroundColor = "hsl(0, 0%, 93%)";
		document.getElementById("input").style.color = "hsl(60, 10%, 19%)"; //black
		document.querySelector(".screen").style.backgroundColor = "hsl(0, 5%, 81%)";
		document.querySelector(".toggle2").style.backgroundColor = "hsl(0, 5%, 81%)";
		var x = document.querySelectorAll(".num"),
		    i;
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "hsl(60, 10%, 19%)"; //black
			x[i].style.backgroundColor = "hsl(45, 7%, 89%)"; //black
			x[i].style.borderBottom = "5px solid hsl(35, 11%, 61%)"; //black
		}
		document.querySelector(".calc").style.color = "hsl(60, 10%, 19%)";  //black
		document.querySelector(".theme").style.color = "hsl(60, 10%, 19%)";  //black
		document.querySelector(".numbers").style.color = "hsl(60, 10%, 19%)"; //black
		
		document.querySelector(".rs").style.backgroundColor = "hsl(185, 42%, 37%)";
		document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";
		document.querySelector(".eq").style.backgroundColor = "hsl(25, 98%, 40%)";
		
		document.querySelector(".rs").style.borderBottom = "5px solid hsl(185, 58%, 25%)";
		document.querySelector(".del").style.borderBottom = "5px solid hsl(185, 58%, 25%)";
		document.querySelector(".eq").style.borderBottom = "5px solid hsl(25, 99%, 27%)";
		
		//transition 2
	    //document.getElementById("transition1").onclick = function () {
	    document.querySelector(".toggle2").onclick = function () {
		    document.querySelector(".toggle2").setAttribute("class", "toggle3");
		    document.getElementById("transition1").setAttribute("id", "transition2");
			document.getElementById("transition2").style.color = "hsl(176, 100%, 44%)";
			document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
			document.getElementById("input").style.backgroundColor = "hsl(268, 71%, 12%)";
			document.getElementById("input").style.color = "hsl(52, 100%, 62%)"; //yellow
			document.querySelector(".screen").style.backgroundColor = "hsl(268, 71%, 12%)";
			document.querySelector(".toggle3").style.backgroundColor = "hsl(268, 71%, 12%)";
		    var x = document.querySelectorAll(".num"),
				i;
		    for (i = 0; i < x.length; i++) {
				x[i].style.color = "hsl(52, 100%, 62%)"; //yellow
				x[i].style.backgroundColor = "hsl(268, 47%, 21%)";
				x[i].style.borderBottom = "5px solid hsl(290, 70%, 36%)";
		    }
			document.querySelector(".calc").style.color = "hsl(52, 100%, 62%)";  //yellow
			document.querySelector(".theme").style.color = "hsl(52, 100%, 62%)";  //yellow
			document.querySelector(".numbers").style.color = "hsl(52, 100%, 62%)"; //yellow

			document.querySelector(".rs").style.backgroundColor = "hsl(281, 89%, 26%)";
			document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";
			document.querySelector(".eq").style.backgroundColor = "hsl(176, 100%, 44%)";

			document.querySelector(".rs").style.borderBottom = "5px solid hsl(285, 91%, 52%)";
			document.querySelector(".del").style.borderBottom = "5px solid hsl(285, 91%, 52%)";
			document.querySelector(".eq").style.borderBottom = "5px solid hsl(177, 92%, 70%)";
		
		
		
		//transition 3
		    //document.getElementById("transition2").onclick = function () {
		    document.querySelector(".toggle3").onclick = function () {
		        document.querySelector(".toggle3").setAttribute("class", "toggle");
		        document.getElementById("transition2").setAttribute("id", "circle");
				document.getElementById("circle").style.color = "hsl(6, 63%, 50%)";
				document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
				document.getElementById("input").style.backgroundColor = "hsl(224, 36%, 15%)";
				document.getElementById("input").style.color = "white"; //white
				document.querySelector(".screen").style.backgroundColor = "hsl(223, 31%, 20%)";
				document.querySelector(".toggle").style.backgroundColor = "hsl(223, 31%, 20%)";
		        var x = document.querySelectorAll(".num"),
					i;
		        for (i = 0; i < x.length; i++) {
					x[i].style.color = "hsl(221, 14%, 31%)";//white
					x[i].style.backgroundColor = "hsl(30, 25%, 89%)";
					x[i].style.borderBottom = "5px solid hsl(28, 16%, 65%)";
				}
				document.querySelector(".calc").style.color = "white";  //white
				document.querySelector(".theme").style.color = "white";  //white
				document.querySelector(".numbers").style.color = "white"; //white

				document.querySelector(".rs").style.backgroundColor = "hsl(225, 21%, 49%)";
				document.querySelector(".del").style.backgroundColor = "hsl(225, 21%, 49%)";
				document.querySelector(".eq").style.backgroundColor = "hsl(6, 63%, 50%)";

				document.querySelector(".rs").style.borderBottom = "5px solid hsl(224, 28%, 35%)";
				document.querySelector(".del").style.borderBottom = "5px solid hsl(224, 28%, 35%)";
				document.querySelector(".eq").style.borderBottom = "5px solid hsl(6, 70%, 34%)";
			
			
			
			    changeColor();
			
	        };
	    };
	};
	
	
	
}

setInterval(changeColor, 10);

// calculate 
function insert(class1, num) {
	"use strict";
	var mystr =	window.input.value;
	window.input.value = mystr + num;
	document.querySelector(class1).style.borderBottom = "5px solid transparent";
	document.querySelector(class1).style.borderRadius = "0px";
	window.input.style.textAlign = "left";
	
	// plus
	document.querySelector(".plus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "+";
		document.querySelector(".plus").onclick = function () {
			
		};
	
	};
	// minus
	document.querySelector(".minus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "-";
		document.querySelector(".minus").onclick = function () {
				
		};
	};
		
		// times
    document.querySelector(".times").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "*";
		document.querySelector(".times").onclick = function () {
		};
	};
		 
		 //divise
	document.querySelector(".divise").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "/";
		document.querySelector(".divise").onclick = function () {
			 
		};
	};
}


	
function insert1() {
	"use strict";
	var mystr =	window.input.value;
	window.input.value = mystr + "+";
	window.input.style.textAlign = "left";
	document.querySelector(".plus").onclick = function () {
		
	};
		
	
}

function insert2() {
	"use strict";
	var mystr =	window.input.value;
	window.input.value = mystr + "-";
	window.input.style.textAlign = "left";
	document.querySelector(".minus").onclick = function () {
		
	};
}

function insert3() {
	"use strict";
	var mystr =	window.input.value;
	if (window.input.value === "") {
	    window.input.value = mystr + "";
    }
        else {
	        window.input.value = mystr + "*";
	    }
	window.input.style.textAlign = "left";
	document.querySelector(".times").onclick = function () {
		
	};
}

function insert4() {
	"use strict";
	var mystr =	window.input.value;
	if (window.input.value === "") {
	    window.input.value = mystr + "";
	}
        else {
		    window.input.value = mystr + "/";
        }
	window.input.style.textAlign = "left";
	document.querySelector(".divise").onclick = function () {
		
	};
}
	/*	
function insert0() {
	"use strict";
	var mystr = window.input.value;

	window.input.value = mystr + ".";
} */
		
		
		
function clean() {
	"use strict";
	window.input.value = "";
    // plus
	document.querySelector(".plus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "+";
		document.querySelector(".plus").onclick = function () {
			
		};
	
	};
	// minus
	document.querySelector(".minus").onclick = function () {
	    var mystr =	window.input.value;
	    window.input.value = mystr + "-";
		document.querySelector(".minus").onclick = function () {
				
		};
	};
		
		// times
    document.querySelector(".times").onclick = function () {
	    var mystr = window.input.value;
	    window.input.value = mystr + "*";
		document.querySelector(".times").onclick = function () {
	    };
	};
		 
		 //divise
    document.querySelector(".divise").onclick = function () {
	    var mystr =	window.input.value;
	    window.input.value = mystr + "/";
		document.querySelector(".divise").onclick = function () {
			 
		};
	};
		 
}
	
function back() {
	"use strict";
	var exp = window.input.value;

	window.input.value = exp.substring(0, exp.length - 1);
	
	// plus
	document.querySelector(".plus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "+";
		document.querySelector(".plus").onclick = function () {
			
		};
	
	};
	// minus
	document.querySelector(".minus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "-";
		document.querySelector(".minus").onclick = function () {
				
		};
	};
		
		// times
	document.querySelector(".times").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "*";
		document.querySelector(".times").onclick = function () {
		};
	};
		 
		 //divise
    document.querySelector(".divise").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "/";
		document.querySelector(".divise").onclick = function () {
			 
		};
	};
}
	
function equal() {
	"use strict";
	var sum = window.input.value;
			 
	if (sum) {
				
		window.input.value = eval(sum);
		window.input.style.textAlign = "right";
		window.input.style.paddingRight = "20px";
    }
	// plus
	document.querySelector(".plus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "+";
		document.querySelector(".plus").onclick = function () {
			
		};
	
	};
	// minus
	document.querySelector(".minus").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "-";
		document.querySelector(".minus").onclick = function () {
				
		};
	};
		
		// times
    document.querySelector(".times").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "*";
		document.querySelector(".times").onclick = function () {
		};
	};
		 
		 //divise
    document.querySelector(".divise").onclick = function () {
		var mystr =	window.input.value;
	    window.input.value = mystr + "/";
	    document.querySelector(".divise").onclick = function () {
			 
		};
	};

}