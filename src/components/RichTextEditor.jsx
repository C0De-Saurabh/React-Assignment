import Tiptap from './TipTap';

const RichTextEditor = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Rich Text Editor</h2>
      <div className="border border-gray-300 rounded-lg p-4 shadow-sm">
        <Tiptap />
      </div>
    </div>
  );
};

export default RichTextEditor;
