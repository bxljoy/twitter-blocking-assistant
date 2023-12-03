
// delay a few sceonds to excute next line
async function delay(seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 100));
}

// scroll down the page
async function scrollDown(num) {
    await window.scrollBy(0, num * 90);
}

// attain the list of twitter accounts
const blockElements = document.querySelectorAll('[data-testid=UserCell]');
let length = blockElements.length;
console.log(length);
// const ch = blockElements[0].clientHeight

// await scrollDown(17);

for (let i = 0; i < length; i++) {

    const newBlockElements = document.querySelectorAll('[data-testid=UserCell]');
    newBlockElements[i].click();
    await delay(16);

    // find the send DM button
    // const sendDMButton = document.querySelector('[data-testid=sendDMFromProfile]');

    // find the unblock button
    const unblockButton = document.querySelector("div[data-testid$='-unblock']");

    if (!unblockButton) {

        // click user actions button
        const userActions = document.querySelector('[data-testid=userActions]');
        userActions.click();

        await delay(18);

        // click block button
        const blockButton = document.querySelector('[data-testid=block]');
        blockButton.click();

        await delay(17);
        // click confirm button
        const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
        confirmButton.click();
    }

    await delay(16);

    // click back button, back to the twitter accounts list
    const backButton = document.querySelector('[data-testid=app-bar-back]');
    backButton.click();

    await delay(15);

}
await scrollDown(length+17);





javascript:(async () => {
// delay a few sceonds to excute next line
async function delay(seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 100));
}

async function scrollDown(num) {
    window.scrollBy(0, num * 70);
}

// attain the list of twitter accounts
const blockElements = document.querySelectorAll('[data-testid=UserCell]');
let length = blockElements.length;
console.log(length);

for (let i = 0; i < length; i++) {

    const newBlockElements = document.querySelectorAll('[data-testid=UserCell]');
    newBlockElements[i].click();
    await delay(10);

    // find the send DM button
    // const sendDMButton = document.querySelector('[data-testid=sendDMFromProfile]');

    // find the unblock button
    const unblockButton = document.querySelector("div[data-testid$='-unblock']");

    if (!unblockButton) {

        // click user actions button
        const userActions = document.querySelector('[data-testid=userActions]');
        userActions.click();

        await delay(11);

        // click block button
        const blockButton = document.querySelector('[data-testid=block]');
        blockButton.click();

        await delay(10);
        // click confirm button
        const confirmButton = document.querySelector('[data-testid=confirmationSheetConfirm]');
        confirmButton.click();
    }

    await delay(11);

    // click back button, back to the twitter accounts list
    const backButton = document.querySelector('[data-testid=app-bar-back]');
    backButton.click();

    await delay(10);
}
await scrollDown(length+17);
})();