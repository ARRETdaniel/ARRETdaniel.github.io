/**
 * Utility function to handle contact form submissions
 * This function will attempt to submit the form data to the API
 * If that fails, it will redirect the user to LinkedIn with a prefilled message
 */
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // In a production environment, we would submit this to an API endpoint
  // For now, we'll simulate a failure and redirect to LinkedIn
  try {
    // Simulate API call (this would be replaced with actual API call in production)
    const simulateApiCall = () => {
      return new Promise((_, reject) => {
        // Simulate API failure to demonstrate LinkedIn fallback
        setTimeout(() => reject(new Error('API not implemented')), 500);
      });
    };
    
    await simulateApiCall();
    
    // If API call succeeds, we would return success
    return { success: true };
  } catch (error) {
    // If API call fails, redirect to LinkedIn
    const messageContent = `Hello Daniel, my name is ${formData.name}.\n\nRegarding: ${formData.subject || 'General Inquiry'}\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageContent);
    
    // LinkedIn message URL
    const linkedInUrl = `https://www.linkedin.com/in/arretdaniel/message/?subject=${encodeURIComponent(formData.subject || 'Website Contact Form')}&body=${encodedMessage}`;
    
    // Open LinkedIn in a new tab
    window.open(linkedInUrl, '_blank');
    
    return { 
      success: false, 
      redirected: true,
      message: 'Form submission redirected to LinkedIn'
    };
  }
};
