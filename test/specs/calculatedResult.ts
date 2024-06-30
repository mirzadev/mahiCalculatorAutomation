import homePage from "../pageobjects/home.page.js";

describe('System does not calculate for one or more out of range number - TC-1015', ()=>{
    before("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })
    it('Addition - First number 10000 && second number -55', async () => {   
        await homePage.firstNumInput.setValue ("10000") ;
        await homePage.secondNumInput.setValue ("-55") ;
        await homePage.addnBtn.click();  

        await expect(homePage.calResult).toHaveText("")     
    })

    it('Subtraction - First number -10000 && second number -10000', async () => {

        await homePage.firstNumInput.setValue ("-10000") ;
        await homePage.secondNumInput.setValue ("-10000") ;
        await homePage.subtractBtn.click();  

        await expect(homePage.calResult).toHaveText("")    
    })

    it('Multiplication - First number -10000 && second number -10', async () => { 
        await homePage.firstNumInput.setValue ("-10000") ;
        await homePage.secondNumInput.setValue ("-10") ;
        await homePage.multiplyBtn.click();  

        await expect(homePage.calResult).toHaveText("")    
    })

    it('Division - First number 12543 && second number 23', async () => {

        await homePage.firstNumInput.setValue ("12543") ;
        await homePage.secondNumInput.setValue ("23") ;
        await homePage.divisionBtn.click();  

        await expect(homePage.calResult).toHaveText("")    
    })

    after("exit page", ()=>{
        console.log("exit application")
    })
});