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
    <div className="p-5 border border-gray-300 rounded-lg mt-5">
      <h2 className="text-xl font-semibold">User Data Form</h2>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block font-medium">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div>
          <label className="block font-medium">Address:</label>
          <input 
            type="text" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
        </div>
        <div>
          <label className="block font-medium">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <label className="block font-medium">Phone:</label>
          <input 
            type="text" 
            name="phone" 
            value={userData.phone} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3" 
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserDataForm;
