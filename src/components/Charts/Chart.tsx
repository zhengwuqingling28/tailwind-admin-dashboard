import { ProgressbarComponent } from "./ProgressbarComponent";
import { LineChartComponent } from "./LineChartComponent";
import { PieChartComponent } from "./PieChartComponent";

export const Chart = () => {
  return (
    <div>
      <div className="mt-6 w-full flex gap-8">
        <div className="basis-9/12 border bg-white shadow-md cursor-pointer rounded-md">
          <LineChartComponent />
        </div>
        <div className="basis-3/12 border bg-white shadow-md cursor-pointer rounded-md">
          <PieChartComponent />
        </div>
      </div>
      <div className="flex mt-6 w-full gap-8">
        <div className="basis-[55%] border bg-white shadow-md cursor-pointed rounded-md">
          <ProgressbarComponent />
        </div>
        <div className="basis-[45%] border bg-white shadow-md cursor-pointed rounded-md">
          <div>
            <div className="py-4 px-5 mb-5 flex items-center justify-between bg-slate-50 border-b-[1px] border-gray-200">
              <h2 className="text-lg text-indigo-500 font-semibold">
                Doanh số sản phẩm
              </h2>
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 4 15"
              >
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
          </div>
          <div className="pl-8 flex items-center justify-center pt-16">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-32 h-32 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <p className="mt-4 font-semibold text-gray-500">
                No data available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
