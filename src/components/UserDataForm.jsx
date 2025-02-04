const { useState } = require("react");

const UserDataForm = () => {
    const [formData, setFormData] = useState({
      id: Date.now(),
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSave = () => {
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('User Data Saved Successfully!');
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
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
            />
          </div>
          <div>
            <label className="block font-medium">Address:</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
            />
          </div>
          <div>
            <label className="block font-medium">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded" 
            />
          </div>
          <div>
            <label className="block font-medium">Phone:</label>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
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