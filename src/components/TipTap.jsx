import React from "react";
import { useSelector } from "react-redux";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";

const Tiptap = () => {
  // Get user data from Redux store
  const userData = useSelector((state) => state.userData);

  // Prepare content using user data
  const content = `
    <p>
      ID: ${userData?.id || "N/A"}<br />
      Name: ${userData?.name || "N/A"}<br />
      Address: ${userData?.address || "N/A"}<br />
      Email: ${userData?.email || "N/A"}<br />
      Phone: ${userData?.phone || "N/A"}
    </p>
  `;

  // Initialize the editor
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

  // Toolbar component
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
      <div className="flex flex-wrap gap-2 mb-4 p-2 bg-gray-100 rounded shadow">
        {/* Bold Button */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
        >
          Bold
        </button>

        {/* Font Family Dropdown */}
        <select
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
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

        {/* Italic Button */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
        >
          Italic
        </button>

        {/* Underline Button */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
        >
          Underline
        </button>

        {/* Strikethrough Button */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          onMouseDown={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
        >
          Strikethrough
        </button>

        {/* Clear Formatting Button */}
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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
    <div className="editor-container">
      {/* Toolbar */}
      <MyEditorToolbar />

      {/* Editor Content */}
      <div className="border p-4 rounded shadow">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
