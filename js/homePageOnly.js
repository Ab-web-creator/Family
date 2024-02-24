
const arrowcha = document.querySelector('.arrow')

const mainDiv = document.querySelector('.section-container')

const dynamicContainer = document.querySelector('.dynamicContainer')
 
const pageOnePlaceHolderV = document.querySelector('.pageOnePlaceHolderV')

const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')

const logoteam = document.querySelector('.logoteam')
    logoteam.classList.add("logoteam")


const button1 = document.querySelector('.button1')
    button1.classList.add("button1")
const button2 = document.querySelector('.button2')
    button2.classList.add("button2")
const button3 = document.querySelector('.button3')
    button3.classList.add("button3")

const button1text = document.querySelector('.button1text')
    button1text.classList.add("button1text")
const button2text = document.querySelector('.button2text')
    button2text.classList.add("button2text")
const button3text = document.querySelector('.button3text')
    button3text.classList.add("button3text")

const button4 = document.querySelector('.button4')
    button4.classList.add("button4")
const button5 = document.querySelector('.button5')
    button5.classList.add("button5")
const button6 = document.querySelector('.button6')
    button6.classList.add("button6")

const button4text = document.querySelector('.button4text')
    button4text.classList.add("button4text")
const button5text = document.querySelector('.button5text')
    button5text.classList.add("button5text")
const button6text = document.querySelector('.button6text')
    button6text.classList.add("button6text")

const button7 = document.querySelector('.button7')
    button7.classList.add("button7")
const button8 = document.querySelector('.button8')
    button8.classList.add("button8")
const button9 = document.querySelector('.button9')
    button9.classList.add("button9")

const button7text = document.querySelector('.button7text')
    button7text.classList.add("button7text")
const button8text = document.querySelector('.button8text')
    button8text.classList.add("button8text")
const button9text = document.querySelector('.button9text')
    button9text.classList.add("button9text")

const button10 = document.querySelector('.button10')
    button10.classList.add("button10")
const button11 = document.querySelector('.button11')
    button11.classList.add("button11")
const button12 = document.querySelector('.button12')
    button12.classList.add("button12")

const button10text = document.querySelector('.button10text')
    button10text.classList.add("button10text")
const button11text = document.querySelector('.button11text')
    button11text.classList.add("button11text")
const button12text = document.querySelector('.button12text')
    button12text.classList.add("button12text")



const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false

let isDescOpen = false


const blur2 = document.querySelector('.blur2')

   button1.style.display = ''
   button2.style.display = ''
   button3.style.display = ''
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = 'none'
   button5.style.display = 'none'
   button6.style.display = 'none'
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = 'none'
   button8.style.display = 'none'
   button9.style.display = 'none'
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = 'none'
   button11.style.display = 'none'
   button12.style.display = 'none'
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'



							  

mainDiv.addEventListener('scroll', () => {
  
	const scrolledHeight = mainDiv.scrollTop

    blur2.style.display = 'none'

		
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 4.0) 
  {
	  
  }
  
  if (scrolledHeight >= 0.1 && scrolledHeight <= page1.scrollHeight * 4) 
  {button1.style.display = ''
   button2.style.display = ''
   button3.style.display = ''
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = 'none'
   button5.style.display = 'none'
   button6.style.display = 'none'
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = 'none'
   button8.style.display = 'none'
   button9.style.display = 'none'
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = 'none'
   button11.style.display = 'none'
   button12.style.display = 'none'
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'
  }
													
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 0.5) 
  {    
   button1.style.display = ''
   button2.style.display = ''
   button3.style.display = ''
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = 'none'
   button5.style.display = 'none'
   button6.style.display = 'none'
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = 'none'
   button8.style.display = 'none'
   button9.style.display = 'none'
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = 'none'
   button11.style.display = 'none'
   button12.style.display = 'none'
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'
	  
	  
  logoteam.className= "logoteam"  
	  
  Vinbutton1_1.className = "Vinbutton1_1";
  Vinbutton1_2.className = "Vinbutton1_2";
  Vinbutton1_3.className = "Vinbutton1_3";
	  
  }
	
 if (scrolledHeight > page1.scrollHeight * 0.5 &&
    scrolledHeight <= page1.scrollHeight * 1.5) 
 {
   Vinbutton1_1.className = "Vinbutton2_1";
   Vinbutton1_2.className = "Vinbutton2_2";
   Vinbutton1_3.className = "Vinbutton2_3";
	 
   button1.style.display = 'none'
   button2.style.display = 'none'
   button3.style.display = 'none'
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = ''
   button5.style.display = ''
   button6.style.display = ''
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = 'none'
   button8.style.display = 'none'
   button9.style.display = 'none'
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = 'none'
   button11.style.display = 'none'
   button12.style.display = 'none'
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'
	 
   logoteam.className = "logosim" 
 }

if (scrolledHeight > page1.scrollHeight * 1.5 &&
    scrolledHeight <= page1.scrollHeight * 2.5) 
 { 
   Vinbutton1_1.className = "Vinbutton3_1";
   Vinbutton1_2.className = "Vinbutton3_2";
   Vinbutton1_3.className = "Vinbutton3_3";
	 
   button1.style.display = 'none'
   button2.style.display = 'none'
   button3.style.display = 'none'
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = 'none'
   button5.style.display = 'none'
   button6.style.display = 'none'
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = ''
   button8.style.display = ''
   button9.style.display = ''
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = 'none'
   button11.style.display = 'none'
   button12.style.display = 'none'
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'
	 
 logoteam.className = "logotheo" 
  }
  
if (scrolledHeight > page1.scrollHeight * 2.5 &&
    scrolledHeight <= page1.scrollHeight * 3.5) { 
	
   Vinbutton1_1.className = "Vinbutton4_1";
   Vinbutton1_2.className = "Vinbutton4_2";
   Vinbutton1_3.className = "Vinbutton4_3";
	
   button1.style.display = 'none'
   button2.style.display = 'none'
   button3.style.display = 'none'
	  
   button1text.style.display = 'none'
   button2text.style.display = 'none'
   button3text.style.display = 'none'
   
   button4.style.display = 'none'
   button5.style.display = 'none'
   button6.style.display = 'none'
	  
   button4text.style.display = 'none'
   button5text.style.display = 'none'
   button6text.style.display = 'none'
   
   button7.style.display = 'none'
   button8.style.display = 'none'
   button9.style.display = 'none'
	  
   button7text.style.display = 'none'
   button8text.style.display = 'none'
   button9text.style.display = 'none'
   
   button10.style.display = ''
   button11.style.display = ''
   button12.style.display = ''
	  
   button10text.style.display = 'none'
   button11text.style.display = 'none'
   button12text.style.display = 'none'
	
    logoteam.className = "logoimpact" 
  }});


const Vinbutton1_1 = document.querySelector('.Vinbutton1_1');
Vinbutton1_1.classList.add("Vinbutton1_1");
Vinbutton1_1.addEventListener('click', function () 
	 {
    if (Vinbutton1_1.classList.contains("Vinbutton1_1")) {

 		 button1.style.display = 'none';
         button2.style.display = '';
         button3.style.display = '';
	  
         button1text.style.display = '';
         button2text.style.display = 'none';
         button3text.style.display = 'none';
		
        }
else if (Vinbutton1_1.classList.contains("Vinbutton1_1high1") || Vinbutton1_1.classList.contains("Vinbutton1_1high2")) {
	   	
	     button1.style.display = 'none';
         button2.style.display = '';
         button3.style.display = '';
	  
         button1text.style.display = '';
         button2text.style.display = 'none';
         button3text.style.display = 'none';
	     
		Vinbutton1_1.className = "Vinbutton1_1";
	    Vinbutton1_2.className = "Vinbutton1_2";
}
else if (Vinbutton1_1.classList.contains("Vinbutton2_1")) {
	 	
	     button4.style.display = 'none';
         button5.style.display = '';
         button6.style.display = '';
	  
         button4text.style.display = '';
         button5text.style.display = 'none';
         button6text.style.display = 'none';
	}
	
else if (Vinbutton1_1.classList.contains("Vinbutton2_1high1"))
        {
         button4.style.display = 'none';
         button5.style.display = '';
         button6.style.display = '';
	  
         button4text.style.display = '';
         button5text.style.display = 'none';
         button6text.style.display = 'none';
			
        Vinbutton1_1.className = "Vinbutton2_1";
	    Vinbutton1_2.className = "Vinbutton2_2";
}	 
else if (Vinbutton1_1.classList.contains("Vinbutton2_1high2")){
		
		 button4.style.display = 'none';
         button5.style.display = '';
         button6.style.display = '';
	  
         button4text.style.display = '';
         button5text.style.display = 'none';
         button6text.style.display = 'none';
	
		 Vinbutton1_1.className = "Vinbutton2_1";
	     Vinbutton1_2.className = "Vinbutton2_2";
	}
else if (Vinbutton1_1.classList.contains("Vinbutton3_1")) {
	
         button7.style.display = 'none';
         button8.style.display = '';
         button9.style.display = '';
	  
         button7text.style.display = '';
         button8text.style.display = 'none';
         button9text.style.display = 'none';
	
}
	
else if (Vinbutton1_1.classList.contains("Vinbutton3_1high1") || Vinbutton1_1.classList.contains("Vinbutton3_1high2")) {
	   	
	     button7.style.display = 'none';
         button8.style.display = '';
         button9.style.display = '';
	  
         button7text.style.display = '';
         button8text.style.display = 'none';
         button9text.style.display = 'none';
	     
		Vinbutton1_1.className = "Vinbutton3_1";
	    Vinbutton1_2.className = "Vinbutton3_2";
} 

else if (Vinbutton1_1.classList.contains("Vinbutton4_1")) {

 		 button10.style.display = 'none';
         button11.style.display = '';
         button12.style.display = '';
	  
         button10text.style.display = '';
         button11text.style.display = 'none';
         button12text.style.display = 'none';
		
        }
else if (Vinbutton1_1.classList.contains("Vinbutton4_1high1") || Vinbutton1_1.classList.contains("Vinbutton4_1high2")) {
	   	
	     button10.style.display = 'none';
         button11.style.display = '';
         button12.style.display = '';
	  
         button10text.style.display = '';
         button11text.style.display = 'none';
         button12text.style.display = 'none';
	     
		Vinbutton1_1.className = "Vinbutton4_1";
	    Vinbutton1_2.className = "Vinbutton4_2";
}
	
});


const Vinbutton1_2 = document.querySelector('.Vinbutton1_2');
Vinbutton1_2.classList.add("Vinbutton1_2");
Vinbutton1_2.addEventListener('click', function () 
	 {
    if (Vinbutton1_2.classList.contains("Vinbutton1_2")) {

 		 button1.style.display = '';
         button2.style.display = 'none';
         button3.style.display = '';
	  
         button1text.style.display = 'none';
         button2text.style.display = '';
         button3text.style.display = 'none';
		
		 Vinbutton1_1.className = "Vinbutton1_1high1";
		 Vinbutton1_2.className = "Vinbutton1_2";
		
		
        }
else if (Vinbutton1_2.classList.contains("Vinbutton1_2high1")) {
		
		 Vinbutton1_1.className = "Vinbutton1_1high1";
	     Vinbutton1_2.className = "Vinbutton1_2";
		 Vinbutton1_3.className = "Vinbutton1_3";
	
	     button1.style.display = '';
         button2.style.display = 'none';
         button3.style.display = '';
	  
         button1text.style.display = 'none';
         button2text.style.display = '';
         button3text.style.display = 'none';
		 }
else if (Vinbutton1_2.classList.contains("Vinbutton2_2")) {
		 
	     button4.style.display = '';
         button5.style.display = 'none';
         button6.style.display = '';
	  
         button4text.style.display = 'none';
         button5text.style.display = '';
         button6text.style.display = 'none';
	
		 Vinbutton1_1.className = "Vinbutton2_1high1";
		 
}
else if (Vinbutton1_2.classList.contains("Vinbutton2_2high1")){
        
	     button4.style.display = '';
         button5.style.display = 'none';
         button6.style.display = '';
	  
         button4text.style.display = 'none';
         button5text.style.display = '';
         button6text.style.display = 'none';
	
		 Vinbutton1_1.className = "Vinbutton2_1high1";
		 Vinbutton1_2.className = "Vinbutton2_2";
	
}
	
	
else if (Vinbutton1_2.classList.contains("Vinbutton3_2")) {
	
         button7.style.display = '';
         button8.style.display = 'none';
         button9.style.display = '';
	  
         button7text.style.display = 'none';
         button8text.style.display = '';
         button9text.style.display = 'none';
	
		 Vinbutton1_1.className = "Vinbutton3_1high1";
}
	
	else if (Vinbutton1_2.classList.contains("Vinbutton3_2high1")) {
		
		 Vinbutton1_1.className = "Vinbutton3_1high1";
	     Vinbutton1_2.className = "Vinbutton3_2";
		 Vinbutton1_3.className = "Vinbutton3_3";
	
	     button7.style.display = '';
         button8.style.display = 'none';
         button9.style.display = '';
	  
         button7text.style.display = 'none';
         button8text.style.display = '';
         button9text.style.display = 'none';
		 }
else if (Vinbutton1_2.classList.contains("Vinbutton4_2")) {
		 
	     button10.style.display = '';
         button11.style.display = 'none';
         button12.style.display = '';
	  
         button10text.style.display = 'none';
         button11text.style.display = '';
         button12text.style.display = 'none';
	
		 Vinbutton1_1.className = "Vinbutton4_1high1";
		 
}
else if (Vinbutton1_2.classList.contains("Vinbutton4_2high1")){
        
	     button10.style.display = '';
         button11.style.display = 'none';
         button12.style.display = '';
	  
         button10text.style.display = 'none';
         button11text.style.display = '';
         button12text.style.display = 'none';
	
	    Vinbutton1_1.className = "Vinbutton4_1high1";
	    Vinbutton1_2.className = "Vinbutton4_2";
}
	
});
	
	
const Vinbutton1_3 = document.querySelector('.Vinbutton1_3');
Vinbutton1_3.classList.add("Vinbutton1_3");
Vinbutton1_3.addEventListener('click', function () 
	 {
    if (Vinbutton1_3.classList.contains("Vinbutton1_3")) {

 		 button1.style.display = '';
         button2.style.display = '';
         button3.style.display = 'none';
	  
         button1text.style.display = 'none';
         button2text.style.display = 'none';
         button3text.style.display = '';
		
		 Vinbutton1_1.className = "Vinbutton1_1high2";
		 Vinbutton1_2.className = "Vinbutton1_2high1";
	}

else if (Vinbutton1_3.classList.contains("Vinbutton2_3")) {
	
	     button4.style.display = '';
         button5.style.display = '';
         button6.style.display = 'none';
	  
         button4text.style.display = 'none';
         button5text.style.display = 'none';
         button6text.style.display = '';
	
         Vinbutton1_1.className = "Vinbutton2_1high2";
		 Vinbutton1_2.className = "Vinbutton2_2high1";
	
}
	
else if (Vinbutton1_3.classList.contains("Vinbutton3_3")) {
	
         button7.style.display = '';
         button8.style.display = '';
         button9.style.display = 'none';
	  
         button7text.style.display = 'none';
         button8text.style.display = 'none';
         button9text.style.display = '';
		
			
         Vinbutton1_1.className = "Vinbutton3_1high2";
		 Vinbutton1_2.className = "Vinbutton3_2high1";
}
	
else if (Vinbutton1_3.classList.contains("Vinbutton4_3")) {
	
         button10.style.display = '';
         button11.style.display = '';
         button12.style.display = 'none';
	  
         button10text.style.display = 'none';
         button11text.style.display = 'none';
         button12text.style.display = '';
		
			
         Vinbutton1_1.className = "Vinbutton4_1high2";
		 Vinbutton1_2.className = "Vinbutton4_2high1";
}	
        });






