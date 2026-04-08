// Vercel Web Analytics initialization
// This script initializes Vercel Web Analytics for the site
(function() {
  // Initialize the analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Add error handler
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Failed to load. Ensure Web Analytics is enabled in your Vercel project settings.');
  };
  
  // Inject the script into the page
  if (document.head) {
    document.head.appendChild(script);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
