"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Post {
  id: number;
  title: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: "About Us",
    content: "Learn more about our company and mission.",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Our Mission",
    content: "Discover what drives us to help businesses succeed.",
    createdAt: "2024-01-16T14:30:00Z",
    updatedAt: "2024-01-16T14:30:00Z"
  },
];

export default function PostsPage() {
  const [posts, setPosts] = React.useState<Post[]>(initialPosts);
  const [open, setOpen] = React.useState(false);
  const [editPost, setEditPost] = React.useState<Post | null>(null);
  const [form, setForm] = React.useState<Partial<Post>>({});

  const handleOpen = (post?: Post) => {
    setEditPost(post || null);
    setForm(post ? { ...post } : {});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditPost(null);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editPost) {
      setPosts(posts.map((p) => (p.id === editPost.id ? { ...editPost, ...form, updatedAt: new Date().toISOString() } : p)));
    } else {
      setPosts([
        ...posts,
        {
          id: posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
          title: form.title || "Untitled",
          content: form.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
          <p className="text-muted-foreground">Manage your website posts</p>
        </div>
        <Button onClick={() => handleOpen()} size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> Add Post
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Posts Library</CardTitle>
          <CardDescription>Manage all your website posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Updated At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{post.content}</TableCell>
                    <TableCell>{post.createdAt}</TableCell>
                    <TableCell>{post.updatedAt}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpen(post)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(post.id)}>
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
            <DialogTitle>{editPost ? "Edit Post" : "Add Post"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Title"
              value={form.title || ""}
              onChange={handleChange}
            />
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Content"
              value={form.content || ""}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{editPost ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 