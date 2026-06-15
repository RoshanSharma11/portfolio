"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/libs/utils";

type AnimationVariant = "fade-up" | "fade-in" | "scale-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  variant?: AnimationVariant;
  as?: ElementType;
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  once = true,
  variant = "fade-up",
  as: Component = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref}
      className={cn(
        "animate-on-scroll",
        `animate-on-scroll-${variant}`,
        isVisible && "animate-on-scroll-visible",
        className
      )}
      style={{ "--animate-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
