import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../redux/UserSlice";
import { useState } from "react";
import { validateName, validateEmail, validatePhone, validateAddress } from "../utils/Validations";

// User Data Form Component
const UserDataForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserData({ [name]: value }));
  };

  const handleSave = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validate each field
    if (!validateName(userData.name)) {
      newErrors.name = userData.name.trim() === "" ? "Name is required." : "Please enter a valid name (only alphabets and spaces).";
      formIsValid = false;
    }

    if (!validateEmail(userData.email)) {
      newErrors.email = userData.email.trim() === "" ? "Email is required." : "Please enter a valid email address.";
      formIsValid = false;
    }

    if (!validatePhone(userData.phone)) {
      newErrors.phone = userData.phone.trim() === "" ? "Phone number is required." : "Please enter a valid phone number (10 digits).";
      formIsValid = false;
    }

    if (!validateAddress(userData.address)) {
      newErrors.address = userData.address.trim() === "" ? "Address is required." : "Please enter a valid address.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      alert('User Data Saved Successfully!');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800">User Data Form</h2>
      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Address:</label>
          <input 
            type="text" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
            placeholder="Enter your address"
          />
          {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Phone:</label>
          <input 
            type="text" 
            name="phone" 
            value={userData.phone} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <div className="flex justify-center mt-6">
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataForm;
