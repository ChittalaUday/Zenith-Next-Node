"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EditorBlock = dynamic(() => import("@/components/EditorBlock"), { ssr: false });

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

export default function NewGuidePage() {
  const router = useRouter();
  const params = useSearchParams();
  const service = params.get("service");
  const subservice = params.get("subservice");
  const [saving, setSaving] = React.useState(false);
  const [editorData, setEditorData] = React.useState<any>(null);

  const serviceLabel = services.find(s => s.value === service)?.label;
  const subserviceLabel = services.find(s => s.value === service)?.subservices.find(ss => ss.value === subservice)?.label;

  const handleSave = async () => {
    setSaving(true);
    // Mock save: you would send { service, subservice, content: editorData } to your backend here
    setTimeout(() => {
      setSaving(false);
      router.push("/dashboard/content/guides");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Guide</CardTitle>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-muted-foreground text-sm">Assigned to:</span>
            <Badge variant="secondary">{serviceLabel}</Badge>
            {subserviceLabel ? <Badge variant="outline">{subserviceLabel}</Badge> : null}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 border bg-muted rounded-lg p-4">
            <EditorBlock
              holder="editorjs-guide"
              onChange={setEditorData}
              initialData={null}
              tools={{
                header: require("@editorjs/header"),
                list: require("@editorjs/list"),
                image: require("@editorjs/image"),
                code: require("@editorjs/code"),
                checklist: require("@editorjs/checklist"),
                delimiter: require("@editorjs/delimiter"),
                quote: require("@editorjs/quote"),
                table: require("@editorjs/table"),
                embed: require("@editorjs/embed"),
              }}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => router.push("/dashboard/content/guides")}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Guide"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 