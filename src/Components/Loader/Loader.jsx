import "./style.scss";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(20, 20, 30, 0)",
  },
  visible: (custom) => ({
    opacity: 1,
    pathLength: 1,
    fill: "rgba(20, 20, 30, 0.15)",
    transition: {
      pathLength: { delay: custom * 0.6, type: "spring", duration: 4, bounce: 0 },
      opacity: { delay: custom * 0.6, duration: 1 },
      fill: { duration: 2 },
    },
  }),
};

const Loader = ({ initial }) => {
  return (
    <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <div className="svg-frame">
        <svg
          className="B-loader"
          height="280px"
          width="500px"
          viewBox="0 0 400 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dark-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f0f2d" />
              <stop offset="100%" stopColor="#1a1a2e" />
            </linearGradient>

            {/* Only apply glow to the stroke paths */}
            <filter id="stroke-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#1a1a2e" floodOpacity="0.5" />
            </filter>
          </defs>

          {[0, 1, 2].map((i) => {
            const baseX = 10 + i * 120;
            const controlX = 80 + i * 120;
            const arcEndX = 110 + i * 120;
            const tailX = 115 + i * 120;
            return (
              <>
                {/* Background fill (no glow) */}
                <motion.path
                  key={`bg-${i}`}
                  d={`M${baseX},150 L${baseX},10 L${controlX},10 Q${arcEndX},10 ${arcEndX},40 Q${arcEndX},70 ${controlX},70 L${baseX},70 M${controlX},70 L${tailX},150`}
                  stroke="url(#dark-gradient)"
                  strokeWidth="12"
                  fill="rgba(20, 20, 30, 0.15)"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
                {/* Stroke with glow */}
                <motion.path
                  key={`stroke-${i}`}
                  d={`M${baseX},150 L${baseX},10 L${controlX},10 Q${arcEndX},10 ${arcEndX},40 Q${arcEndX},70 ${controlX},70 L${baseX},70 M${controlX},70 L${tailX},150`}
                  stroke="#101020"
                  strokeWidth="4"
                  fill="transparent"
                  filter="url(#stroke-glow)"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
              </>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Loader;
