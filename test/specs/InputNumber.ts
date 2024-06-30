import homePage from "../pageobjects/home.page.js";

describe('Validating the number entered in the input field', ()=>{

    beforeEach("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })
    it('First number entered 9999.99' , async () => {           
        console.log("First Number Entered: ", (await homePage.firstNumInput).getText())
         const enteredNumber = (await homePage.firstNumInput).getText();
        await expect(homePage.firstNumInput).toHaveText(await enteredNumber);
    })

    it('Second number entered -3456789.09' , async () => {           
        console.log("Second Number Entered: ", (await homePage.secondNumInput).getText())
         const enteredNumber = (await homePage.secondNumInput).getText();
        await expect(homePage.secondNumInput).toHaveText(await enteredNumber);
    })

    after("exit page", ()=>{
        console.log("exit application")
    })
});