import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../redux/UserSlice";
import { useState } from "react";
import { validateName, validateEmail, validatePhone, validateAddress } from "../utils/Validations";
import { Person, Email, Phone, Home, Save } from "@mui/icons-material";

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
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Person className="text-gray-500 ml-3" />
            <input 
              type="text" 
              name="name" 
              value={userData.name} 
              onChange={handleChange} 
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-2" 
              placeholder="Enter your name"
            />
          </div>
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Address:</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Home className="text-gray-500 ml-3" />
            <input 
              type="text" 
              name="address" 
              value={userData.address} 
              onChange={handleChange} 
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-2" 
              placeholder="Enter your address"
            />
          </div>
          {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Email:</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Email className="text-gray-500 ml-3" />
            <input 
              type="email" 
              name="email" 
              value={userData.email} 
              onChange={handleChange} 
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-2" 
              placeholder="Enter your email"
            />
          </div>
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Phone:</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Phone className="text-gray-500 ml-3" />
            <input 
              type="text" 
              name="phone" 
              value={userData.phone} 
              onChange={handleChange} 
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pl-2" 
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <div className="flex justify-center mt-6">
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105"
            onClick={handleSave}
          >
            <Save className="mr-2" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataForm;
