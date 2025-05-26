import { Link } from "react-router-dom";
import "./style.scss";
import ParticlesComponent from "../../Components/particles/particles";
import rohit from "../../Assets/rohit.jpg";

function Home() {
  return (
    <section className="Home d-flex align-items-center justify-content-sm-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div
            className="home-data col-lg-6"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="title">
              I am
              <span className="name"> Rohit Rathod</span>
              <span className="role"> Android & Web Developer</span>
            </h1>
            <p className="home-description">
              I’m an India-based Android App Developer and Web Developer with a
              passion for building responsive, user-centric applications. I enjoy
              solving real-world problems with clean code, powerful tools, and
              thoughtful design. My goal is to develop digital products that make
              a meaningful impact.
            </p>
            <Link
              to="/about"
              className="Btn"
              aria-label="Learn more about Rohit Rathod"
            >
              <span>More about me </span>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Image */}
          <div
            className="home-image col-lg-6 mt-5 mt-lg-0"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img
              src={rohit} // update path if needed
              alt="Rohit Rathod"
              className="profile-img"
            />
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
}

export default Home;
