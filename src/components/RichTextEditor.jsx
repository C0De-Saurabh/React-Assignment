import Tiptap from './TipTap';

const RichTextEditor = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 rounded-xl shadow-2xl mt-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Rich Text Editor
      </h2>
      <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
        <Tiptap />
      </div>
    </div>
  );
};

export default RichTextEditor;
