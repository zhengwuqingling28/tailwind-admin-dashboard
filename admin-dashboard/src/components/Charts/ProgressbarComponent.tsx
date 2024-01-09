import { Progress } from "antd";

export const ProgressbarComponent = () => {
  return (
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
      <div className="px-6 py-4 space-y-4">
        <div>
          <h2>Server Migration</h2>
          <Progress percent={30} status="active" strokeColor="#E74A38" />
        </div>
        <div>
          <h2>Sale Tracking</h2>
          <Progress percent={30} status="active" strokeColor="#F6C23E" />
        </div>
        <div>
          <h2>Customer Database</h2>
          <Progress percent={60} status="active" strokeColor="#4E73DF" />
        </div>
        <div>
          <h2>Payout Detail</h2>
          <Progress percent={100} status="active" strokeColor="#36B9CC" />
        </div>
        <div>
          <h2>Account Setup</h2>
          <Progress percent={50} status="active" strokeColor="#1CC88A" />
        </div>
      </div>
    </div>
  );
};
