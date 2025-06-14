
// Utility functions for Tidio chat widget
export const openTidioChat = () => {
  // Check if Tidio is loaded
  if (window.tidioChatApi) {
    window.tidioChatApi.open();
  } else {
    // If Tidio isn't loaded yet, wait for it
    setTimeout(() => {
      if (window.tidioChatApi) {
        window.tidioChatApi.open();
      }
    }, 1000);
  }
};

// Declare Tidio types for TypeScript
declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      close: () => void;
      hide: () => void;
      show: () => void;
    };
  }
}
