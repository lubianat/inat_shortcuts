document.addEventListener('keydown', function(event) {
  // No modifier keys are pressed
  if (!event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
    switch(event.key.toUpperCase()) {
      case 'F': // Fusion
        document.querySelector('button.btn.btn-primary.navbar-btn:not([disabled]) span.glyphicon-resize-small')?.parentNode.click();
        break;
      case 'D': // Duplication
        document.querySelector('button.btn.btn-primary.navbar-btn:not([disabled]) i.fa-files-o')?.parentNode.click();
        break;
      case 'R': // Remove Observation
        document.querySelector('li[role="presentation"].disabled a[role="button"]')?.click();
        break;
      case 'C': // Toggle Captivity Checkbox
        const captivityCheckbox = document.querySelector('input[type="checkbox"][value="true"]');
        if (captivityCheckbox) {
          captivityCheckbox.checked = !captivityCheckbox.checked;
          // Trigger any change event associated with the checkbox
          const event = new Event('change', { bubbles: true });
          captivityCheckbox.dispatchEvent(event);
        }
        break;
    }
  }
});
