import React from 'react';
import { Guide, Block } from '@/app/dashboard/content/guides/editor-canvas';

interface GuideViewerProps {
  guide: Guide;
}

export function GuideViewer({ guide }: GuideViewerProps) {
  const renderBlock = (block: Block) => {
    switch (block.type) {
      case "heading1":
        return (
          <h1 key={block.id} className="text-3xl font-bold mb-4 mt-8 first:mt-0">
            {block.content}
          </h1>
        );
      case "heading2":
        return (
          <h2 key={block.id} className="text-2xl font-semibold mb-3 mt-6">
            {block.content}
          </h2>
        );
      case "heading3":
        return (
          <h3 key={block.id} className="text-xl font-medium mb-2 mt-4">
            {block.content}
          </h3>
        );
      case "paragraph":
        return (
          <p key={block.id} className="mb-4 text-gray-700 leading-relaxed">
            {block.content}
          </p>
        );
      case "list":
        return (
          <ul key={block.id} className="mb-4 list-disc list-inside space-y-1">
            {block.items.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={block.id} className="mb-4 overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-300 px-3 py-2 text-sm">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "link":
        return (
          <div key={block.id} className="mb-4">
            <a 
              href={block.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {block.label || block.url}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {guide.title}
          </h1>
          {guide.author && (
            <p className="text-gray-600">By {guide.author}</p>
          )}
          {guide.publishedAt && (
            <p className="text-sm text-gray-500">
              Published on {new Date(guide.publishedAt).toLocaleDateString()}
            </p>
          )}
        </div>
        
        <div className="prose prose-lg max-w-none">
          {guide.blocks.map(renderBlock)}
        </div>
        
        {guide.updatedAt && (
          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date(guide.updatedAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 