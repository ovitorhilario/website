type Color = 'red' | 'default' | 'cyan' | 'green' | 'blue' | 'yellow' | 'purple';

export interface ButtonProps {
  title: string;
  icon: JSX.Element;
  color: Color;
  url?: string;
}

export function Button({
  title,
  icon,
  color,
  url
}: ButtonProps) {

  const colors: Record<Color, string> = {
    'red': 'bg-red-600/15 hover:bg-red-600/20 hover:text-red-400',
    'default': 'bg-zinc-500/15 hover:bg-zinc-500/20 hover:text-zinc-300',
    'cyan': 'bg-cyan-600/15 hover:bg-cyan-600/20 hover:text-cyan-400',
    'green': 'bg-green-600/15 hover:bg-green-600/20 hover:text-green-400',
    'blue': 'bg-blue-500/15 hover:bg-blue-500/20 hover:text-blue-300',
    'yellow': 'bg-yellow-600/15 hover:bg-yellow-600/20 hover:text-yellow-400',
    'purple': 'bg-purple-500/15 hover:bg-purple-500/20 hover:text-purple-400'
  }

  return (
    <a
      href={url}
      target={url ? "_blank" : undefined}
      className={`flex flex-row items-center text-nowrap transition-all gap-2 px-4 py-1.5 sm:py-2 rounded-full
        font-semibold text-sm text-zinc-300 hover:text-zinc-400 ${colors[color]}`}
    >
      {icon}
      {title}
    </a>
  );
}