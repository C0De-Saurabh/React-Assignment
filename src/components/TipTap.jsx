import React, { useRef } from "react";
import { useSelector } from "react-redux";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline"; // Import the Underline extension
import {
  RichTextEditor,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  MenuButtonStrikethrough,
} from "mui-tiptap";

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

  const rteRef = useRef(null);

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 rounded-2xl shadow-xl">
      {/* Rich Text Editor */}
      <RichTextEditor
        ref={rteRef}
        extensions={[StarterKit, Underline]} // Add the Underline extension here
        content={content} // Initial content for the editor
        renderControls={() => (
          <MenuControlsContainer className="flex justify-start gap-8 p-5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 rounded-t-2xl shadow-lg">
            <MenuSelectHeading className="text-lg" />
            <MenuDivider />
            <MenuButtonBold className="hover:bg-indigo-100 p-3 rounded-lg text-xl transition-all duration-200" />
            <MenuButtonItalic className="hover:bg-indigo-100 p-3 rounded-lg text-xl transition-all duration-200" />
            <MenuButtonUnderline className="hover:bg-indigo-100 p-3 rounded-lg text-xl transition-all duration-200" />
            <MenuButtonStrikethrough className="hover:bg-indigo-100 p-3 rounded-lg text-xl transition-all duration-200" />
          </MenuControlsContainer>
        )}
        style={{
          fontSize: "18px", // Make the default font size bigger
          lineHeight: "1.6", // Increase line height for better readability
        }}
      />
    </div>
  );
};

export default Tiptap;
