import AnimateOnScroll from "@/components/AnimateOnScroll";
import WorkProcessScroll from "@/components/WorkProcessScroll";

export default function WorkProcessTimeline() {
  return (
    <AnimateOnScroll>
      <div className="mb-20">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Process
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How I Work
          </h2>
        </div>

        <WorkProcessScroll />
      </div>
    </AnimateOnScroll>
  );
}
