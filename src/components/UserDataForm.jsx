import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../redux/UserSlice";
import { useEffect } from "react";

// User Data Form Component
const UserDataForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const originalData = useSelector((state) => state.originalData); // Assume you save initial state of form data

  const hasChanges = JSON.stringify(userData) !== JSON.stringify(originalData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserData({ [name]: value }));
  };

  const handleSave = () => {
    alert('User Data Saved Successfully!');
    // Optionally, you could save the data to the server here and reset the originalData
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasChanges) {
        const message = "You have unsaved changes, are you sure you want to leave?";
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };

    // Add event listener to the beforeunload event
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasChanges]);

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
