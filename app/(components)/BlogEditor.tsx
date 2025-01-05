"use client";
import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { supabase } from "@/app/(lib)/supabase";

// Define the proper type for heading levels
type Level = 1 | 2 | 3 | 4 | 5 | 6;

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

  if (!editor) return null;

  const headingLevels: Level[] = [1, 2, 3];

  const isHeadingActive = (level: Level) => {
    return editor.isActive("heading", { level });
  };

  const handleSubmit = async () => {
    const postData = {
      title,
      content: editor.getHTML(),
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([postData]);

      if (error) {
        console.error("Error saving blog post:", error);
        alert("Failed to save blog post. Please try again.");
      } else {
        console.log("Blog post saved successfully:", data);
        alert("Blog post saved successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

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
          <div className="border-b p-2 flex flex-wrap gap-2">
            {/* Heading Controls */}
            <div className="flex gap-2 border-r pr-2">
              {headingLevels.map((level) => (
                <button
                  key={level}
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level }).run()
                  }
                  className={`px-3 py-1 rounded text-sm font-semibold ${
                    isHeadingActive(level)
                      ? "bg-gray-200 text-gray-800"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                  title={`Heading ${level}`}
                >
                  H{level}
                </button>
              ))}
              <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`px-3 py-1 rounded text-sm font-semibold ${
                  editor.isActive("paragraph")
                    ? "bg-gray-200 text-gray-800"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
                title="Paragraph"
              >
                P
              </button>
            </div>

            {/* Text Formatting Controls */}
            <div className="flex gap-2 border-r pr-2">
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
            </div>

            {/* List Controls */}
            <div className="flex gap-2 border-r pr-2">
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
            </div>

            {/* History Controls */}
            <div className="flex gap-2">
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
          </div>

          {/* Editor Content */}
          <style>
            {`
              .ProseMirror h1 {
                font-size: 2em;
                font-weight: bold;
                margin-top: 0.67em;
                margin-bottom: 0.67em;
              }
              .ProseMirror h2 {
                font-size: 1.5em;
                font-weight: bold;
                margin-top: 0.83em;
                margin-bottom: 0.83em;
              }
              .ProseMirror h3 {
                font-size: 1.17em;
                font-weight: bold;
                margin-top: 1em;
                margin-bottom: 1em;
              }
              .ProseMirror p {
                margin-top: 1em;
                margin-bottom: 1em;
              }
              .ProseMirror ul {
                list-style-type: disc;
                padding-left: 1.5em;
              }
              .ProseMirror ol {
                list-style-type: decimal;
                padding-left: 1.5em;
              }
            `}
          </style>
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
