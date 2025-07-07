"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Pencil, Trash2, Plus, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Blog {
  id: number;
  title: string;
  summary?: string;
  content?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
}

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: 'How to Start a Business in India',
    summary: 'A step-by-step guide for entrepreneurs.',
    content: 'This blog covers the basics of starting a business in India...',
    author: 'Admin',
    publishedAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-10T09:00:00Z',
  },
  {
    id: 2,
    title: 'GST Registration Explained',
    summary: 'Everything you need to know about GST registration.',
    content: 'GST registration is mandatory for businesses above a certain threshold...',
    author: 'Expert',
    publishedAt: '2024-01-12T11:30:00Z',
    updatedAt: '2024-01-12T11:30:00Z',
  },
];

const EditorBlock = dynamic(() => import("@/components/EditorBlock"), { ssr: false });

export default function BlogsPage() {
  const [blogs, setBlogs] = React.useState<Blog[]>(initialBlogs);
  const [open, setOpen] = React.useState(false);
  const [editBlog, setEditBlog] = React.useState<Blog | null>(null);
  const [form, setForm] = React.useState<Partial<Blog>>({});
  const [activeTab, setActiveTab] = React.useState("basic");

  const handleOpen = (blog?: Blog) => {
    setEditBlog(blog || null);
    setForm(blog ? { ...blog } : {});
    setActiveTab("basic");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditBlog(null);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editBlog) {
      setBlogs(blogs.map((b) => (b.id === editBlog.id ? { ...editBlog, ...form, updatedAt: new Date().toISOString() } : b)));
    } else {
      setBlogs([
        ...blogs,
        {
          id: blogs.length ? Math.max(...blogs.map((b) => b.id)) + 1 : 1,
          title: form.title || "Untitled",
          summary: form.summary,
          content: form.content,
          author: form.author,
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">Manage your website blogs</p>
        </div>
        <Button onClick={() => handleOpen()} size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> Add Blog
        </Button>
      </div>
      {/* Blog Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Badge className="bg-green-100 text-green-800">Published</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Authors</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">Authors</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Blogs Library</CardTitle>
          <CardDescription>Manage all your website blogs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search blogs..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Summary</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Published At</TableHead>
                  <TableHead>Updated At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell>{blog.id}</TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{blog.summary}</TableCell>
                    <TableCell>{blog.author}</TableCell>
                    <TableCell>{blog.publishedAt}</TableCell>
                    <TableCell>{blog.updatedAt}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpen(blog)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(blog.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editBlog ? "Edit Blog" : "Add Blog"}</DialogTitle>
          </DialogHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-2">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <div className="space-y-4">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={form.title || ""}
                  onChange={handleChange}
                />
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  placeholder="Summary"
                  value={form.summary || ""}
                  onChange={handleChange}
                  rows={2}
                />
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  name="author"
                  placeholder="Author"
                  value={form.author || ""}
                  onChange={handleChange}
                />
              </div>
            </TabsContent>
            <TabsContent value="content">
              <Label htmlFor="content">Content</Label>
              <div className="border rounded-md p-2 bg-muted">
                <EditorBlock
                  holder="blog-editor"
                  initialData={(() => {
                    if (!form.content) return undefined;
                    if (typeof form.content === 'object') return form.content;
                    if (typeof form.content === 'string') {
                      const str = form.content.trim();
                      if (str.startsWith('{')) {
                        try {
                          return JSON.parse(str);
                        } catch {
                          // fallback below
                        }
                      }
                      // treat as plain text
                      return { blocks: [{ type: 'paragraph', data: { text: str } }] };
                    }
                    return undefined;
                  })()}
                  onChange={data => setForm(f => ({ ...f, content: JSON.stringify(data) }))}
                />
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <div className="border rounded-md p-4 bg-muted min-h-[120px]">
                {(() => {
                  let data;
                  if (!form.content) return <span className="text-muted-foreground">No content</span>;
                  if (typeof form.content === 'object') data = form.content;
                  else if (typeof form.content === 'string') {
                    const str = form.content.trim();
                    if (str.startsWith('{')) {
                      try {
                        data = JSON.parse(str);
                      } catch {
                        data = { blocks: [{ type: 'paragraph', data: { text: str } }] };
                      }
                    } else {
                      data = { blocks: [{ type: 'paragraph', data: { text: str } }] };
                    }
                  }
                  if (!data || !data.blocks) return <span className="text-muted-foreground">No content</span>;
                  return (
                    <div>
                      {data.blocks.map((block: any, idx: number) => {
                        if (block.type === 'header') return <h2 key={idx} className="font-bold text-lg mb-2">{block.data.text}</h2>;
                        if (block.type === 'paragraph') return <p key={idx} className="mb-2">{block.data.text}</p>;
                        return <div key={idx} className="mb-2 text-muted-foreground">[{block.type}]</div>;
                      })}
                    </div>
                  );
                })()}
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{editBlog ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 