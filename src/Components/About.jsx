import Mainimg from "../Images/4707122.jpg";
export default function About() {
  return (
    <section className="w-full h-full mt-5 flex flex-col" id="about">
      <div className="flex items-center justify-evenly">
        <hr className="w-3/5" />
        <p className="text-base md:text-2xl font-semibold text-center pl-4 pr-4">
          About
        </p>
        <hr className="w-3/5" />
      </div>
      <div className="flex items-center justify-evenly mt-10 mb-10">
        <div className="w-1/5 flex items-center justify-end"><img src={Mainimg} alt="profile" width={200} className="rounded-2xl border-2 border-solid border-gray-500"></img></div>
        <div className="w-3/5 text-xs md:text-sm text-justify">	Experienced Full Stack Developer with a proven track record in developing and maintaining  software solutions for business operations. Skilled in React.js, .NET technologies, and SQL Server, with expertise in integrating front-end and back-end components.
        Seeking a challenging role to leverage my skills and contribute to organizational growth while continuing to enhance my professional development
</div>        </div>
    </section>
  );
}
