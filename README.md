# Browser Extension Manifest v2

A basic browser extension example, compatible with Chrome, Firefox, Opera, Edge and possibly other modern browsers.
Most of this is optional, you don't really need jQuery or a popup, adapt accordingly.

# Try installing on Chrome

1. Clone this repo;
2. Open Google Chrome and enter this URL: `chrome://extensions/`
3. Toggle **Developer Mode** on the top right corner;
4. Click on **Load Unpacked** and select the folder you've cloned on the first step;
5. After enabling the extension, try opening my website for some changes caused by the extension: https://www.nunogois.com

# Compiling to CRX

Use the equivalent of: `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --pack-extension=<chrome extension folder location>` where *<chrome extension folder location>* points to your extension folder.
