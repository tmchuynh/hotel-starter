import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toggleAccordionSection = (
  id: string,
  activeSection: string | null,
  setActiveSection: (id: string | null) => void,
  sectionRef: HTMLElement | null
) => {
  setActiveSection(activeSection === id ? null : id);

  if (activeSection !== id && sectionRef) {
    const offset = 100; // Adjust offset if needed

    // Delay scrolling slightly to ensure the DOM has updated
    setTimeout(() => {
      const sectionPosition =
        sectionRef.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }, 100); // Delay in milliseconds – adjust if necessary
  }
};

export const scrollToSection = (
  sectionId: string,
  sectionRefs: React.RefObject<{ [key: string]: HTMLElement | null }>,
  setActiveSection?: (sectionId: string) => void
) => {
  if (setActiveSection) {
    setActiveSection(sectionId);
  }

  const section = sectionRefs.current?.[sectionId];
  if (section) {
    const offset = 80; // Fixed offset (e.g., header height)

    // Wait for two animation frames to ensure layout is updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth",
        });
      });
    });
  }
};