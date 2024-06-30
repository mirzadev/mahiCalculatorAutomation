import homePage from "../pageobjects/home.page.js";

describe('Sign Change and Consecutive operation - TC-1017', ()=>{
    before("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })
    it('Addition - for sign change and Consecutive operation', async () => {   
        await homePage.firstNumInput.setValue ("55") ;
        await homePage.secondNumInput.setValue ("24") ;
         
        await homePage.addnBtn.click();  
        await expect(homePage.calResult).toHaveText("79")
        console.log("Addition operation conplited")
        console.log("After Addition Calculation Result: ", (await homePage.firstNumInput).getText())
        })

        it('Subtraction - for sign change and Consecutive operation', async () => { 
        await homePage.subtractBtn.click();
        await expect(homePage.calResult).toHaveText("31")
        console.log("Subtraction operation conplited")
        console.log("After Subtraction Calculation Result: ", (await homePage.firstNumInput).getText())
        })

        it('Multiplication - for sign change and Consecutive operation', async () => { 
        await homePage.multiplyBtn.click();
        await expect(homePage.calResult).toHaveText("1320")
        console.log("Multiplication operation conplited")
        console.log("After Multiplication Calculation Result: ", (await homePage.firstNumInput).getText())
        })

        it('Addition - for sign change and Consecutive operation', async () => {   
        await homePage.divisionBtn.click();
        await expect(homePage.calResult).toHaveText("2.2916666666666665")
        console.log("division operation conplited") 
        console.log("After Division Calculation Result: ", (await homePage.firstNumInput).getText())
        })

    
});