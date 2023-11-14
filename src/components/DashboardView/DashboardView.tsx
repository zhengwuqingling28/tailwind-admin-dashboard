import { useState } from "react";

export const DashboardView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const showDropdown = () => {
    setOpen(!open);
  };
  return (
    <div className="flex item-center justify-between h-16 shadow-lg px-6">
      <div className="m-4 flex items-center rounded-md gap-2">
        <div className="relative rounded-md border-2 border-gray-300">
          <input
            type="text"
            className="bg-slate-50 h-[2rem] outline-none pl-10 w-[15rem]"
            placeholder="Nhập từ khóa tìm kiếm"
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-2.5  h-4 w-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <button className="rounded-md bg-sky-600 px-3 py-[0.3rem] text-white">
          Tìm kiếm
        </button>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-6 border-r-[1px] pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="flex item-center gap-4 relative" onClick={showDropdown}>
          <p className="mt-3">Nguyễn Quang Hưng</p>
          <div>
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="w-[3.25rem] self-start rounded-full border-[4px] border-indigo-300"
            />
          </div>
          {open == true && (
            <div className="bg-white h-32 w-40 absolute bottom-[-135px] z-20 right-0 pt-4 pl-4 space-y-3">
              <p className="cursor-pointer hover:text-blue-700 font-semi-bold">
                Profiles
              </p>
              <p className="cursor-pointer hover:text-blue-700 font-semi-bold">
                Setting
              </p>
              <p className="cursor-pointer hover:text-blue-700 font-semi-bold">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
