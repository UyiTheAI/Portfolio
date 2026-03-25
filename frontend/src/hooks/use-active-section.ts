import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    const visibilityMap = new Map<string, boolean>();

    const determineActiveSection = () => {
      // Find the first section that is visible
      for (const id of sectionIds) {
        if (visibilityMap.get(id)) {
          setActiveSection(id);
          return;
        }
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              visibilityMap.set(id, entry.isIntersecting);
            });
            determineActiveSection();
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0.1,
          }
        );
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
