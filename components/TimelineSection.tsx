import { GraduationCap, Briefcase, LucideIcon } from "lucide-react";

interface TimelineItem {
  title: string;
  highlight: string;
  highlightColor: string;
  description: string;
  date?: string;
  isActive?: boolean;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
  icon: LucideIcon;
}

export default function TimelineSection({ title, items, icon: Icon }: TimelineSectionProps) {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-10 sm:mb-12 mt-12 sm:mt-16">
        {title}
      </h3>
      <div className="relative max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-zinc-700 to-zinc-800"></div>

        {/* Timeline entries */}
        <div className="space-y-10 sm:space-y-12">
          {items.map((item, index) => (
            <div key={index} className="relative pl-10 sm:pl-12">
              <div
                className={`absolute left-0 top-1 w-[28px] h-[28px] rounded-full flex items-center justify-center ${
                  item.isActive
                    ? "bg-blue-500/80"
                    : index === 0 && !items.some(i => i.isActive)
                    ? "bg-blue-500/80"
                    : index === 1
                    ? "bg-zinc-700 border-2 border-zinc-600"
                    : "bg-zinc-800 border-2 border-zinc-700"
                }`}
              >
                <Icon
                  size={16}
                  className={
                    item.isActive || (index === 0 && !items.some(i => i.isActive))
                      ? "text-white"
                      : index === 1
                      ? "text-zinc-300"
                      : "text-zinc-400"
                  }
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="flex-1">
                  <h4 className="text-lg sm:text-lg font-medium text-white mb-1.5">
                    {item.title} - <span className={item.highlightColor}>{item.highlight}</span>
                  </h4>
                  <p className="text-zinc-400 text-sm sm:text-base">{item.description}</p>
                </div>
                {item.date && (
                  <div className="text-zinc-500 text-sm sm:text-base whitespace-nowrap sm:text-right">
                    {item.date}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
