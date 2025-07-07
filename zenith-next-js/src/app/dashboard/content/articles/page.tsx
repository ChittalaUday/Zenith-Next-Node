"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Pencil, Trash2, Plus, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface Article {
  id: number;
  title: string;
  description?: string;
  body?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
}

const initialArticles: Article[] = [
  {
    id: 1,
    title: 'Understanding Company Compliance',
    description: 'A deep dive into company compliance requirements in India.',
    body: 'Compliance is a critical aspect of running a business...',
    author: 'Legal Team',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'Trademark Registration Process',
    description: 'Step-by-step process for trademark registration.',
    body: 'Registering a trademark protects your brand identity...',
    author: 'IP Specialist',
    publishedAt: '2024-01-18T14:30:00Z',
    updatedAt: '2024-01-18T14:30:00Z',
  },
];

export default function ArticlesPage() {
  const [articles, setArticles] = React.useState<Article[]>(initialArticles);
  const [open, setOpen] = React.useState(false);
  const [editArticle, setEditArticle] = React.useState<Article | null>(null);
  const [form, setForm] = React.useState<Partial<Article>>({});

  const handleOpen = (article?: Article) => {
    setEditArticle(article || null);
    setForm(article ? { ...article } : {});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditArticle(null);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editArticle) {
      setArticles(articles.map((a) => (a.id === editArticle.id ? { ...editArticle, ...form, updatedAt: new Date().toISOString() } : a)));
    } else {
      setArticles([
        ...articles,
        {
          id: articles.length ? Math.max(...articles.map((a) => a.id)) + 1 : 1,
          title: form.title || "Untitled",
          description: form.description,
          body: form.body,
          author: form.author,
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">Manage your website articles</p>
        </div>
        <Button onClick={() => handleOpen()} size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> Add Article
        </Button>
      </div>
      {/* Article Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Badge className="bg-green-100 text-green-800">Published</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
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
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Articles Library</CardTitle>
          <CardDescription>Manage all your website articles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-8" />
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
                  <TableHead>Description</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Published At</TableHead>
                  <TableHead>Updated At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>{article.id}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{article.description}</TableCell>
                    <TableCell>{article.author}</TableCell>
                    <TableCell>{article.publishedAt}</TableCell>
                    <TableCell>{article.updatedAt}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpen(article)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(article.id)}>
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
            <DialogTitle>{editArticle ? "Edit Article" : "Add Article"}</DialogTitle>
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
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description"
              value={form.description || ""}
              onChange={handleChange}
              rows={2}
            />
            <Label htmlFor="body">Body</Label>
            <Textarea
              id="body"
              name="body"
              placeholder="Body"
              value={form.body || ""}
              onChange={handleChange}
              rows={4}
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
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{editArticle ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 