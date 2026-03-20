document.getElementById("export").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      // 1. Content Clone karna
      const main = document.querySelector("main") || document.querySelector('[role="main"]');
      if (!main) return;
      const clone = main.cloneNode(true);
      clone.querySelectorAll("nav, aside, footer, header, form, textarea, button, svg").forEach(el => el.remove());

      // 2. New Window
      const newWin = window.open("", "_blank");
      // popup.js ke andar newWin.document.write wale hisse mein ye replace karein

newWin.document.write(`
  <!doctype html>
  <html>
  <head>
    <title>😇Happy Prince😇</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; background: #f0f2f5; color: #333; }
      .content-wrapper { max-width: 900px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; }
      
      /* Black Box & Table Fix (Jo aapne pehle karwaya tha) */
      pre { 
        background: #000 !important; 
        color: #fff !important; 
        white-space: pre-wrap !important; 
        word-wrap: break-word !important;
        overflow: visible !important; 
        padding: 15px; 
        border-radius: 8px; 
      }
      table { width: 100% !important; border-collapse: collapse; font-size: 11px; margin: 15px 0; }
      td, th { border: 1px solid #ddd; padding: 8px; word-break: break-all; }

      /* --- ORIGINAL CAPSULE POPUP UI (Pehele Jesha) --- */
      #print-ui {
        position: fixed; 
        top: 20px; 
        left: 50%; 
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95); /* Glassy white */
        padding: 15px 30px; 
        border-radius: 50px; 
        box-shadow: 0 10px 25px rgba(0,0,0,0.2); 
        z-index: 10000;
        display: flex; 
        align-items: center; 
        gap: 15px; 
        border: 1px solid #ddd;
      }
      
      .btn { 
        padding: 10px 20px; 
        border-radius: 20px; 
        cursor: pointer; 
        border: none; 
        font-weight: bold; 
        font-size: 14px; 
      }
      
      .btn-print { background: #007bff; color: white; }
      .btn-close { background: #ff4d4d; color: white; }
      
      @media print {
        #print-ui { display: none !important; }
        body { background: white !important; padding: 0 !important; }
        .content-wrapper { box-shadow: none !important; width: 100% !important; padding: 0 !important; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
      }
    </style>
  </head>
  <body>
    <div id="print-ui">
      <span style="color: #333; font-size: 14px; font-weight: bold;">PDF Is Ready!</span>
      <button id="pBtn" class="btn btn-print">Print PDF</button>
      <button id="cBtn" class="btn btn-close">Close</button>
    </div>
    <div class="content-wrapper">
      ${clone.innerHTML}
    </div>
  </body>
  </html>
`);

newWin.document.close();

// Buttons ke click event pehle ki tarah
newWin.onload = function() {
  const printBtn = newWin.document.getElementById('pBtn');
  const closeBtn = newWin.document.getElementById('cBtn');

  if(printBtn) {
    printBtn.onclick = () => { newWin.print(); };
  }
  if(closeBtn) {
    closeBtn.onclick = () => { 
      newWin.document.getElementById('print-ui').remove(); 
    };
  }
};
    }
  });
});