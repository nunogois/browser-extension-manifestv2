var rxLookfor = /^https?:\/\/www\.nunogois\.com/ // mad regex skills - use regex101 or similar to get your own

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (rxLookfor.test(changeInfo.url)) {
    chrome.tabs.sendMessage(tabId, 'page-rendered') // when the URL matches on SPA navigation, send this message to content-script
  }
})