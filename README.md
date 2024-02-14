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
    ```
# How to use BookMark executing the javascript
  - Create a new bookmark in Google Chrome
  - Edit the bookmark and replace the url to javascript code

# Minified code as follows:
```javascript
javascript:(async()=>{async function t(t){await new Promise(e=>setTimeout(e,100*t))}async function e(t){window.scrollBy(0,90*t)}let a=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]'),l=a.length;console.log(l);for(let i=0;i<l;i++){let c=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');c[i]&&c[i].click(),await t(13);let r=document.querySelector("div[data-testid$='-unblock']");if(!r){let d=document.querySelector("[data-testid=userActions]");d&&d.click(),await t(14);let n=document.querySelector("[data-testid=block]");n&&n.click(),await t(15);let o=document.querySelector("[data-testid=confirmationSheetConfirm]");o&&o.click()}await t(14);let s=document.querySelector("[data-testid=app-bar-back]");s&&s.click(),await t(13)}await e(l+17)})();
```

# The screenshot is as follows:
![Local Image](./images/edit_bookmark.png)
