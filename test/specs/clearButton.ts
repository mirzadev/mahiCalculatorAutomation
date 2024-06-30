import homePage from "../pageobjects/home.page.js";

describe('Validating the number entered in the input field- TC-1016', ()=>{

    beforeEach("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })

    it('First number 9999.99 entered and clear Button selected', async () => {
        await homePage.firstNumInput.setValue ("9999.99") ;
        console.log("First Number Entered: ", (await homePage.firstNumInput).getText()) 
        await homePage.clearBtn.click(); 
        await expect(homePage.firstNumInput).toHaveText("")     
    })

    it('Second number 8908765.98 entered and clear Button selected', async () => {
        await homePage.secondNumInput.setValue ("8908765.98") ;
        console.log("Second Number Entered: ", (await homePage.secondNumInput).getText()) 
        await homePage.clearBtn.click(); 
        await expect(homePage.secondNumInput).toHaveText("")     
    })

    it('First number 7743.09 and second number -44.64 entered and clear Button selected', async () => {
        await homePage.firstNumInput.setValue ("7743.09") ;
        await homePage.secondNumInput.setValue ("-44.64") ;
        console.log("First Number Entered: ", (await homePage.firstNumInput).getText()) 
        console.log("Second Number Entered: ", (await homePage.secondNumInput).getText()) 
        await homePage.clearBtn.click(); 
        await expect(homePage.firstNumInput).toHaveText("") 
        await expect(homePage.secondNumInput).toHaveText("")    
    })

    it('First number and second number entered, Addition button clicked and then clear Button selected', async () => {
        await homePage.firstNumInput.setValue ("6459.03") ;
        await homePage.secondNumInput.setValue ("86") ;
        await homePage.addnBtn.click();  

        console.log("First Number Entered: ", (await homePage.firstNumInput).getText()) 
        console.log("Second Number Entered: ", (await homePage.secondNumInput).getText())
        console.log("Calculation Result value: ", (await homePage.firstNumInput).getText()) 

        await homePage.clearBtn.click(); 
        await expect(homePage.firstNumInput).toHaveText("") 
        await expect(homePage.secondNumInput).toHaveText("") 
        await expect(homePage.calResult).toHaveText("")    
    })






    after("exit page", ()=>{
        console.log("exit application")
    })
});