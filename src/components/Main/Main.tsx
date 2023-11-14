import { Chart } from "../Charts/Chart";
import { Indexed, IndexedProps } from "./Indexed";

export const Main = () => {
  const indexedes: IndexedProps[] = [
    {
      title: "DOANH THU(THÁNG)",
      icon: (
        <svg
          className="w-6 h-6 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      ),
      earning: 40000000,
      titleColor: "text-violet-400",
      borderColor: "border-indigo-500",
    },
    {
      title: "DOANH THU(NĂM)",
      icon: (
        <svg
          className="w-6 h-6 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      ),
      earning: 240000000,
      titleColor: "text-emerald-500",
      borderColor: "border-emerald-600",
    },
    {
      title: "TASK",
      icon: (
        <svg
          className="w-6 h-6 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      ),
      earning: 240000000,
      titleColor: "text-emerald-500",
      borderColor: "border-slate-500",
    },
    {
      title: "PENDING REQUESTS",
      icon: (
        <svg
          className="w-6 h-6 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      ),
      earning: 240000000,
      titleColor: "text-emerald-500",
      borderColor: "border-yellow-500",
    },
  ];
  return (
    <div className="p-6 bg-slate-50">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-gray-600 text-2xl font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-blue-700 h-8 rounded-sm text-white flex items-center justify-center px-6 ">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 pb-4">
        {indexedes.map((index) => {
          return (
            <Indexed
              title={index.title}
              icon={index.icon}
              earning={index.earning}
              titleColor={index.titleColor}
              borderColor={index.borderColor}
            />
          );
        })}
      </div>
      <Chart />
    </div>
  );
};
