var book1,book2,book3,book4,book5,book6,book7,book8,book9,book10;
var libText,libLabel1,libLabel2,libLabel3,libLabel4,libX,libY;
class Library{
    constructor(){
        for(libY=300;libY<760;libY+=60){
            for(libX=260;libX<1050;libX+=250){
        
                this.inp=createInput("abcd");
                this.inp.position(libX,libY);
                libArray.push(this.inp);
                console.log(libArray);
            }
            }
    }

   



    display(){
    libText=createElement("h2");
    libText.position(160,140);  
    libText.html("*  LIBRARY  *"+"<br/>"+"Here you can make a list of the books you have borrowed from the library/friend/teacher, their date of issue & return.") 
    
    libLabel1=createElement("h2");
    libLabel1.position(260,230);
    libLabel1.html("Name of the book");

    libLabel2=createElement("h2");
    libLabel2.position(510,230);
    libLabel2.html("Source of the book");

    libLabel3=createElement("h2");
    libLabel3.position(760,230);
    libLabel3.html("Date of issue");

    libLabel4=createElement("h2");
    libLabel4.position(1010,230);
    libLabel4.html("Date of return");

 

  

    // book1=createInput("");
    // book1.position();
    
    }

}