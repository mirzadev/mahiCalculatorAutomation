import { expect } from '@wdio/globals'
import homePage from "../pageobjects/home.page.js";

describe('Application navigated to homepage TC-1001-1004', () => {

    before("Open the application using URL", async ()=>{
        console.log("Application opened in browser")
        await browser.url("https://rococo-tanuki-20f259.netlify.app/")
        await browser.maximizeWindow();  
    })
    
    
    it('Page header displayed correctly-TC-1005 & 1007', async () => {
      
        await expect(homePage.header).toHaveText("MAHI SIMPLE CALCULATOR") 
    })
})

describe('Number and result header displayed correctly TC-1009-1011', ()=>{

    it('First number header displayed correctly', async () => {

        await expect(homePage.firstNumHeader).toBeDisplayed() ;   
    })

    it('Second number header displayed correctly', async () => {           
        await expect(homePage.secondNumHeader).toHaveText('Your Second Number:') ;   
    })

    it('Calculation result header displayed', async () => {   
        await expect(homePage.calResult).toBeDisplayed()   
    })
})

describe('All operating buttons displayed correctly', ()=>{
    
    it('verify addition button text', async () => {   
        await expect(homePage.addnBtn).toBeDisplayed() ;   
    })
   
    it('verify subtraction button text', async () => {   
        await expect(homePage.subtractBtn).toBeDisplayed() ;   
    })
    
    it('verify multiplication button text', async () => {    
        await expect(homePage.multiplyBtn).toHaveText('Multiplication') ;   
    })
    
    it('verify division button text', async () => {    
        await expect(homePage.divisionBtn).toBeDisplayed() ;   
    })
})
    
describe('Clear button text displayed correctly', ()=>{

    it('verify clear button text', async () => {   
        await expect(homePage.clearBtn).toBeDisplayed() ;   
    })
})

after("exit page", ()=>{
    console.log("exit application")
})



