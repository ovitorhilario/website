import { ExternalLink } from "lucide-react";

export interface ExperiencieProps {
  role: string;
  company: string;
  companyImg: string;
  companyUrl: string;
  period: string;
  description: string;
}

export function Experiencie({
  role,
  company,
  companyImg,
  companyUrl,
  period,
  description,
} : ExperiencieProps) {
   
  return (
    <div className="flex flex-col gap-4 border border-zinc-800 px-5 py-6 rounded-xl overflow-hidden">
      <div className="flex flex-row items-center gap-4">
        <div 
          className="min-w-10 min-h-10 w-10 h-10 rounded-lg overflow-hidden
           xl:min-w-14 xl:min-h-14 xl:w-14 xl:h-14" 
        >
          <img src={companyImg} alt={company} />
        </div>
        <div className="flex flex-col gap-0.5 justify-center">
          <span className="text-sm xl:text-base font-semibold text-zinc-200">
            {role}
          </span>
          <div className="flex flex-col items-start xl:gap-1">
            <a 
              href={companyUrl}
              target="_blank"
              className="flex flex-row items-center gap-1.5"
            >
              <span
                className="text-sm font-medium text-zinc-400 hover:underline underline-offset-4"
              >
                {company}
              </span>
              <ExternalLink 
                className="w-4 h-4 text-zinc-400" 
              />
            </a>
            <span className="w-fit text-xs text-nowrap font-semibold text-zinc-500">
              {period}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}