import { ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  img: string;
  tags?: string[];
}

export function Project({
  title,
  description,
  link,
  img,
  tags
}: ProjectProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col gap-4 px-6 py-5 border border-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-800/20 transition-all hover:shadow-xl">
        <div className="flex flex-row items-start gap-4">
          {img.length > 0 ? (
            <div 
              className="size-14 rounded-lg overflow-hidden" 
            >
              <img src={img} alt={title} className="object-cover" />
            </div>
          ) : null}
          <div className="flex flex-col gap-1.5 justify-center">
            <div
              className="flex flex-row items-center gap-2 hover:opacity-80 transition-all"
            >
              <h1 className="text-base font-medium text-zinc-300">
                {title}
              </h1>
              <ExternalLink 
                className="w-4 h-4 text-zinc-300"
                strokeWidth={2.5}
              />
            </div>
            {tags && tags.length > 0 ? (
              <div className="flex flex-row flex-wrap items-center gap-1.5 mb-1.5">
                {tags.map((tag, index) => (
                  <span key={index} className="text-[0.7rem] font-medium text-zinc-400 bg-zinc-400/10 px-2 text-nowrap rounded-full py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <span className="text-sm font-medium text-zinc-500">
          {description}
        </span>
      </div>
    </a>
  );
}