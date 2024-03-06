import Image from "next/image";
import ContactMe from "./shared/contactme";
import Portfolio from "./shared/portfolio";
import HireMe from "./shared/hireme";
import MyWork from "./shared/mywork";

export default function Home() {
  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
        <div className="container">
          <a className="logo" href="#">

          </a>
          <ul className="nav" >
            <li className="item">
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="item">
              <a className="link" href="#testmonial">
                Testmonial
              </a>
            </li>
            <li className="item">
              <a className="link" href="#blog">
                Blog
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
            <li className="item ml-md-3">
              <a href="components.html" className="btn btn-primary">
                Components
              </a>
            </li>
          </ul>
          <a
            // href="javascript:void(0)"
            id="nav-toggle"
            className="hamburger hamburger--elastic"
          >
            <div className="hamburger-box" title="Ongoing endeavor">
              <div className="hamburger-inner" />
            </div>
          </a>
        </div>
      </nav>
      {/* End of Page Navbar */}
      {/* page header */}
      <header id="home" className="header">
        <div className="overlay" />
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Rahul</span>
          </h1>
          <p className="header-subtitle">FULL STACK WEB DEVELOPER</p>
          <button className="btn btn-primary" disabled title="Ongoing endeavor">Visit My Works</button>
        </div>
      </header>
      {/* end of page header */}
      {/* about section */}
      <section className="section pt-0" id="about">
        {/* container */}
        <div className="container text-center">
          {/* about wrapper */}
          <div className="about">
            <div className="about-img-holder">
              <img
                src="/images/coding-2.webp"
                className="about-img"
              />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                Experienced software developer proficient in .NET, .NET MVC, JavaScript, React.js, Azure, MSSQL, HTML, and CSS, with a proven track record of delivering high-quality code.
                With over 5 years of experience in the software industry, I thrive in collaborative environments, where I contribute to teams by providing clean and efficient solutions. I am eager to leverage my skills to tackle new challenges and drive impactful results in your organization.

              </p>

              <div className="row">

                {/* <div className="col-md-1">    <img className="link" src="/images/React-icon.svg" title="React Js" width={50}></img></div> */}
                <div className="col-2 col-sm-1 col-md-1"> <img className="icon" src="/images/React-icon.svg" title="React Js" width={50}></img></div>
                <div className="col-2 col-sm-1  col-md-1"> <img src="/images/csharpicon.png" title="C#" width={50}></img></div>
                <div className="col-2  col-sm-1  col-md-1"> <img src="/images/javascript-icon.png" title="Javascript" width={50}></img></div>
                <div className="col-2  col-sm-1  col-md-1"> <img src="/images/azure-icon.png" title="Azure" width={50}></img></div>
                <div className="col-2  col-sm-1  col-md-1"> <img src="/images/html-icon.webp" title="HTML" width={50}></img></div>
                <div className="col-2  col-sm-1  col-md-1"> <img src="/images/css-icon.png" title="CSS" width={50}></img></div>
                <div className="col-2  col-sm-1  col-md-1"> <img src="/images/sql-icon.png" title="SQL" width={20}></img></div>
              </div>
              <a className="btn-rounded btn btn-outline-primary mt-4" href='/files/RahulRautResume.pdf' download>Download CV </a>
            </div>

          </div>

          {/* end of about wrapper */}
        </div>
        {/* end of container */}
      </section>{" "}
      {/* end of about section */}
      <Portfolio></Portfolio>
      <HireMe></HireMe>
      <MyWork></MyWork>
    </>
  );
}
