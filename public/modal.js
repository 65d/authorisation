// const dialog = document.getElementById("dialog");
const mainContent = document.getElementById("main-content");
const openButton = document.getElementById("open-dialog");
const closeButton = document.getElementById("close-dialog");

// openButton.addEventListener("click", () => {
//   mainContent.setAttribute("inert", "");
//   dialog.showModal();
// });

// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

// dialog.addEventListener("close", () => {
//   mainContent.removeAttribute("inert");
// });

function createDialog() {
    // Create dialog element
    const dialog = document.createElement('dialog');
    dialog.id = 'dialog';
  
    // Create modal title
    const title = document.createElement('h2');
    title.textContent = 'Modal Title';
  
    // Create modal content div
    const contentDiv = document.createElement('div');
    contentDiv.textContent = 'All the modal content goes in here...';
  
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.id = 'close-dialog';
    closeButton.textContent = 'Close';
    closeButton.autofocus = true;
  
    // Append title, content, and button to dialog
    dialog.appendChild(title);
    dialog.appendChild(contentDiv);
    contentDiv.appendChild(closeButton);
  
    // Append the dialog to the body
    document.body.appendChild(dialog);
  
    // Add event listener to close the dialog
    closeButton.addEventListener('click', function() {
      dialog.close();
    });
  
    return dialog;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const dialog = createDialog(); // Ensure the dialog is created after the DOM is fully loaded
  });