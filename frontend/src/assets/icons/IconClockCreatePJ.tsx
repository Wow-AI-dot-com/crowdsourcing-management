export type TSvg = {
  width?: number;
  height?: number;
};

const IconClockCreatePJ: React.FC<TSvg> = ({ ...props }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.8385 9.23271C16.8385 13.3578 13.4906 16.7056 9.36552 16.7056C5.24046 16.7056 1.89258 13.3578 1.89258 9.23271C1.89258 5.10764 5.24046 1.75977 9.36552 1.75977C13.4906 1.75977 16.8385 5.10764 16.8385 9.23271Z"
        stroke="#40405B"
        strokeWidth="1.12094"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1378 11.6087L9.82122 10.2262C9.41768 9.98707 9.08887 9.41165 9.08887 8.94086V5.87695"
        stroke="#40405B"
        strokeWidth="1.12094"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconClockCreatePJ;
