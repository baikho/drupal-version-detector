
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'DRUPAL_VERSION_FOUND') {
    chrome.action.setTitle({
      tabId: sender.tab.id,
      title: `Drupal Version: ${message.version}`
    });
    chrome.action.setBadgeText({
      tabId: sender.tab.id,
      text: message.version.slice(0, 4)
    });
    chrome.action.setBadgeBackgroundColor({ color: '#000' });
  }
});
