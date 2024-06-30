import Page from './page.js';

class HomePage extends Page{

   public get header(){return $("#page-header")};
    
   public get firstNumHeader(){return $("#number_tag1")};

   public get firstNumInput(){return $("#firstNumber")};
    
   public get secondNumHeader(){return $("#number_tag2")};
    
   public get secondNumInput(){return $("#secondNumber")};
    
   public get ResultHeader(){return $("#result-header")};

   public get calResult(){return $("#result")};
    
   public get addnBtn(){return $("#Addition")};
    
   public get subtractBtn(){return $("#Subtraction")};
    
   public get multiplyBtn(){return $("$Multiplication")};
    
   public get divisionBtn(){return $("#Division")};
    
   public get clearBtn(){return $("#Clear")};
    
   public get messageFd(){return $("#divResults")};
    
}

export default new HomePage();