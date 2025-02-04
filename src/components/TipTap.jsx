import React from "react";
import { useSelector } from "react-redux";
import { EditorProvider, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

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
    extensions: [StarterKit],
    content,
  });

  // Toolbar component to appear above the editor
  const MyEditorToolbar = () => (
    <div className="toolbar">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
      <button onClick={() => editor.chain().focus().toggleUnderline?.().run()}>Underline</button>
    </div>
  );

  // Footer component to appear below the editor
  const MyEditorFooter = () => (
    <div className="footer">
      <p>Editor Footer: Customize as needed</p>
    </div>
  );

  return (
    <EditorProvider
      editor={editor}
      extensions={[StarterKit]}
      content={content}
      slotBefore={<MyEditorToolbar />} // Render toolbar above the editor
      slotAfter={<MyEditorFooter />}   // Render footer below the editor
      editorContainerProps={{ className: "editor-container", id: "editor-main-container" }} // Add custom props to container
    >
      <EditorContent editor={editor} />
    </EditorProvider>
  );
};

export default Tiptap;
