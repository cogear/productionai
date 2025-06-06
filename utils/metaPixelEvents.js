// Meta Pixel Event Tracking Utilities

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Standard Events
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackViewContent = (contentName, contentCategory, value, currency = 'USD') => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
    value: value,
    currency: currency,
  });
};

export const trackAddToCart = (contentId, contentName, value, currency = 'USD') => {
  trackEvent('AddToCart', {
    content_id: contentId,
    content_name: contentName,
    value: value,
    currency: currency,
  });
};

export const trackInitiateCheckout = (value, currency = 'USD', numItems = 1) => {
  trackEvent('InitiateCheckout', {
    value: value,
    currency: currency,
    num_items: numItems,
  });
};

export const trackPurchase = (value, currency = 'USD', contentIds = []) => {
  trackEvent('Purchase', {
    value: value,
    currency: currency,
    content_ids: contentIds,
  });
};

export const trackLead = (value, currency = 'USD') => {
  trackEvent('Lead', {
    value: value,
    currency: currency,
  });
};

export const trackCompleteRegistration = (value, currency = 'USD', status = 'completed') => {
  trackEvent('CompleteRegistration', {
    value: value,
    currency: currency,
    status: status,
  });
};

// Custom Events for Production AI
export const trackDemoRequest = () => {
  trackEvent('Contact', {
    content_category: 'Demo Request',
  });
};

export const trackPricingView = (planName) => {
  trackEvent('ViewContent', {
    content_category: 'Pricing',
    content_name: planName,
  });
};

export const trackSignUpClick = (planName = 'default') => {
  trackEvent('InitiateCheckout', {
    content_category: 'Sign Up',
    content_name: planName,
  });
};

export const trackFeatureInteraction = (featureName) => {
  trackEvent('ViewContent', {
    content_category: 'Feature',
    content_name: featureName,
  });
};