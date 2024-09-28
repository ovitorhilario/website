export interface FormationProps {
  school: string;
  period: string;
  schoolImg: string;
  course: string;
}

export function Formation({
  school,
  period,
  schoolImg,
  course
} : FormationProps) {
   
  return (
    <div className="flex flex-col gap-4 border border-zinc-800 px-5 py-6 rounded-xl overflow-hidden">
      <div className="flex flex-row items-center gap-4">
        <div 
          className="min-w-10 min-h-10 w-10 h-10 rounded-lg overflow-hidden
           xl:min-w-14 xl:min-h-14 xl:w-14 xl:h-14 bg-white/15" 
        >
          <img
            className="object-cover"
            src={schoolImg} 
            alt={school} 
          />
        </div>
        <div className="flex flex-col gap-0.5 justify-center">
          <span className="text-sm xl:text-base font-semibold text-zinc-200">
            {school}
          </span>
          <div className="flex flex-col items-start xl:gap-1">
            <span
              className="text-sm font-medium text-zinc-400"
            >
              {course}
            </span>
            <span className="w-fit text-xs text-nowrap font-semibold text-zinc-500">
              {period}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}