"use client";

import { workProcess } from "@/constants/services";
import { cn } from "@/libs/utils";
import { useScrollSpy } from "@/libs/useScrollSpy";

const stepThemes = [
  {
    card: "bg-linear-to-br from-blue-500/12 via-blue-950/30 to-zinc-950",
    border: "border-blue-500/25",
    accent: "text-blue-400",
    dotBorder: "border-blue-500",
    dotFill: "bg-blue-400",
    dotRing: "ring-blue-500/15",
    glow: "bg-blue-500/15",
  },
  {
    card: "bg-linear-to-br from-violet-500/12 via-violet-950/30 to-zinc-950",
    border: "border-violet-500/25",
    accent: "text-violet-400",
    dotBorder: "border-violet-500",
    dotFill: "bg-violet-400",
    dotRing: "ring-violet-500/15",
    glow: "bg-violet-500/15",
  },
  {
    card: "bg-linear-to-br from-emerald-500/12 via-emerald-950/30 to-zinc-950",
    border: "border-emerald-500/25",
    accent: "text-emerald-400",
    dotBorder: "border-emerald-500",
    dotFill: "bg-emerald-400",
    dotRing: "ring-emerald-500/15",
    glow: "bg-emerald-500/15",
  },
  {
    card: "bg-linear-to-br from-amber-500/12 via-amber-950/30 to-zinc-950",
    border: "border-amber-500/25",
    accent: "text-amber-400",
    dotBorder: "border-amber-500",
    dotFill: "bg-amber-400",
    dotRing: "ring-amber-500/15",
    glow: "bg-amber-500/15",
  },
] as const;

export default function WorkProcessScroll() {
  const { activeIndex, setPanelRef } = useScrollSpy(workProcess.length);

  return (
    <>
      {/* Desktop — sticky scroll */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
        <div className="relative">
          <div className="absolute left-[11px] top-8 bottom-8 w-px bg-zinc-800" />

          {workProcess.map((step, index) => (
            <div
              key={step.step}
              ref={setPanelRef(index)}
              className="flex min-h-[70vh] flex-col justify-center py-20 pr-12 xl:pr-16"
            >
              <StepIndicator
                step={step}
                index={index}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>

        <div className="sticky top-24 self-start w-full pt-4">
          <div className="relative min-h-[280px]">
            {workProcess.map((step, index) => {
              const theme = stepThemes[index];

              return (
                <div
                  key={step.step}
                  className={cn(
                    "absolute inset-0 overflow-hidden rounded-xl border transition-opacity duration-700 ease-in-out",
                    theme.card,
                    theme.border,
                    activeIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
                  )}
                  aria-hidden={activeIndex !== index}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl",
                      theme.glow
                    )}
                  />
                  <div className="relative flex h-full min-h-[280px] flex-col justify-center p-8 sm:p-10">
                    <StepDetail step={step} theme={theme} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="relative max-w-xl lg:hidden">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-blue-500 via-zinc-700 to-zinc-800" />

        <div className="space-y-10">
          {workProcess.map((step, index) => {
            const theme = stepThemes[index];

            return (
              <div key={step.step} className="relative flex gap-6 pl-1">
                <div
                  className={cn(
                    "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950",
                    theme.dotBorder
                  )}
                >
                  <span
                    className={cn("h-1.5 w-1.5 rounded-full", theme.dotFill)}
                  />
                </div>
                <div
                  className={cn(
                    "flex-1 rounded-xl border p-5",
                    theme.card,
                    theme.border
                  )}
                >
                  <p
                    className={cn(
                      "mb-1 text-xs font-medium uppercase tracking-[0.2em]",
                      theme.accent
                    )}
                  >
                    Step {step.step}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function StepIndicator({
  step,
  index,
  isActive,
}: {
  step: (typeof workProcess)[number];
  index: number;
  isActive: boolean;
}) {
  const theme = stepThemes[index];

  return (
    <div
      className="flex items-start gap-6 transition-opacity duration-500"
      style={{ opacity: isActive ? 1 : 0.35 }}
    >
      <div
        className={cn(
          "relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-zinc-950 transition-all duration-500",
          isActive
            ? cn("ring-4", theme.dotBorder, theme.dotRing)
            : "border-zinc-700"
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors duration-500",
            isActive ? theme.dotFill : "bg-zinc-600"
          )}
        />
      </div>

      <div>
        <p
          className={cn(
            "mb-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500",
            isActive ? theme.accent : "text-zinc-500"
          )}
        >
          Step {step.step}
        </p>
        <h3
          className={cn(
            "text-2xl font-semibold tracking-tight transition-colors duration-500 sm:text-3xl",
            isActive ? "text-zinc-100" : "text-zinc-400"
          )}
        >
          {step.title}
        </h3>
      </div>
    </div>
  );
}

function StepDetail({
  step,
  theme,
}: {
  step: (typeof workProcess)[number];
  theme: (typeof stepThemes)[number];
}) {
  return (
    <>
      <p
        className={cn(
          "mb-3 text-xs font-medium uppercase tracking-[0.2em]",
          theme.accent
        )}
      >
        Step {step.step}
      </p>
      <h3 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-100">
        {step.title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-zinc-300/90">
        {step.description}
      </p>
    </>
  );
}
