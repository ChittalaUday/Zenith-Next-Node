"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, FileText, Search, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  assignedTo?: string;
}

// Mock data for services and subservices
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

const initialFaqs: FAQ[] = [
  {
    id: 1,
    question: "How do I register my company?",
    answer: "You can register your company online through our platform by following the step-by-step process.",
    assignedTo: JSON.stringify({ service: "startup", subservice: "opc-registration" }),
  },
  {
    id: 2,
    question: "What documents are required for GST registration?",
    answer: "You will need PAN card, address proof, and business proof for GST registration.",
    assignedTo: JSON.stringify({ service: "registrations" }),
  },
];

export default function FAQPage() {
  const [faqs, setFaqs] = React.useState<FAQ[]>(initialFaqs);
  const [open, setOpen] = React.useState(false);
  const [editFaq, setEditFaq] = React.useState<FAQ | null>(null);
  const [form, setForm] = React.useState<Partial<FAQ & { service?: string; subservice?: string }>>({});

  const handleOpen = (faq?: FAQ) => {
    let parsed: { service?: string; subservice?: string } = {};
    if (faq?.assignedTo) {
      try {
        parsed = JSON.parse(faq.assignedTo);
      } catch {}
    }
    setEditFaq(faq || null);
    setForm(faq ? { ...faq, ...parsed } : {});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditFaq(null);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const assignedTo = form.service
      ? JSON.stringify({ service: form.service, ...(form.subservice ? { subservice: form.subservice } : {}) })
      : undefined;
    if (editFaq) {
      setFaqs(faqs.map((f) => (f.id === editFaq.id ? { ...editFaq, ...form, assignedTo } as FAQ : f)));
    } else {
      setFaqs([
        ...faqs,
        {
          id: faqs.length ? Math.max(...faqs.map((f) => f.id)) + 1 : 1,
          question: form.question || "Untitled",
          answer: form.answer || "",
          assignedTo,
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">FAQs</h1>
          <p className="text-muted-foreground">Manage your website frequently asked questions</p>
        </div>
        <Button onClick={() => handleOpen()} size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> Add FAQ
        </Button>
      </div>
      {/* FAQ Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total FAQs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{faqs.length}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assigned</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">Assigned</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{faqs.filter(f => f.assignedTo).length}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>FAQs Library</CardTitle>
          <CardDescription>Manage all your website FAQs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search FAQs..." className="pl-8" />
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
                  <TableHead>Question</TableHead>
                  <TableHead>Answer</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faqs.map((faq) => (
                  <TableRow key={faq.id}>
                    <TableCell>{faq.id}</TableCell>
                    <TableCell>{faq.question}</TableCell>
                    <TableCell className="max-w-xs truncate">{faq.answer}</TableCell>
                    <TableCell>{(() => {
                      if (!faq.assignedTo) return "-";
                      try {
                        const parsed = JSON.parse(faq.assignedTo);
                        const service = services.find(s => s.value === parsed.service)?.label;
                        const subservice = parsed.subservice
                          ? services.find(s => s.value === parsed.service)?.subservices.find(ss => ss.value === parsed.subservice)?.label
                          : undefined;
                        return service + (subservice ? ` / ${subservice}` : "");
                      } catch {
                        return "-";
                      }
                    })()}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleOpen(faq)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(faq.id)}>
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
            <DialogTitle>{editFaq ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              name="question"
              placeholder="Question"
              value={form.question || ""}
              onChange={handleChange}
            />
            <Label htmlFor="answer">Answer</Label>
            <Textarea
              id="answer"
              name="answer"
              placeholder="Answer"
              value={form.answer || ""}
              onChange={handleChange}
              rows={3}
            />
            <Label htmlFor="service">Assign to Service</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {services.find(s => s.value === form.service)?.label || "Select service"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {services.map(s => (
                  <DropdownMenuItem
                    key={s.value}
                    onSelect={() => setForm(f => ({ ...f, service: s.value, subservice: undefined }))}
                  >
                    {s.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {form.service && services.find(s => s.value === form.service)?.subservices.length ? (
              <>
                <Label htmlFor="subservice">Assign to Subservice (optional)</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {services
                        .find(s => s.value === form.service)
                        ?.subservices.find(ss => ss.value === form.subservice)?.label || "Select subservice (optional)"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem onSelect={() => setForm(f => ({ ...f, subservice: undefined }))}>
                      None
                    </DropdownMenuItem>
                    {services
                      .find(s => s.value === form.service)
                      ?.subservices.map(ss => (
                        <DropdownMenuItem
                          key={ss.value}
                          onSelect={() => setForm(f => ({ ...f, subservice: ss.value }))}
                        >
                          {ss.label}
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : null}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>{editFaq ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 