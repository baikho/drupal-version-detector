
const version = detectDrupalVersion();
if (version) {
  chrome.runtime.sendMessage({ type: 'DRUPAL_VERSION_FOUND', version });
  window.detectDrupalVersion = () => version;
} else {
  window.detectDrupalVersion = () => null;
}

function detectDrupalVersion() {
  const domVersionEl = document.querySelector('.field--name-field-issue-version .field__item');
  if (domVersionEl) {
    const domText = domVersionEl.textContent.trim();
    const domMatch = domText.match(/^(\d+\.\d+(?:\.\d+)?)/);
    if (domMatch) return domMatch[1];
  }

  const meta = document.querySelector('meta[name="Generator"]');
  if (meta) {
    const content = meta.getAttribute('content');
    const metaMatch = content.match(/Drupal\s+(\d+(?:\.\d+)?)/);
    if (metaMatch) return metaMatch[1];
  }

  // Filtered ?v= version check
  const versionRegex = /[?&]v=(\d+\.\d+\.\d+)/;
  const assetTags = document.querySelectorAll('script[src], link[href]');
  const versions = new Set();

  for (const el of assetTags) {
    const src = el.getAttribute('src') || el.getAttribute('href');

    if (!src || !versionRegex.test(src)) continue;

    const url = new URL(src, window.location.origin);

    // Only accept local or Drupal-related paths
    const isLocal = url.origin === window.location.origin;
    const isDrupalish = url.pathname.includes('/core/') ||
                        url.pathname.includes('/modules/') ||
                        url.pathname.includes('/themes/') ||
                        url.pathname.includes('/libraries/');

    if (isLocal || isDrupalish) {
      const match = src.match(versionRegex);
      if (match) versions.add(match[1]);
    }
  }

  const sortedVersions = [...versions].sort((a, b) => {
    const va = a.split('.').map(Number);
    const vb = b.split('.').map(Number);
    return vb[0] - va[0] || vb[1] - va[1] || vb[2] - va[2];
  });

  return sortedVersions[0] || null;
}
