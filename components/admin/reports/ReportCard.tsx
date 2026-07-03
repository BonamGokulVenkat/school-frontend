import {
  FileText,
  Download,
  Calendar,
  User,
  File,
  FileSpreadsheet,
  Files,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreVertical,
  Trash2,
  Eye,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Report } from "@/lib/dummy/admin/reports-data";

interface ReportCardProps {
  report: Report;
  onDownload?: (report: Report) => void;
  onDelete?: (id: string) => void;
  onView?: (report: Report) => void;
}

const formatIcons = {
  pdf: File,
  excel: FileSpreadsheet,
  csv: Files,
};

const statusColors = {
  ready: "bg-emerald-100 text-emerald-700 border-emerald-200",
  processing: "bg-amber-100 text-amber-700 border-amber-200",
  failed: "bg-rose-100 text-rose-700 border-rose-200",
};

const statusIcons = {
  ready: CheckCircle,
  processing: Clock,
  failed: AlertCircle,
};

export function ReportCard({ report, onDownload, onDelete, onView }: ReportCardProps) {
  const FormatIcon = formatIcons[report.format] || File;
  const StatusIcon = statusIcons[report.status] || CheckCircle;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="border-slate-200 shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <FormatIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 line-clamp-1">{report.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2">{report.description}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onView?.(report)}>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDownload?.(report)}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600" onClick={() => onDelete?.(report.id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 pb-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-slate-100 text-xs capitalize">
            {report.type}
          </Badge>
          <Badge variant="outline" className="bg-slate-100 text-xs uppercase">
            {report.format}
          </Badge>
          <Badge
            variant="outline"
            className={`${statusColors[report.status]} border text-xs`}
          >
            <StatusIcon className="mr-1 h-3 w-3" />
            {report.status}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(report.generatedAt)}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {report.generatedBy}
          </div>
          {report.size !== "-" && (
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              {report.size}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 p-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Download className="h-3 w-3" />
          <span>{report.downloads} downloads</span>
        </div>
        {report.status === "ready" && (
          <Button
            size="sm"
            variant="outline"
            className="h-7 border-slate-200 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600"
            onClick={() => onDownload?.(report)}
          >
            <Download className="mr-1 h-3 w-3" />
            Download
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}