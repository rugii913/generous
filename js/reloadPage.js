export function reloadPage() {
    return new Promise((resolve) => {
      window.addEventListener('beforeunload', () => {
        resolve();
      });
  
      window.location.reload();
    });
  }