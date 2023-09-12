export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          strokeWidth="10"
          stroke="#007bff"
          fill="none"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="35"
          strokeWidth="10"
          stroke="#ccc"
          fill="none"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
          />
        </circle>
      </svg>
    </div>
  );
}
