const BottomBar = () => {
  return (
    <div className="fixed absolute bottom-0">
      <div className="flex h-[3.1rem] w-screen items-center justify-between bg-black">
        <p className="p-3 text-xs font-bold tracking-tighter text-white">
          고민이 많은 지금,{" "}
          <span className="text-emerald-400">전문가와 상담</span>이 필요할 때
        </p>
        <button>
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
