chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentTab = tabs[0]; // There will be only one in this array
    if (currentTab.id) {
      chrome.tabs.reload(currentTab.id);
    }
  });