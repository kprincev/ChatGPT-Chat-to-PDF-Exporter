# ChatGPT-Chat-to-PDF-Exporter

ChatGPT to PDF Exporter (Chrome Extension)
A clean, powerful Chrome Extension designed to export your ChatGPT conversations into high-quality, professional PDF documents. Unlike standard printing, this extension fixes common layout issues such as cut-off tables and hidden code in scrollable black boxes.

✨ Key Features
Smart Auto-Scroll: Automatically scrolls through the entire conversation to ensure all dynamic content (like images and math symbols) is fully loaded before exporting.

Optimized Layout: Removes unnecessary UI elements like sidebars, footers, and input boxes to focus purely on the conversation.

Full Code Block Export: Fixes the "black box" issue. It removes sliders from code blocks (SQL, Architecture diagrams, Python, etc.) so that the entire code is visible in the printout.

Responsive Tables: Automatically adjusts large tables to fit within A4 page margins, preventing horizontal content cut-offs.

Interactive Control Panel: Opens a new tab with a sleek, floating "Print PDF" capsule that allows you to trigger the print window or cancel the action.

🚀 How to Install
Download/Clone this repository to your local machine.

Open Google Chrome and navigate to chrome://extensions/.

Enable "Developer mode" in the top-right corner.

Click "Load unpacked" and select the folder containing the project files.

Pin the extension for easy access!

📖 How to Use
Open any chat on ChatGPT.

Click the ChatGPT Exporter icon in your browser toolbar.

Click the "Export to PDF" button.

Wait for the extension to scroll through your chat.

A new tab will open. Click the large "Print PDF" button on the floating panel to save your file.

🛠️ Built With
JavaScript (ES6+): For DOM cloning, auto-scrolling logic, and event handling.

Manifest V3: Utilizing the latest Chrome Extension security and performance standards.

CSS3 Media Queries: Customized @media print styles for professional document formatting.

📂 File Structure
manifest.json: Configuration, permissions, and metadata.

popup.html: The user interface of the extension menu.

popup.js: The "brain" of the extension—handles scrolling, content cloning, and tab management.

⚠️ Troubleshooting
Pop-up Blocked: If the new tab doesn't open, look for a "Pop-up blocked" icon in your browser's address bar and select "Always allow pop-ups from https://www.google.com/search?q=chatgpt.com".

Background Graphics: For the best look (keeping code blocks black), ensure that "Background Graphics" is checked in your browser's Print Settings window.
