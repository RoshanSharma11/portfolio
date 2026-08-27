import type { Project } from "@/constants/projects";

export function hasLiveLink(project: Project): boolean {
  return Boolean(
    (project.liveLink && project.liveLink.length > 0) || project.storeLinks
  );
}

/** iOS → App Store; Android/Windows/other → Play Store. */
export function resolveLiveLink(project: Project): string | undefined {
  if (project.storeLinks) {
    if (typeof navigator === "undefined") {
      return project.storeLinks.android;
    }

    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    return isIOS ? project.storeLinks.ios : project.storeLinks.android;
  }

  return project.liveLink || undefined;
}

export function getLiveLinkLabel(project: Project): string {
  if (!project.storeLinks) return "Live Demo";

  if (typeof navigator === "undefined") return "Get the App";

  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  return isIOS ? "App Store" : "Play Store";
}
