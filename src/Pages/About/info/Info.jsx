import { Link } from "react-router-dom";
import InfoImg from "../../../assets/About me.svg"; // Rename your custom image accordingly
import { Tilt } from "react-tilt";

function Info() {
  const defaultOptions = {
    reverse: true,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="info">
      <div className="InfoContent">
        <h6 className="Sec_Title">ـــــ Personal Info</h6>
        <h2>Looking for a Smart Digital Solution? I Can Help!</h2>
        <p>
          Hello! I’m <strong>Rohit Rathod</strong>, an Android & Web Developer passionate about
          building functional, beautiful, and impactful software experiences. Whether it's a full-featured
          Android app or a sleek, interactive website, I focus on delivering smooth user experiences,
          clean UI, and scalable backend logic. Let’s create something innovative together!
        </p>
        <Link
          className="CvBtn"
          target="_blank"
          rel="noopener noreferrer"
          to="https://drive.google.com/file/d/your-updated-resume-link/view?usp=sharing"
          data-tooltip="CV"
          role="button"
          aria-label="Download CV document"
        >
          <div className="button-wrapper">
            <div className="text">Download CV</div>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2em"
                height="2em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                ></path>
              </svg>
            </span>
          </div>
        </Link>
      </div>

      <Tilt options={defaultOptions} className="info__image">
        <img
          src={InfoImg}
          alt="Rohit Rathod profile illustration"
          aria-describedby="image-description"
        />
        <span hidden id="image-description">
          Cartoon style illustration of an Android & web developer
        </span>
      </Tilt>
    </div>
  );
}

export default Info;
