import React from "react";
import { useSelector } from "react-redux";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";

const Tiptap = () => {
  const userData = useSelector((state) => state.userData);

  const content = `
    <p>
      ID: ${userData?.id || "N/A"}<br />
      Name: ${userData?.name || "N/A"}<br />
      Address: ${userData?.address || "N/A"}<br />
      Email: ${userData?.email || "N/A"}<br />
      Phone: ${userData?.phone || "N/A"}
    </p>
  `;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      FontFamily.configure({
        types: ["textStyle"],
      }),
    ],
    content,
  });

  const MyEditorToolbar = () => {
    const fonts = [
      { label: "Default", value: "" },
      { label: "Arial", value: "Arial" },
      { label: "Georgia", value: "Georgia" },
      { label: "Courier New", value: "Courier New" },
      { label: "Times New Roman", value: "Times New Roman" },
      { label: "Verdana", value: "Verdana" },
    ];

    return (
      <div className="flex flex-wrap gap-4 mb-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
        >
          Bold
        </button>

        <select
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
          onChange={(e) => {
            const font = e.target.value;
            editor.chain().focus().setFontFamily(font).run();
          }}
        >
          {fonts.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
        >
          Italic
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
        >
          Underline
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
        >
          Strikethrough
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().unsetAllMarks().run();
          }}
        >
          Clear Formatting
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <MyEditorToolbar />
      <div className="border-2 border-gray-200 rounded-lg shadow-lg p-6 bg-gray-50">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
