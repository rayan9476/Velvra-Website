const ratings = [
  {
    id: 1,
    label: "Bad",
    icon: (active) => (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-full h-full cursor-pointer"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          fill={active ? "#FDF8F0" : "none"}
        />
        <circle cx="14" cy="16" r="1.5" fill={active ? "#C9A84C" : "#BBBBBB"} />
        <circle cx="26" cy="16" r="1.5" fill={active ? "#C9A84C" : "#BBBBBB"} />
        <path
          d="M14 27 Q20 22 26 27"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Good",
    icon: (active) => (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-full h-full cursor-pointer"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          fill={active ? "#FDF8F0" : "none"}
        />
        <circle cx="14" cy="16" r="1.5" fill={active ? "#C9A84C" : "#BBBBBB"} />
        <circle cx="26" cy="16" r="1.5" fill={active ? "#C9A84C" : "#BBBBBB"} />
        <path
          d="M14 25 Q20 30 26 25"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Love it",
    icon: (active) => (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="w-full h-full cursor-pointer"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          fill={active ? "#FDF8F0" : "none"}
        />
        <path
          d="M13 15 Q14 13 16 15"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M24 15 Q25 13 27 15"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 24 Q20 32 27 24"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M15 19 Q17 17 14 16"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M25 19 Q23 17 26 16"
          stroke={active ? "#C9A84C" : "#BBBBBB"}
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export default ratings;
