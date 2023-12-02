
// delay a few sceonds to excute next line
async function delay(seconds) {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, seconds * 100));
    console.log('after 1 second');
}

// click user actions button
const userActions = document.querySelector('[data-testid=userActions]');
userActions.click();

await delay(8);

// click block button
const blockButton = document.querySelector('[data-testid=block]');
blockButton.click();

await delay(7);

// click confirm button
const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
confirmButton.click();

await delay(6);

// click back button, back to the twitter accounts list
const backButton = document.querySelector('[data-testid=app-bar-back]');
backButton.click();

await delay(5);

// attain the list of twitter accounts
const blockElements = document.querySelectorAll('[data-testid=UserCell]');
alert(blockElements.length);


// javascript:(async () => {
//     async function delay(seconds) {
//         console.log('start timer');
//         await new Promise(resolve => setTimeout(resolve, seconds * 100));
//         console.log('after 1 second');
//     }
    
//     const userActions = document.querySelector('[data-testid=userActions]');
//     userActions.click();
    
//     await delay(8);
    
//     const blockButton = document.querySelector('[data-testid=block]');
//     blockButton.click();
    
//     await delay(7);
    
//     const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
//     confirmButton.click();
// })();