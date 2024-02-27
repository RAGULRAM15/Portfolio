import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FiCodesandbox } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Get in touch</h3>
      <a href="https://github.com/RAGULRAM15" target="_new">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ragul-ram-002072183/"
        target="_new"
      >
        <GrLinkedin />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ragulram1025@gmail.com"
        target="_new"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default Footer;
