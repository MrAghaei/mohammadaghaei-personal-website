"use client";
import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const BlogEditor = () => {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-slate focus:outline-none max-w-none min-h-[200px] p-4",
      },
    },
  });

  const handleSubmit = async () => {
    if (!editor) return;

    const postData = {
      title,
      content: editor.getHTML(),
      createdAt: new Date().toISOString(),
    };

    // Here you would typically send postData to your backend
    console.log("Post data:", postData);
  };

  if (!editor) return null;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Create New Blog Post</h2>
      </div>

      <div className="p-6 space-y-4">
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 text-lg font-bold border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="border rounded-lg">
          <div className="border-b p-2 flex gap-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded hover:bg-gray-100 ${
                editor.isActive("bold") ? "bg-gray-200" : ""
              }`}
              title="Bold"
            >
              <strong>B</strong>
            </button>

            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded hover:bg-gray-100 ${
                editor.isActive("italic") ? "bg-gray-200" : ""
              }`}
              title="Italic"
            >
              <em>I</em>
            </button>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded hover:bg-gray-100 ${
                editor.isActive("bulletList") ? "bg-gray-200" : ""
              }`}
              title="Bullet List"
            >
              •
            </button>

            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 rounded hover:bg-gray-100 ${
                editor.isActive("orderedList") ? "bg-gray-200" : ""
              }`}
              title="Numbered List"
            >
              1.
            </button>

            <button
              onClick={() => editor.chain().focus().undo().run()}
              className="p-2 rounded hover:bg-gray-100"
              title="Undo"
            >
              ↩
            </button>

            <button
              onClick={() => editor.chain().focus().redo().run()}
              className="p-2 rounded hover:bg-gray-100"
              title="Redo"
            >
              ↪
            </button>
          </div>

          <EditorContent editor={editor} />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
