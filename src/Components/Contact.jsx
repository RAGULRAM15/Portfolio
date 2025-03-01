import { useState } from "react";
import axios from "axios";
import gitlogo from "../Images/pngegg.png";
import linkedin from "../Images/linkedin-logo-png-2048.png";
import twitter from "../Images/Twitter-X-White-Logo-PNG.png";
import gmail from "../Images/Gmail_Logo_White_128px.png";
import tele from "../Images/moblie-icon.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(0);
  const maildata = {
    service_id: "service_qsznvrk",
    template_id: "template_d2lpqmy",
    user_id: "yhHP-_a_oB-8zqumL",
    template_params: {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "RAGUL R",
      message: message,
    },
  };
  const EmailSend = async (e) => {
    e.preventDefault();
    setEmailStatus(1);
   
    try {
      
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        maildata
      );
      if (response.data === "OK") {
        setEmailStatus(2);
      }
    } catch (err) {
    
      setEmailStatus(3);
    } finally {
      setTimeout(() => {
        setEmailStatus(0);
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
      }, 5000);
    }
  };
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="contact">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="md:w-1/5 w-4/5 text-base md:text-2xl font-semibold text-center pl-2 pr-2">
          Contact me
        </p>
        <hr className="w-3/5" />
      </div>
      <div className="flex items-center justify-center flex-col w-full mt-10 mb-10">
        <form
          className="flex items-center justify-center flex-col md:w-2/4 w-11/12 border border-solid border-white pt-2 pb-5 rounded-xl"
          onSubmit={EmailSend}
        >
          <h2 className="mb-1 italic font-semibold">Get in touch</h2>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="email">Your Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              required
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper w-full flex items-center justify-center">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              rows={4}
              cols={15}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            className="pl-6 pr-6 p-1 mb-2 mt-2 rounded-2xl italic font-bold border border-solid border-gray hover:bg-gray-950"
            type="submit"
          >
            Submit
          </button>
          {emailStatus === 0 && (
            <p className="mb-2 text-transparent">{"___"}</p>
          )}
          {emailStatus === 3 && (
            <p className="mb-2 text-center">Your message has been not sent!</p>
          )}
          {emailStatus === 2 && (
            <p className="mb-2 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {emailStatus === 1 && (
            <p className="mb-2 text-center">
              Please wait! We are sending your message.
            </p>
          )}
        </form>
      </div>
      <hr className="w-full" />
      <div className="flex items-center justify-center mt-2 mb-2 w-full">
        <div className="flex md:items-center justify-evenly mb-5 w-3/5 md:w-3/5 flex-col md:flex-row md:ml-5">
          <a
            href="mailto:ragulram1505@gmail.com"
            className="p-2 flex items-center"
          >
            <img
              className="w-6 md:w-10 p-1 bg-gray-700 rounded-full flex mr-2"
              src={gmail}
              width={35}
              alt="mail-logo"
            ></img>
            <p className="text-xs md:text-base">ragulram1505@gmail.com</p>
          </a>
          <a href="tel:+919944695368" className="p-2 flex items-center">
            <img
              className="w-6 md:w-10 p-1 bg-gray-700 rounded-full flex mr-2"
              src={tele}
              width={35}
              alt="tele-logo"
            ></img>
            <p className="text-xs md:text-base">+919944695368</p>
          </a>
        </div>
        <div className="flex items-center justify-end mb-5 md:w-2/5 mt-10 md:mt-0 md:mr-10">
          <a
            href="https://github.com/RAGULRAM15/"
            target="_blank"
            rel="noreferrer"
            className="p-1 bg-gray-700 rounded-full m-2"
          >
            <img
              className="w-4 md:w-8"
              src={gitlogo}
              width={30}
              alt="git-logo"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/ragul-ram-002072183/"
            className="p-1 bg-gray-700 rounded-full m-2"
          >
            <img
              className="w-4 md:w-8"
              src={linkedin}
              width={30}
              alt="linkedin-logo"
            ></img>
          </a>
          <a
            href="https://x.com/RAGULRAM_R"
            className="p-2 bg-gray-700 rounded-full m-2"
          >
            <img
              className="w-2 md:w-6"
              src={twitter}
              width={20}
              alt="twitter-logo"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}
