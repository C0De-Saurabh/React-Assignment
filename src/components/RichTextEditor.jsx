const { useSelector } = require("react-redux");



const RichTextEditor = () => {
  const userData = useSelector((state) => state.userData);

  const displayData = `
    Name: ${userData.name}
    Address: ${userData.address}
    Email: ${userData.email}
    Phone: ${userData.phone}
  `;

  return (
    <div className="p-5 border border-gray-300 rounded-lg mt-5">
      <h2 className="text-xl font-semibold">Rich Text Editor</h2>
      <textarea 
        rows="10" 
        className="w-full p-2 border rounded" 
        value={displayData}
        readOnly
      ></textarea>
    </div>
  );
};


export default RichTextEditor;