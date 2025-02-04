export const validateName = (name) => {
    if (!name.trim()) return false; // Check for empty name
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only alphabets and spaces
    return nameRegex.test(name);
  };
  
  export const validateEmail = (email) => {
    if (!email.trim()) return false; // Check for empty email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format
    return emailRegex.test(email);
  };
  
  export const validatePhone = (phone) => {
    if (!phone.trim()) return false; // Check for empty phone
    const phoneRegex = /^[0-9]{10}$/; // Ensures the phone number is exactly 10 digits
    return phoneRegex.test(phone);
  };
  
  export const validateAddress = (address) => {
    if (!address.trim()) return false; // Check for empty address
    // Address can contain alphanumeric characters and spaces, with an optional comma and periods
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    return addressRegex.test(address);
  };
  