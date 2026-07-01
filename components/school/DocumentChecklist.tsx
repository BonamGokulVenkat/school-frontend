import { CheckCircle, Circle, FileText, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Document {
  id: string;
  name: string;
  required: boolean;
  description?: string;
}

interface DocumentChecklistProps {
  documents: Document[];
  completed?: string[];
}

export function DocumentChecklist({
  documents,
  completed = [],
}: DocumentChecklistProps) {
  return (
    <div className="space-y-3">
      {documents.map((doc) => {
        const isCompleted = completed.includes(doc.id);
        return (
          <div
            key={doc.id}
            className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${
              isCompleted
                ? "border-green-200 bg-green-50"
                : doc.required
                ? "border-slate-200 bg-white"
                : "border-dashed border-slate-200 bg-slate-50/50"
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {isCompleted ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : doc.required ? (
                <Circle className="h-5 w-5 text-slate-300" />
              ) : (
                <FileText className="h-5 w-5 text-slate-400" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm font-medium ${
                    isCompleted
                      ? "text-green-700"
                      : doc.required
                      ? "text-slate-900"
                      : "text-slate-500"
                  }`}
                >
                  {doc.name}
                </span>
                {doc.required && (
                  <span className="text-xs font-medium text-red-500">*Required</span>
                )}
                {!doc.required && (
                  <span className="text-xs font-medium text-slate-400">Optional</span>
                )}
              </div>
              {doc.description && (
                <p className="mt-0.5 text-xs text-slate-500">{doc.description}</p>
              )}
            </div>

            {isCompleted && (
              <div className="shrink-0">
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  Uploaded
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}