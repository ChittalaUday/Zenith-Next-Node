"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

interface EditorBlockProps {
  holder: string;
  onChange?: (data: any) => void;
  initialData?: any;
  tools?: any;
}

const EditorBlock: React.FC<EditorBlockProps> = ({ holder, onChange, initialData, tools }) => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder,
        data: initialData || undefined,
        tools,
        autofocus: true,
        onChange: async () => {
          if (onChange && editorRef.current) {
            const data = await editorRef.current.save();
            onChange(data);
          }
        },
      });
    }
    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === "function") {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={holder} className="min-h-[300px] editorjs-container" />;
};

export default EditorBlock; 