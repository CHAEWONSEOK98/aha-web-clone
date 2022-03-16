const FloatBtnT = () => {
  return (
    <button className="fixed absolute bottom-[8.2rem] right-4 flex h-[3.8rem] w-[3.8rem] items-center justify-center rounded-full bg-teal-400 ">
      <svg
        className="h-11 w-11 rounded-full  text-white "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    </button>
  );
};

export default FloatBtnT;
