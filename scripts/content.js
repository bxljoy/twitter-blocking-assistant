javascript:(async () => {
    // delay a few sceonds to excute next line
    async function delay(seconds) {
        await new Promise(resolve => setTimeout(resolve, seconds * 100));
    }

    // Revised scrollDown function to ensure it waits properly
    async function scrollDown(num) {
        return new Promise(resolve => {
            window.scrollBy(0, num * 90);
            // Use setTimeout to delay the resolution of the promise
            setTimeout(() => {
                console.log('Finished scrolling, executing other code now.');
                resolve(); // Resolve the promise after the timeout
            }, 1000); // Adjust the timeout as needed for your scrolling duration
        });
    }

    async function autoBlocking() {
        // attain the list of twitter accounts
        const blockElements = document.querySelectorAll('div[data-testid="cellInnerDiv"] div[data-testid=UserCell]');
        let length = blockElements.length;
        console.log(length);

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
        setTimeout(() => {
            console.log('Finished blocking, executing other code now.');
        }, 2000 * length); 
        await scrollDown(length);
    }
    // Execute autoBlocking 3 times, waiting for each to complete before the next
    for (let i = 0; i < 3; i++) {
        await autoBlocking(); // Wait for autoBlocking to complete before starting next iteration
        console.log(`autoBlocking run ${i + 1} completed.`);
    }
})();