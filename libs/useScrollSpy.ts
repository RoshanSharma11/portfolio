"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollSpy(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setPanelRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      panelRefs.current[index] = element;
    },
    []
  );

  useEffect(() => {
    const updateActiveIndex = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = 0;
      let closestDistance = Infinity;

      for (let index = 0; index < itemCount; index++) {
        const panel = panelRefs.current[index];
        if (!panel) continue;

        const rect = panel.getBoundingClientRect();
        if (rect.height === 0) continue;

        const panelCenter = rect.top + rect.height / 2;
        const distance = Math.abs(panelCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex
      );
    };

    updateActiveIndex();

    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [itemCount]);

  return { activeIndex, setPanelRef };
}
