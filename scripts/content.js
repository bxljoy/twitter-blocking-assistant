
// delay a few sceonds to excute next line
async function delay(seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 100));
}

// scroll down the page
async function scrollDown(num) {
    await window.scrollBy(0, num * 90);
}

// attain the list of twitter accounts
const blockElements = document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');
let length = blockElements.length;
console.log(length);
// const ch = blockElements[0].clientHeight

// await scrollDown(17);

for (let i = 0; i < length; i++) {

    const newBlockElements = document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');
    if (newBlockElements[i]) {
        newBlockElements[i].click();
    }
    await delay(13);

    // find the unblock button
    const unblockButton = document.querySelector("div[data-testid$='-unblock']");

    if (!unblockButton) {

        // click user actions button
        const userActions = document.querySelector('[data-testid=userActions]');
        if (userActions) {
            userActions.click();
        }

        await delay(14);

        // click block button
        const blockButton = document.querySelector('[data-testid=block]');
        if (blockButton) {
            blockButton.click();
        }

        await delay(15);
        // click confirm button
        const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
        if (confirmButton) {
            confirmButton.click();
        }
    }

    await delay(14);

    // click back button, back to the twitter accounts list
    const backButton = document.querySelector('[data-testid=app-bar-back]');
    if (backButton) {
        backButton.click();
    }

    await delay(13);

}
await scrollDown(length+17);





javascript:(async () => {
// delay a few sceonds to excute next line
async function delay(seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 100));
}

async function scrollDown(num) {
    window.scrollBy(0, num * 90);
}

// attain the list of twitter accounts
const blockElements = document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');
let length = blockElements.length;
console.log(length);

for (let i = 0; i < length; i++) {

    const newBlockElements = document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');
    if (newBlockElements[i]) {
        newBlockElements[i].click();
    }
    await delay(13);

    // find the unblock button
    const unblockButton = document.querySelector("div[data-testid$='-unblock']");

    if (!unblockButton) {

        // click user actions button
        const userActions = document.querySelector('[data-testid=userActions]');
        if (userActions) {
            userActions.click();
        }

        await delay(14);

        // click block button
        const blockButton = document.querySelector('[data-testid=block]');
        if (blockButton) {
            blockButton.click();
        }

        await delay(15);
        // click confirm button
        const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
        if (confirmButton) {
            confirmButton.click();
        }
    }

    await delay(14);

    // click back button, back to the twitter accounts list
    const backButton = document.querySelector('[data-testid=app-bar-back]');
    if (backButton) {
        backButton.click();
    }

    await delay(13);

}
await scrollDown(length+17);
})();