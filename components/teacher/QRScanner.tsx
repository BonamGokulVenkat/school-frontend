"use client";

import { useState } from "react";
import { X, Camera, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (data: string) => void;
}

export function QRScanner({ isOpen, onClose, onScan }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR scan
    setTimeout(() => {
      const mockResult = "student-1";
      setScanResult(mockResult);
      setIsScanning(false);
      onScan(mockResult);
    }, 2000);
  };

  const handleClose = () => {
    setScanResult(null);
    setIsScanning(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>QR Code Scanner</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Scanner Preview */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
            {isScanning ? (
              <div className="flex h-full items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
              </div>
            ) : scanResult ? (
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <div className="rounded-full bg-green-100 p-3">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-green-600">Student Scanned!</p>
                <p className="text-xs text-slate-500">ID: {scanResult}</p>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <Camera className="h-12 w-12 text-slate-400" />
                <p className="text-sm text-slate-500">Position QR code in frame</p>
                <div className="absolute inset-0 rounded-lg border-2 border-dashed border-blue-400 m-6" />
              </div>
            )}
          </div>

          {/* Scanner Controls */}
          <div className="flex gap-2">
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={handleScan}
              disabled={isScanning || !!scanResult}
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : scanResult ? (
                "Scan Again"
              ) : (
                "Start Scanning"
              )}
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleClose}>
              Cancel
            </Button>
          </div>

          {/* Instructions */}
          <Card className="border-slate-200">
            <CardContent className="p-3 text-xs text-slate-500">
              <p className="font-medium text-slate-700">How to scan:</p>
              <ol className="mt-1 list-decimal space-y-0.5 pl-4">
                <li>Click  &quot;Start  Scanning &quot; to activate camera</li>
                <li>Hold the QR code in front of the camera</li>
                <li>Student will be automatically marked present</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}