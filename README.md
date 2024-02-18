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
javascript:(async()=>{async function t(t){await new Promise(e=>setTimeout(e,100*t))}async function e(t){return new Promise(e=>{window.scrollBy(0,90*t),setTimeout(()=>{e()},1e3)})}async function l(){let l=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]'),a=l.length;console.log(a);let i=0;for(let c=0;c<a;c++){let r=document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');if(!r[c])continue;{let o=r[c].querySelector('div[data-testid$="-unblock"]');if(o)continue;r[c].click(),i++}await t(13);let n=document.querySelector("div[data-testid$='-unblock']");if(!n){let d=document.querySelector("[data-testid=userActions]");d&&d.click(),await t(14);let u=document.querySelector("[data-testid=block]");u&&u.click(),await t(15);let s=document.querySelector("[data-testid=confirmationSheetConfirm]");s&&s.click()}await t(14);let y=document.querySelector("[data-testid=app-bar-back]");y&&y.click(),await t(13)}return await e(a),i}let a=0;for(let i=0;i<10;i++){let c=await l();a+=c,console.log(`autoBlocked run ${i+1} completed.`),console.log(`autoBlocked total  ${a} users.`)}})();
```

# The screenshot is as follows:
![Local Image](./images/edit_bookmark.png)
