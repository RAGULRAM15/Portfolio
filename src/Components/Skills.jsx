import htmllogo from "../Images/html5-logo-31813.png";
import csslogo from "../Images/pngwing.com.png";
import javascriptlogo from "../Images/javascript-39395.png";
import reactlogo from "../Images/react native_icon.png";
import nodejs from "../Images/NET core.png";
import mongodb from "../Images/sql server.png";
import firebase from "../Images/Azure.png";
import expresslogo from "../Images/git.png";

export default function Skills() {
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="skill">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="md:w-min text-base md:text-2xl font-semibold text-center pl-5 pr-5">
          Skills
        </p>
        <hr className="w-3/5" />
      </div>
      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-1 gap-12 md:pl-44 md:pr-44 pl-14 pr-14 w-full h-full mt-5 md:mb-5 mb-5 grid-cols-1">
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={htmllogo} width={70} alt="html-logo"></img>
            <p>HTML</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={csslogo} width={70} alt="html-logo"></img>
            <p>CSS</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img
              src={javascriptlogo}
              width={150}
              height={150}
              alt="html-logo"
            ></img>
            <p>JavaScript</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={reactlogo} width={70} alt="html-logo"></img>
            <p>React Js</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-1 gap-12 md:pl-72 md:pr-72 pl-14 pr-14 w-full h-full md:mt-2 mb-5 grid-cols-1">
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={nodejs} width={100} alt="html-logo"></img>
            <p>.Net Core</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={mongodb} width={70} alt="html-logo"></img>
            <p>Sql Server</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={firebase} width={60} height={60} alt="html-logo"></img>
            <p>Azure</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-1 md:grid-rows-1 gap-12 pl-14 pr-14 w-full h-full md:mt-2 mb-5 grid-cols-1 padding-express">
        <div className="flex items-center justify-center flex-col bg-gray-950 w-full h-full rounded-2xl pt-5 pb-5 border-2 border-solid border-gray">
          <div className="flex items-center justify-center flex-col w-3/5 h-3/5 ease-in duration-300 hover:scale-110">
            <img src={expresslogo} width={70} alt="html-logo"></img>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
