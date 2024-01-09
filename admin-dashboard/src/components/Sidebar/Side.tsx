import { ReactNode } from "react";

export interface SideProps {
  title: string;
  icon: ReactNode;
}

export const Side: React.FC<SideProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-start px-4 py-2 cursor-pointer">
      <div className="flex items-center gap-2.5 basis-11/12">
        {icon}

        <p className="text-sm leading-[1.25rem] font-normal">{title}</p>
      </div>
      <div className="basis-1/12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};
