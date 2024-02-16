# twitter-blocking-assistant
  - This is a Google Chrome Extension, but it cannot be used as an extension any more.

# features
  - Blocking all the twitter(X) accounts of follower list.(Due to twitter(X) follower list's bug, this feature doesn't work.)
  - Blocking all the twitter(X) accounts of like list for a single tweet.
  - Blocking all the twitter(X) accounts of retweeting list for a single tweet.

# How to use BookMark executing the javascript
  - Create a new bookmark in Google Chrome
  - Edit the bookmark and replace the url to javascript code

# Minified code as follows:
```javascript
javascript:(async()=>{async function e(e){await new Promise(t=>setTimeout(t,100*e))}async function t(e){return new Promise(t=>{window.scrollBy(0,90*e),setTimeout(()=>{console.log("Finished scrolling, executing other code now."),t()},1e3)})}async function i(){let i=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]'),l=i.length;console.log(l);for(let a=0;a<l;a++){let c=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');if(!c[a])continue;{let n=c[a].querySelector('div[data-testid$="-unblock"]');if(n)continue;c[a].click()}await e(13);let o=document.querySelector("div[data-testid$='-unblock']");if(!o){let r=document.querySelector("[data-testid=userActions]");r&&r.click(),await e(14);let d=document.querySelector("[data-testid=block]");d&&d.click(),await e(15);let s=document.querySelector("[data-testid=confirmationSheetConfirm]");s&&s.click()}await e(14);let u=document.querySelector("[data-testid=app-bar-back]");u&&u.click(),await e(13)}setTimeout(()=>{console.log("Finished blocking, executing other code now.")},2e3*l),await t(l)}for(let l=0;l<3;l++)await i(),console.log(`autoBlocking run ${l+1} completed.`)})();
```

# The screenshot is as follows:
![Local Image](./images/edit_bookmark.png)
