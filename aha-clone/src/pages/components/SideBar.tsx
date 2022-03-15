interface IToggleProps {
  isToggle: boolean;
  handleToggleBtn: () => void;
}

const SideBar = ({ isToggle, handleToggleBtn }: IToggleProps) => {
  return (
    <div
      className={
        isToggle
          ? "absolute bottom-0 left-0 top-0 w-[20rem] overflow-y-auto"
          : "hidden"
      }
    >
      <header className="flex h-14 items-center justify-around bg-emerald-300">
        <button onClick={handleToggleBtn}>
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <span className="text-xl font-semibold text-white">aha q&a</span>
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
      </header>

      <div className="bg-slate-100 pl-6 pr-4">
        <section className="flex h-24 items-center space-x-4 ">
          <svg
            className="border-1  h-14  w-14  rounded-full border-solid bg-gray-400 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>

          <div className="flex items-center">
            <span className="text-lg font-bold">로그인하세요</span>
            <svg
              className="h-6 w-6"
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
          </div>
        </section>

        <section className="mt-2 mb-5 flex justify-between">
          <article>
            <svg
              className="mx-auto h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              ></path>
            </svg>
            <span className="text-xs tracking-tighter text-black opacity-75">
              출석스탬프
            </span>
          </article>

          <article>
            <svg
              className="mx-auto h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
            <span className="text-xs tracking-tighter text-black opacity-75">
              지식 프로필
            </span>
          </article>

          <article>
            <svg
              className="mx-auto h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <span className="text-xs tracking-tighter text-black opacity-75">
              룰렛이벤트
            </span>
          </article>

          <article>
            <svg
              className="mx-auto h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span className="text-xs tracking-tighter text-black opacity-75">
              계정 설정
            </span>
          </article>
        </section>

        <ul className="flex flex-col  ">
          <div className="flex items-center justify-between border-t-[1px] border-solid border-gray-300 py-4">
            <span className="text-lg font-bold">카테고리</span>
            <button>
              <svg
                className="h-6 w-6 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="my-5 hidden space-y-5 text-sm  font-semibold opacity-70">
            <li>코로나19</li>
            <li>반려동물</li>
            <li>과학</li>
            <li>경제,금융</li>
            <li>인문,예술</li>
            <li>육아,아동</li>
            <li>영양,식단</li>
            <li>치과</li>
            <li>교통사과</li>
            <li>부동산</li>
            <li>약료</li>
            <li>의료</li>
            <li>법률</li>
            <li>세무,회계</li>
            <li>인사,노무</li>
            <li>재무설계</li>
            <li>보험</li>
            <li>무역</li>
            <li>심리상담</li>
            <li>생활상식</li>
          </ul>

          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            공지사항
          </li>
          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            아하 소식
          </li>
          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            아하 토큰 소식
          </li>
          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            이벤트
          </li>
          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            아하 소개
          </li>
          <li className="border-t-[1px] border-solid border-gray-300 py-4 font-semibold opacity-75">
            답변자 인증
          </li>
        </ul>
      </div>

      <button className="mt-2 h-16 w-full">회원가입</button>
    </div>
  );
};

export default SideBar;
