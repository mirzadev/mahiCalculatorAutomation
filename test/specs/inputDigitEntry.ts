import homePage from "../pageobjects/home.page.js";

describe('Rule for input Digit after Decimal - TC-1018-TC-1923', ()=>{
    before("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })
    it('Division - First Number - 3 Digit after Decimal TC-1018', async () => {   
        await homePage.firstNumInput.setValue ("235.342") ;
        await homePage.secondNumInput.setValue ("21") ;
        await homePage.divisionBtn.click();  

        await expect(homePage.calResult).toHaveText("")     
    })

    it('Subtraction - First Number - 1 Digit after Decimal TC-1018', async () => {

        await homePage.firstNumInput.setValue ("213.3") ;
        await homePage.secondNumInput.setValue ("32") ;
        await homePage.subtractBtn.click();  

        await expect(homePage.calResult).toHaveText("181.3")    
    })

    it('Division - Second Number - 3 Digit after Decimal TC-1019', async () => { 
        await homePage.clearBtn.click();   
        await homePage.firstNumInput.setValue ("1021") ;
        await homePage.secondNumInput.setValue ("74.213") ;
        await homePage.divisionBtn.click();  

        await expect (homePage.calResult).toHaveText("") 
    })

    it('Addition - First Number - 1 Digit after Decimal TC-1019', async () => {

        await homePage.firstNumInput.setValue ("26") ;
        await homePage.secondNumInput.setValue ("3.7") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("29.7")    
    })

    it('Addition - First Number 356 second number empty TC-1020', async () => {

        await homePage.firstNumInput.setValue ("356") ;
        await homePage.secondNumInput.setValue ("") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("NaN")    
    })

    it('Addition - First Number empty second number 345 TC-1020', async () => {

        await homePage.firstNumInput.setValue ("") ;
        await homePage.secondNumInput.setValue ("345") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("NaN")    
    })

    it('Addition- First Number empty second number 345 TC-1020', async () => {

        await homePage.clearBtn.click();
        await homePage.firstNumInput.setValue ("") ;
        await homePage.secondNumInput.setValue ("") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("NaN")    
    })

    it('Addition- First Number 0 second number 95 TC-1021', async () => {

        await homePage.clearBtn.click();
        await homePage.firstNumInput.setValue ("0") ;
        await homePage.secondNumInput.setValue ("95") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("95")    
    })

    it('Subtraction- First Number 546 second number 0 TC-1022', async () => {

        await homePage.clearBtn.click();
        await homePage.firstNumInput.setValue ("546") ;
        await homePage.secondNumInput.setValue ("0") ;
        await homePage.subtractBtn.click();  

        await expect(homePage.calResult).toHaveText("546")    
    })

    it('Addition- Both number 0 TC-1023', async () => {

        await homePage.clearBtn.click();
        await homePage.firstNumInput.setValue ("0") ;
        await homePage.secondNumInput.setValue ("0") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("0")    
    })

    after("exit page", ()=>{
        console.log("exit application")
    })
});