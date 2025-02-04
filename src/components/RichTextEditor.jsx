import { useSelector } from 'react-redux';

const RichTextEditor = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <div className="p-5 border border-gray-300 rounded-lg mt-5">
      <h2 className="text-xl font-semibold">Rich Text Editor</h2>
      <div
        contentEditable
        suppressContentEditableWarning
        className="w-full p-2 border rounded bg-white"
      >
        {`Name: ${userData.name}\nAddress: ${userData.address}\nEmail: ${userData.email}\nPhone: ${userData.phone}`}
      </div>
    </div>
  );
};

export default RichTextEditor;
