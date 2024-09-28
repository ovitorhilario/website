import { ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export function Project({
  title,
  description,
  link
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 px-6 py-5 border border-zinc-800 rounded-xl overflow-hidden">
      <a 
        className="flex flex-row items-center gap-2 hover:opacity-80 transition-all"
        href={link}
        target="_blank"
      >
        <h1 className="text-base font-medium text-zinc-300">
          {title}
        </h1>
        <ExternalLink 
          className="w-4 h-4 text-zinc-300"
          strokeWidth={2.5}
        />
      </a>

      <span className="text-sm font-medium text-zinc-500">
        {description}
      </span>
    </div>
  );
}