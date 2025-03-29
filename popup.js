
window.onload = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        return window.detectDrupalVersion && window.detectDrupalVersion();
      }
    }, (results) => {
      const version = results?.[0]?.result;
      document.getElementById('version').textContent = version || 'Not detected';
    });
  });
};
