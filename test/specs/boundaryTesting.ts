import homePage from "../pageobjects/home.page.js";

describe('Varifying the number input range - TC-1014 & TC-1015', () => {
    
    describe('Negative Testing', ()=>{
        before("Open the application using URL", async ()=>{
            console.log("Application opened in browser")
            await browser.url("https://rococo-tanuki-20f259.netlify.app/")
            await browser.maximizeWindow();  
        })
        it('First number 9999.99 && second number -11000.01', async () => {           
    
            await homePage.firstNumInput.setValue ("9999.99") ;
            await homePage.secondNumInput.setValue ("-11000.01") ;
            await homePage.divisionBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("")     
        })
    
        it('First number 10000 && second number -10000', async () => {
    
            await homePage.firstNumInput.setValue ("10000") ;
            await homePage.secondNumInput.setValue ("-10000") ;
            await homePage.divisionBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("")     
        })
        it('First number 10000.01 && second number 9999.99', async () => {

            await homePage.firstNumInput.setValue ("10000.01") ;
            await homePage.secondNumInput.setValue ("9999.99") ;
            await homePage.divisionBtn.click(); 
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("")     
        })
    })

    describe('Positive Testing', ()=>{

        it('First number 9999 && second number 0', async () => {
    
            await homePage.firstNumInput.setValue ("9999") ;
            await homePage.secondNumInput.setValue ("0") ;
            await homePage.addnBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("9999")     
        })
    
        it('First number 9999.99 && second number 9998.99', async () => {

            await homePage.firstNumInput.setValue ("9999.99") ;
            await homePage.secondNumInput.setValue ("9998.99") ;
            await homePage.subtractBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("1")     
        })
        it('First number 9999.01 && second number -8888', async () => {

            await homePage.firstNumInput.setValue ("9999.01") ;
            await homePage.secondNumInput.setValue ("-8888") ;
            await homePage.multiplyBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("-88871200.88")     
        })

        it('First number -1 && second number 231', async () => {
    
            await homePage.firstNumInput.setValue ("-1") ;
            await homePage.secondNumInput.setValue ("231") ;
            await homePage.multiplyBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("-231")     
        })

        it('First number 9999 && second number 8999.98', async () => {
    
            await homePage.firstNumInput.setValue ("9999") ;
            await homePage.secondNumInput.setValue ("8999.98") ;
            await homePage.addnBtn.click();  
    
            const calResult =  $('#result')
            await expect(calResult).toHaveText("18998.98")     
        })
    })

    after("exit page", ()=>{
        console.log("exit application")
    })

})
