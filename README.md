# twitter-blocking-assistant
  - This is a Google Chrome Extension, but it cannot be used as an extension any more.

# features
  - Blocking all the twitter(X) accounts of follower list.(Due to twitter(X) follower list's bug, this feature doesn't work.)
  - Blocking all the twitter(X) accounts of like list for a single tweet.
  - Blocking all the twitter(X) accounts of retweeting list for a single tweet.

# issues fixed
  - the only useful part is this code:

    ```javascript
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
    ```
# How to use BookMark excuting the javascript
  - Create a new bookmark in Google Chrome
  - Edit the bookmark and replace the url to javascript code

# Minified code as follows:
```javascript
javascript:(async()=>{async function t(t){await new Promise(e=>setTimeout(e,100*t))}async function e(t){window.scrollBy(0,90*t)}let a=document.querySelectorAll("[data-testid=UserCell]"),l=a.length;console.log(l);for(let c=0;c<l;c++){let i=document.querySelectorAll("[data-testid=UserCell]");i[c].click(),await t(16);let r=document.querySelector("div[data-testid$='-unblock']");if(!r){let o=document.querySelector("[data-testid=userActions]");o.click(),await t(18);let d=document.querySelector("[data-testid=block]");d.click(),await t(17);let s=document.querySelector("[data-testid=confirmationSheetConfirm]");s.click()}await t(16);let n=document.querySelector("[data-testid=app-bar-back]");n.click(),await t(15)}await e(l+17)})();
```

# The screenshot is as follows:
![Local Image](./images/edit_bookmark.png)