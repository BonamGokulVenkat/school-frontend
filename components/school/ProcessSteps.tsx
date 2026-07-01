import { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

import { Card } from "@/components/ui/card";

interface Step {
  id: string;
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStepsProps {
  steps: Step[];
  currentStep?: number;
}

export function ProcessSteps({ steps, currentStep }: ProcessStepsProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const isCompleted = currentStep !== undefined && step.step < currentStep;
        const isActive = currentStep !== undefined && step.step === currentStep;
        const isUpcoming = currentStep !== undefined && step.step > currentStep;

        return (
          <div key={step.id} className="relative">
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-5 top-10 h-12 w-0.5 ${
                  isCompleted ? "bg-blue-600" : "bg-slate-200"
                }`}
              />
            )}

            <div className="flex items-start gap-4">
              {/* Step Number Circle */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isCompleted
                    ? "bg-blue-600 text-white"
                    : isActive
                    ? "border-2 border-blue-600 bg-blue-50 text-blue-600"
                    : "border-2 border-slate-200 text-slate-400"
                }`}
              >
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : step.step}
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <h4
                  className={`text-base font-semibold ${
                    isCompleted || isActive ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-sm ${
                    isCompleted || isActive ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Status Badge */}
              {currentStep !== undefined && (
                <div className="shrink-0">
                  {isCompleted && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                      Completed
                    </span>
                  )}
                  {isActive && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                      In Progress
                    </span>
                  )}
                  {isUpcoming && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                      Upcoming
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}