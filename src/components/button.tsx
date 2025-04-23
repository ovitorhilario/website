type Color = 'red' | 'default' | 'cyan' | 'green' | 'blue' | 'yellow' | 'purple' | 'green-neon' | 'indigo';

export interface ButtonProps {
  title: string;
  icon: JSX.Element;
  color: Color;
  url?: string;
  expandable?: boolean;
}

export function Button({
  title,
  icon,
  url,
  expandable
}: ButtonProps) {

  const colors: Record<Color, string> = {
    'red': 'bg-red-600/15 hover:bg-red-600/20 hover:text-red-400',
    'default': 'bg-zinc-500/15 hover:bg-zinc-500/20 hover:text-zinc-300',
    'cyan': 'bg-cyan-600/15 hover:bg-cyan-600/20 hover:text-cyan-400',
    'green': 'bg-green-600/15 hover:bg-green-600/20 hover:text-green-400',
    'blue': 'bg-blue-500/15 hover:bg-blue-500/20 hover:text-blue-300',
    'yellow': 'bg-yellow-600/15 hover:bg-yellow-600/20 hover:text-yellow-400',
    'purple': 'bg-purple-500/15 hover:bg-purple-500/20 hover:text-purple-400',
    'green-neon': 'bg-[#C5F74F]/15 hover:bg-[#C5F74F]/20 hover:text-[#C5F74F]',
    'indigo': 'bg-[#5856D6]/15 hover:bg-[#5856D6]/20 hover:text-[#5856D6]',
  }

  return (
    <a
      href={url}
      target={url ? "_blank" : undefined}
      className={`group/button w-fit flex flex-row items-center text-nowrap transition-all gap-2 px-4 py-1.5 sm:py-2 rounded-full
        font-semibold text-sm text-zinc-300 hover:text-zinc-400 ${colors['default']}`}
    >
      {icon}
      {expandable ? (
        <div
          className="max-w-0 overflow-hidden group-hover/button:max-w-[200px] duration-500 ease-in-out transition-all whitespace-nowrap"
          style={{ transitionProperty: 'max-width, opacity' }}
        >
          {title}
        </div>
      ) : title}
    </a>
  );
}