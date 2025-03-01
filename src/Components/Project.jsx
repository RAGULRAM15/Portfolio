import freeshipping from "../Images/free-shipping-bar-img.webp";
// import login_register from "../Images/Screenshot 2024-06-18 074711.png";
// import mobile_view from "../Images/Screenshot 2024-06-18 081338.png";
import seldirect from "../Images/sel-direct-app-img.webp";
import { Fade } from "react-awesome-reveal";

export default function Project() {
  return (
    <section className="w-full h-full mb-10 pt-10 flex flex-col" id="project">
      <div className="flex items-center justify-evenly mb-2">
        <hr className="w-2/5" />
        <p className="text-base md:text-2xl font-semibold text-center pl-4 pr-4">
          Latest Project
        </p>
        <hr className="w-2/5" />
      </div>
      <Fade direction="left" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:ml-10 mt-5 mb-5 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div className="w-full md:w-auto">
              <h1 className="md:text-lg text-end font-semibold">
              Business Management Software
              </h1>
              <p className="text-justify text-xs md:text-base">
              Designed and implemented a comprehensive software solution tailored for business management. Built a user-friendly front-end and robust back-end components. Maintained database performance by creating efficient stored procedures and views.
              </p>
              {/* <a
                href=""
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://apps.shopify.com/direct-selling-dev{" "}
                </p>
              </a> */}
            </div>
            <div className="pl-5 hidden md:block">
              <img
                className="rounded-lg border-2 border-solid border-gray-500"
                src={seldirect}
                width={500}
                alt="seldirect-img"
              ></img>
            </div>
          </div>
          <div className="w-2/5 hidden md:block"></div>
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="w-2/5 hidden md:block"></div>
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:mr-10 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div className="pr-5 hidden md:block">
              <img
                className="rounded-lg border-2 border-solid border-gray-500"
                src={freeshipping}
                width={700}
                alt="freeshipping"
              ></img>
            </div>
            <div className="w-full md:w-auto">
              <h1 className="md:text-lg font-semibold">
              Inventory and Sales Management System
              </h1>
              <p className="text-justify text-xs md:text-base">
              Developed a desktop-based application for managing inventory and sales operations.
              Designed and optimized database tables, stored procedures, and other database objects to meet business needs.
              </p>
              {/* <a
                href="https://apps.shopify.com/avail-free-shipping"
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://apps.shopify.com/avail-free-shipping
                </p>
              </a> */}
            </div>
          </div>
        </div>
      </Fade>
      {/* <Fade direction="left" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="md:w-3/5 w-4/5 text-sm p-5 md:ml-10 mt-5 mb-5 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div className="w-full md:w-auto">
              <h1 className="md:text-lg text-end font-semibold">
                Register/Login Website
              </h1>
              <p className="text-justify text-xs md:text-base">
                To create a login and register page using React and Firebase
                Authentication, first set up Firebase in your project. Create an
                authentication context to manage state globally. Develop login
                and register components using Firebase's authentication methods.
                Integrate these components into your main app, optionally using
                React Router for navigation. This ensures a seamless user
                authentication experience.
              </p>
              <a
                href="https://login-register-project-chi.vercel.app/login"
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://login-register-project-chi.vercel.app/
                </p>
              </a>
            </div>
            <div className="pl-5 hidden md:block">
              <img
                className="rounded-lg border-2 border-solid border-gray-500"
                src={login_register}
                width={1500}
                alt="freeshipping"
              ></img>
            </div>
          </div>
          <div className="w-2/5 hidden md:block"></div>
        </div>
      </Fade>
      <Fade direction="right" duration={1000}>
        <div className="flex items-center justify-evenly">
          <div className="w-2/5 hidden md:block"></div>
          <div className="w-4/5 md:w-3/5 text-sm p-5 md:mr-10 flex items-center bg-gray-950 rounded-3xl ease-in duration-300 hover:scale-95 projects">
            <div className="pr-5 hidden md:block">
              <img
                className="rounded-lg border-2 border-solid border-gray-500"
                src={mobile_view}
                width={400}
                alt="freeshipping"
              ></img>
            </div>
            <div className="w-full md:w-auto">
              <h1 className="md:text-lg font-semibold">Mobile View Design</h1>
              <p className="text-justify text-xs md:text-base">
                When designing for mobile, focus on responsive layouts with
                clear, touch-friendly forms and buttons. Use CSS for flexible
                styling and ensure seamless integration of Firebase
                authentication for secure user interactions on smaller screens.
              </p>
              <a
                href="https://mobile-view-project.vercel.app/"
                target="_blank"
                className="flex text-gray-500"
                rel="noreferrer"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke=""
                  transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                      stroke="#6B7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="pl-1 text-xs md:text-base">
                  https://mobile-view-project.vercel.app/{" "}
                </p>
              </a>{" "}
            </div>
          </div>
        </div>
      </Fade> */}
    </section>
  );
}
