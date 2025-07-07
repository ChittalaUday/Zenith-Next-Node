# Guide System Documentation

## Overview

The Guide System is a comprehensive content management system for creating, editing, and displaying structured guides. It features a block-based editor that allows users to create rich, formatted content with various content types.

## Features

### 🎯 Core Features
- **Block-based Editor**: Create content using different block types
- **Real-time Preview**: See changes as you type
- **Rich Content Types**: Support for headings, paragraphs, lists, tables, and links
- **Drag & Drop**: Reorder blocks easily
- **Auto-save**: Automatic saving of content
- **Toast Notifications**: User-friendly feedback

### 📝 Content Block Types
1. **Headings** (H1, H2, H3): For titles and section headers
2. **Paragraphs**: For body text and descriptions
3. **Lists**: Bulleted lists for step-by-step instructions
4. **Tables**: Structured data presentation
5. **Links**: External and internal links

### 🎨 UI Components
- **Editor Canvas**: Main editing interface
- **Guide Viewer**: Display guides in a readable format
- **Toast System**: User notifications
- **Search & Filter**: Find guides quickly

## File Structure

```
zenith-next-js/
├── src/
│   ├── app/
│   │   ├── dashboard/content/guides/
│   │   │   ├── page.tsx                    # Guides listing page
│   │   │   ├── editor-canvas.tsx           # Main editor component
│   │   │   └── [id]/
│   │   │       └── edit.tsx                # Edit page for individual guides
│   │   └── api/guides/
│   │       ├── route.ts                    # Main API endpoint
│   │       └── [id]/route.ts               # Individual guide API
│   ├── components/
│   │   ├── ui/
│   │   │   └── toast.tsx                   # Toast notification component
│   │   └── guide-viewer.tsx                # Guide display component
│   ├── hooks/
│   │   └── use-toast.ts                    # Toast hook
│   └── lib/
│       └── guides-service.ts               # API service layer
```

## Usage

### Creating a New Guide

1. Navigate to `/dashboard/content/guides`
2. Click "Add Guide" button
3. You'll be redirected to `/dashboard/content/guides/new/edit`
4. Use the editor to add content blocks
5. Click "Save" to create the guide

### Editing an Existing Guide

1. Navigate to `/dashboard/content/guides`
2. Click the edit icon next to any guide
3. Make your changes in the editor
4. Click "Save" to update the guide

### Adding Content Blocks

1. Click "Add block" dropdown
2. Select the type of block you want to add:
   - **Heading 1**: Main title
   - **Heading 2**: Section header
   - **Heading 3**: Subsection header
   - **Paragraph**: Body text
   - **List**: Bulleted list
   - **Table**: Data table
   - **Link**: External link

### Managing Blocks

- **Move Blocks**: Use the up/down arrows to reorder blocks
- **Delete Blocks**: Click the trash icon to remove blocks
- **Add Between Blocks**: Click the plus icon on any block to insert a new block after it

## API Endpoints

### GET /api/guides
Returns all guides

### POST /api/guides
Creates a new guide
```json
{
  "title": "Guide Title",
  "blocks": [...],
  "author": "Author Name"
}
```

### GET /api/guides/[id]
Returns a specific guide

### PUT /api/guides/[id]
Updates a specific guide

### DELETE /api/guides/[id]
Deletes a specific guide

## Data Structure

### Guide Object
```typescript
interface Guide {
  id?: number;
  title: string;
  blocks: Block[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
}
```

### Block Types
```typescript
type Block =
  | { id: string; type: "heading1"; content: string }
  | { id: string; type: "heading2"; content: string }
  | { id: string; type: "heading3"; content: string }
  | { id: string; type: "paragraph"; content: string }
  | { id: string; type: "list"; items: string[] }
  | { id: string; type: "table"; rows: string[][] }
  | { id: string; type: "link"; label: string; url: string };
```

## Components

### GuideEditorCanvas
The main editing component that provides:
- Block-based content editing
- Real-time preview
- Drag and drop reordering
- Auto-save functionality
- Toast notifications

### GuideViewer
Displays guides in a readable format with:
- Proper typography
- Responsive design
- Clean layout
- Metadata display

### Toast System
Provides user feedback with:
- Success notifications
- Error messages
- Auto-dismiss functionality
- Multiple variants (default, destructive, success)

## Styling

The system uses Tailwind CSS for styling with:
- Responsive design
- Dark/light mode support
- Consistent spacing
- Accessible color contrast
- Modern UI components

## Future Enhancements

### Planned Features
- [ ] Rich text editing within blocks
- [ ] Image support
- [ ] Code blocks with syntax highlighting
- [ ] Version history
- [ ] Collaborative editing
- [ ] Export to PDF/Markdown
- [ ] Template system
- [ ] Advanced search and filtering

### Technical Improvements
- [ ] Database integration (currently using localStorage)
- [ ] Real-time collaboration
- [ ] Advanced validation
- [ ] Performance optimizations
- [ ] Unit and integration tests

## Troubleshooting

### Common Issues

1. **Guide not saving**: Check if you have at least one block added
2. **Navigation issues**: Ensure you're using the correct URL structure
3. **Toast not showing**: Check browser console for errors
4. **Blocks not updating**: Refresh the page and try again

### Debug Mode

To enable debug mode, add `?debug=true` to any guide URL to see additional information.

## Contributing

When contributing to the guide system:

1. Follow the existing code structure
2. Add proper TypeScript types
3. Include error handling
4. Test thoroughly
5. Update documentation

## Support

For issues or questions about the guide system, please:
1. Check this documentation
2. Review the code comments
3. Test with different browsers
4. Check the browser console for errors 