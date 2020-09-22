function validate(){
	                if(document.form.email.value == ""){ // IF INPUT IS EMPTY:
					    document.getElementById('error').innerHTML = "Please provide a valid email"; //DISPLAY THIS TEXT
						document.form.email.focus(); //FOCUS ON INPUT
						document.form.email.style.backgroundImage = "url(./images/icon-error.svg)"; //DISPLAY THIS ICON
		                document.form.email.style.backgroundRepeat = "no-repeat";
		                document.form.email.style.backgroundPosition = "right 90px center";
						document.form.email.style.border = "2px solid hsl(0, 93%, 68%)"; //INCREASE INPUT BORDER-WIDTH && BORDER-COLOR
						document.form.email.placeholder = "";  //REMOVE PLACEHOLDER
						document.form.button.style.border = "2px solid hsl(0, 79%, 85%)"; //INCREASE BUTTON BORDER-WIDTH && CHANGE BORDER-COLOR
						document.form.button.style.background = "hsl(0, 79%, 85%)"; //CHANGE BUTTON BG-COLOR
						return false; //DO NOT SUBMIT
					}
					
					var emailID = document.form.email.value;
	                atpos = emailID.indexOf("@"); //PLACE A TEXT BEFORE "@" || PLACE "@" AFTER TEXT
		            dotpos = emailID.lastIndexOf("."); //PLACE A TEXT AFTER "."
	                if(atpos < 1 || (dotpos - atpos < 2)){ //IF "@" && "." ARE !WELL POSITIONED,
					    document.getElementById('error').innerHTML = "Please provide a valid email"; //DISPLAY THIS TEXT
						document.form.email.focus(); //FOCUS ON INPUT
						document.form.email.style.backgroundImage = "url(./images/icon-error.svg)"; //DISPLAY THIS ICON
		                document.form.email.style.backgroundRepeat = "no-repeat";
		                document.form.email.style.backgroundPosition = "right 90px center";
						document.form.email.style.border = "2px solid hsl(0, 93%, 68%)"; // CHANGE INPUT BORDER-WIDTH && BORDER-COLOR
						document.form.button.style.border = "2px solid hsl(0, 79%, 85%)"; //INCREASE BUTTON BORDER-WIDTH && CHANGE BORDER-COLOR
						document.form.button.style.background = "hsl(0, 79%, 85%)"; //CHANGE BUTTON BG-COLOR
						return false; //DO NOT SUBMIT
					} else{ //IF INPUT IS !EMPTY,
						document.form.email.value = ""; //CLEAR INPUT
						document.form.email.placeholder = "E-mail Address"; //SHOW PLACEHOLDER
						document.form.email.style.background = "transparent"; //REMOVE BG-IMAGE
						document.form.email.style.border = "1px solid hsl(0, 32%, 85%)"; //CHANGE INPUT BORDER
						document.getElementById('error').innerHTML = ""; //HIDE ERROR TEXT
						document.form.button.style.background = "repeating-linear-gradient(135deg, #f8bfbf, #ee8c8c)";
						
						function display(){ //display() is just a random functionName
					    var alert = document.getElementById('alert'); //ALERT IS JUST A RANDOM varNAME
					    alert.focus();
					    alert.style.display = "block"; //SHOW ALERT MSG.
					    } //END OF DISPLAY FUNCTION
					    setTimeout(display, 500); 
					    return false; //DO NOT SUBMIT
					} //END ELSE STATEMENT
					return ( true ); //SUBMIT FORM
	}