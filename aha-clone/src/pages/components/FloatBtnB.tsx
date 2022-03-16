const FloatBtnB = () => {
  return (
    <button className="fixed absolute bottom-[3.7rem] right-[1.1rem] flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-full ring-2 ring-teal-400  ">
      <svg
        className="h-11 w-11 rounded-full text-teal-300  "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
  );
};

export default FloatBtnB;
