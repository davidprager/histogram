/*
 * File: JSFileChooser.js
 * ----------------------
 * This file defines the JSFileChooser class, which simplifies the
 * process of selecting a file from within the browser.
 */

function JSFileChooser() {
   throw new Error("JSFileChooser cannot be instantiated");
}

/*
 * Method: chooseTextFile
 * Usage: JSFileChooser.chooseTextFile(fileCallback);
 *        JSFileChooser.chooseTextFile(fileCallback, cancelCallback);
 * ------------------------------------------------------------------
 * Creates a file chooser and allows the user to select a file, at which
 * point JavaScript starts to read the contents of the file as text.
 * When the read operation is complete, JavaScript calls the fileCallback
 * function passing in the complete text of the file as a single string.
 * Clicking Cancel in the file dialog ordinarily has no effect, but the
 * caller can trigger an action in this case by supplying a function as
 * the cancelCallback parameter.
 */

JSFileChooser.chooseTextFile = function(fileCallback, cancelCallback) {
   JSFileChooser._chooseFile("readAsText", fileCallback, cancelCallback);
};

/*
 * Method: chooseDataFile
 * Usage: JSFileChooser.chooseDataFile(fileCallback);
 *        JSFileChooser.chooseDataFile(fileCallback, cancelCallback);
 * ------------------------------------------------------------------
 * Creates a file chooser and allows the user to select a file, at which
 * point JavaScript starts to read the contents of the file as data.
 * When the read operation is complete, JavaScript calls the fileCallback
 * function passing in the contents of the file as a data URL.  Clicking
 * Cancel in the file dialog ordinarily has no effect, but the caller
 * can trigger an action in this case by supplying a function as the
 * cancelCallback parameter.
 */

JSFileChooser.chooseDataFile = function(fileCallback, cancelCallback) {
   JSFileChooser._chooseFile("readAsDataURL", fileCallback, cancelCallback);
};

/* Common code for chooseTextFile and chooseDataFile */

JSFileChooser._chooseFile = function(fn, fileCallback, cancelCallback) {

   const DIALOG_WIDTH = 120;
   const DIALOG_HEIGHT = 120;
   const CANCEL_TIMEOUT = 200;

   function cancelIfNoSelection() {
      if (dialog !== null) {
         document.body.removeChild(dialog);
         dialog = null;
         if (cancelCallback !== undefined) cancelCallback();
      }
   }

   function changeAction() {
      let files = chooser.files;
      document.body.removeChild(dialog);
      dialog = null;
      if (files.length > 0) {
         let rd = new FileReader();
         rd.onload = function() { fileCallback(rd.result); };
         rd[fn](files[0]);
      }
   }

   function focusAction() {
      setTimeout(cancelIfNoSelection, CANCEL_TIMEOUT);
   }

   function clickAction() {
      dialog.addEventListener("focus", focusAction, false);
      chooser.click();
   }

   function splitLines(text) {
      let lines = text.split("\n");
      if (lines.length > 0 && lines[lines.length - 1] === "") {
         lines.pop();
      }
      return lines;
   }

   let chooser = document.createElement("input");
   chooser.type = "file";
   chooser.addEventListener("change", changeAction, false);
   let windowWidth = window.innerWidth ||
                     document.documentElement.clientWidth ||
                     document.body.clientWidth;
   let windowHeight = window.innerHeight ||
                      document.documentElement.clientHeight ||
                      document.body.clientHeight;
   let dialog = document.createElement("button");
   dialog.style = "width:" + DIALOG_WIDTH + "px; " +
                  "height:" + DIALOG_HEIGHT + "px; " +
                  "position:absolute; " +
                  "left:" + ((windowWidth - DIALOG_WIDTH) / 2) + "px; " +
                  "top:" + ((windowHeight - DIALOG_HEIGHT) / 2) + "px; ";
   dialog.innerHTML = "Choose File";
   dialog.addEventListener("click", clickAction, false);
   document.body.appendChild(dialog);
};
