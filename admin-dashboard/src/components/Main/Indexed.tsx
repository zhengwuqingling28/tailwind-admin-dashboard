import { ReactNode } from "react";

export interface IndexedProps {
  title: string;
  icon: ReactNode;
  earning: number;
  titleColor: string;
  borderColor: string;
}

export const Indexed: React.FC<IndexedProps> = ({
  title,
  icon,
  earning,
  titleColor,
  borderColor,
}) => {
  return (
    <div
      className={`${borderColor} px-4 h-[6.25rem] rounded-lg bg-white border-l-[4px] flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
    >
      <div>
        <h2 className={`${titleColor} text-sm leading-4 font-bold`}>{title}</h2>
        <h1 className="text-lg leading-6 font-bold text-gray-600 mt-1">
          {earning}VND
        </h1>
      </div>
      {icon}
    </div>
  );
};
