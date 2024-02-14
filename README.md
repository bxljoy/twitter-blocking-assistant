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
        // find the blocked user and skip to next one
        const blockedElement = newBlockElements[i].querySelector('div[data-testid$="-unblock"]');
        if (!blockedElement) {
          newBlockElements[i].click();
        } else {
          continue;
        }
      } else {
        continue;
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
javascript:(async()=>{async function e(e){await new Promise(t=>setTimeout(t,100*e))}async function t(e){window.scrollBy(0,90*e),setTimeout(()=>{console.log("Finished scrolling, executing other code now.")},1e3)}async function i(){let i=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]'),l=i.length;console.log(l);for(let a=0;a<l;a++){let c=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');if(!c[a])continue;{let n=c[a].querySelector('div[data-testid$="-unblock"]');if(n)continue;c[a].click()}await e(13);let o=document.querySelector("div[data-testid$='-unblock']");if(!o){let d=document.querySelector("[data-testid=userActions]");d&&d.click(),await e(14);let r=document.querySelector("[data-testid=block]");r&&r.click(),await e(15);let s=document.querySelector("[data-testid=confirmationSheetConfirm]");s&&s.click()}await e(14);let u=document.querySelector("[data-testid=app-bar-back]");u&&u.click(),await e(13)}setTimeout(()=>{console.log("Finished blocking, executing other code now.")},2e3*l),await t(l)}i()})();
```

# The screenshot is as follows:
![Local Image](./images/edit_bookmark.png)
