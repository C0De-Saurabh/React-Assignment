import { useSelector } from "react-redux";
import { EditorContent, useEditor } from "@tiptap/react";
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

  return (
    <div>
      {/* Editor content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
