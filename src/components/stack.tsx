import { Layers3 } from "lucide-react";

export interface StackProps {
  title: string;
  icon?: JSX.Element;
}

export function Stack({
  title,
  icon,
}: StackProps) {

  return (
    <div className="flex flex-col px-4 xl:px-0">
       <span className="text-base items-center font-medium text-zinc-200 flex flex-row gap-4">
        {icon !== undefined ? icon : (
          <Layers3
            className="w-5 h-5 text-zinc-200"
          />
        )}
        {title}
      </span> 
    </div>
  );
}