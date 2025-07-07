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
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import dynamic from "next/dynamic";

interface Guide {
  id: number;
  content?: any; // Editor.js JSON
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  assignment?: string;
  steps?: string[];
}

const initialGuides: Guide[] = [];

const services = [
  {
    label: "Startup",
    value: "startup",
    subservices: [
      { label: "OPC Registration", value: "opc-registration" },
      { label: "LLP Registration", value: "llp-registration" },
    ],
  },
  {
    label: "Registrations",
    value: "registrations",
    subservices: [
      { label: "Trade License", value: "trade-license" },
      { label: "FSSAI Registration", value: "fssai-registration" },
    ],
  },
  {
    label: "Trademark",
    value: "trademark",
    subservices: [],
  },
];

const EditorBlock = dynamic(() => import("@/components/EditorBlock"), { ssr: false });

export default function GuidesPage() {
  const router = useRouter();
  const [guides, setGuides] = React.useState<Guide[]>([]);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [editGuide, setEditGuide] = React.useState<Guide | null>(null);
  const [form, setForm] = React.useState<Partial<Guide>>({});
  const [assignmentDialogOpen, setAssignmentDialogOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<string | undefined>();
  const [selectedSubservice, setSelectedSubservice] = React.useState<string | undefined>();
  const [activeTab, setActiveTab] = React.useState("basic");
  const [deleteId, setDeleteId] = React.useState<number | null>(null);

  // On mount, load guides from localStorage
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('guides');
      if (stored) {
        try {
          setGuides(JSON.parse(stored));
        } catch {
          setGuides([]);
        }
      }
    }
  }, []);

  // Save guides to localStorage whenever they change
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('guides', JSON.stringify(guides));
    }
  }, [guides]);

  const handleOpen = (guide?: Guide) => {
    setEditGuide(guide || null);
    setForm(guide ? { ...guide } : {});
    setSheetOpen(true);
  };

  const handleClose = () => {
    setSheetOpen(false);
    setEditGuide(null);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStepsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, steps: e.target.value.split('\n') });
  };

  const handleStepChange = (idx: number, value: string) => {
    setForm({
      ...form,
      steps: (form.steps || []).map((step, i) => (i === idx ? value : step)),
    });
  };

  const handleAddStep = () => {
    setForm({ ...form, steps: [...(form.steps || []), ""] });
  };

  const handleRemoveStep = (idx: number) => {
    setForm({
      ...form,
      steps: (form.steps || []).filter((_, i) => i !== idx),
    });
  };

  const handleSave = () => {
    if (editGuide) {
      setGuides(guides.map((g) => (g.id === editGuide.id ? { ...editGuide, ...form, updatedAt: new Date().toISOString() } : g)));
    } else {
      setGuides([
        ...guides,
        {
          id: guides.length ? Math.max(...guides.map((g) => g.id)) + 1 : 1,
          content: form.content,
          author: form.author,
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          assignment: form.assignment,
          steps: form.steps || [],
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setGuides(guides.filter((g) => g.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Guides</h1>
          <p className="text-muted-foreground">Manage your website guides</p>
        </div>
        <Button onClick={() => setAssignmentDialogOpen(true)} size="sm" className="gap-2" variant="default">
          <Plus className="w-4 h-4 text-foreground" /> Add Guide
        </Button>
      </div>
      {/* Search/Filter Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search guides..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>
      {/* Guides Table */}
      <div className="overflow-x-auto rounded-lg border bg-background shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead>Preview</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guides.map((guide) => (
              <TableRow key={guide.id} className="hover:bg-muted/40 transition-colors">
                <TableCell>{guide.id}</TableCell>
                <TableCell>{(() => {
                  if (!guide.assignment) return "-";
                  try {
                    const parsed = JSON.parse(guide.assignment);
                    const service = services.find(s => s.value === parsed.service)?.label;
                    const subservice = parsed.subservice
                      ? services.find(s => s.value === parsed.service)?.subservices.find(ss => ss.value === parsed.subservice)?.label
                      : undefined;
                    return (
                      <span className="flex gap-1">
                        <Badge variant="secondary">{service}</Badge>
                        {subservice ? <Badge variant="outline">{subservice}</Badge> : null}
                      </span>
                    );
                  } catch {
                    return "-";
                  }
                })()}</TableCell>
                <TableCell>{(() => {
                  if (!guide.content) return <span className="text-muted-foreground">No content</span>;
                  try {
                    const data = typeof guide.content === "string" ? JSON.parse(guide.content) : guide.content;
                    const firstBlock = data.blocks?.[0];
                    if (!firstBlock) return <span className="text-muted-foreground">No content</span>;
                    if (firstBlock.type === "header") return <span className="font-semibold">{firstBlock.data.text}</span>;
                    if (firstBlock.type === "paragraph") return <span>{firstBlock.data.text}</span>;
                    return <span className="text-muted-foreground">{firstBlock.type}</span>;
                  } catch {
                    return <span className="text-muted-foreground">Invalid content</span>;
                  }
                })()}</TableCell>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>{guide.author?.[0] || "A"}</AvatarFallback>
                        </Avatar>
                        <span>{guide.author}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Author</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell>{guide.publishedAt?.slice(0, 10)}</TableCell>
                <TableCell>{guide.updatedAt?.slice(0, 10)}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleOpen(guide)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => setDeleteId(guide.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Sheet for Add/Edit Guide */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="max-w-lg w-full">
          <SheetHeader>
            <SheetTitle>{editGuide ? "Edit Guide" : "Add Guide"}</SheetTitle>
          </SheetHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <div className="space-y-4">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  name="author"
                  placeholder="Author"
                  value={form.author || ""}
                  onChange={handleChange}
                />
                {/* Add more basic fields as needed */}
              </div>
            </TabsContent>
            <TabsContent value="content">
              <Label htmlFor="content">Content</Label>
              <div className="border rounded-md p-2 bg-muted mb-4">
                <EditorBlock
                  holder="guide-editor"
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
              <Label>Steps</Label>
              <div className="space-y-2">
                {(form.steps || []).map((step, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <Input
                      value={step}
                      onChange={e => handleStepChange(idx, e.target.value)}
                      placeholder={`Step ${idx + 1}`}
                    />
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveStep(idx)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={handleAddStep} className="mt-2">
                  <Plus className="w-4 h-4 mr-1" /> Add Step
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <div className="border rounded-md p-4 bg-muted min-h-[120px]">
                <div className="font-semibold mb-2">Author: {form.author || <span className="text-muted-foreground">N/A</span>}</div>
                <div className="mb-2">
                  <span className="font-semibold">Steps:</span>
                  <ol className="list-decimal ml-6">
                    {(form.steps || []).map((step, idx) => (
                      <li key={idx}>{step || <span className="text-muted-foreground">(Empty)</span>}</li>
                    ))}
                  </ol>
                </div>
                {/* Render Editor.js content preview */}
                <div className="mt-4">
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
              </div>
            </TabsContent>
          </Tabs>
          <SheetFooter className="mt-4 flex gap-2 justify-end">
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{editGuide ? "Update" : "Create"}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* AlertDialog for Delete Confirmation */}
      <Dialog open={!!deleteId} onOpenChange={open => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Guide?</DialogTitle>
          </DialogHeader>
          <div>Are you sure you want to delete this guide? This action cannot be undone.</div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => { if (deleteId) handleDelete(deleteId); setDeleteId(null); }}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Assignment Dialog remains as is */}
      <Dialog open={assignmentDialogOpen} onOpenChange={setAssignmentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Guide</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Service</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {services.find(s => s.value === selectedService)?.label || "Select service"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {services.map(s => (
                    <DropdownMenuItem
                      key={s.value}
                      onSelect={() => {
                        setSelectedService(s.value);
                        setSelectedSubservice(undefined);
                      }}
                    >
                      {s.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {selectedService && services.find(s => s.value === selectedService)?.subservices.length ? (
              <div>
                <label className="block mb-1 font-medium">Subservice (optional)</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {services
                        .find(s => s.value === selectedService)
                        ?.subservices.find(ss => ss.value === selectedSubservice)?.label || "Select subservice (optional)"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem onSelect={() => setSelectedSubservice(undefined)}>
                      None
                    </DropdownMenuItem>
                    {services
                      .find(s => s.value === selectedService)
                      ?.subservices.map(ss => (
                        <DropdownMenuItem
                          key={ss.value}
                          onSelect={() => setSelectedSubservice(ss.value)}
                        >
                          {ss.label}
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : null}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAssignmentDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setAssignmentDialogOpen(false);
                const params = new URLSearchParams();
                if (selectedService) params.set("service", selectedService);
                if (selectedSubservice) params.set("subservice", selectedSubservice);
                router.push(`/dashboard/content/guides/new?${params.toString()}`);
              }}
              disabled={!selectedService}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 