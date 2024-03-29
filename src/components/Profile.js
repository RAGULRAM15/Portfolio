import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import vimalpic from "../assets/ragulpic.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-info">
      <div className="profile-details">
        <h1>Hey ! I'm</h1>
        <h1 className="profile-name">RAGUL R</h1>
        <h2>ReactJS Developer</h2>
        <div>
          <a
            href="https://github.com/RAGULRAM15"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ragul-ram-002072183/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ragulram1025@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail />
          </a>
        </div>
        {/* <a
          href="https://drive.google.com/file/d/11hIaRS_oPsh11ClYU5j0wNLMPNMwvArh/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          download="vimalrajv_resume.pdf"
        >
          <button>Get Resume</button>
        </a> */}
      </div>
      <img className="profile-image" src={vimalpic} alt="Vimal Raj V" />
    </div>
  );
};

export default Profile;
