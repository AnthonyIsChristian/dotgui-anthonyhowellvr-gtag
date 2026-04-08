// Vercel Speed Insights
import { injectSpeedInsights } from 'https://esm.sh/@vercel/speed-insights@2.0.0';

// Inject Speed Insights when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights();
  });
} else {
  injectSpeedInsights();
}
