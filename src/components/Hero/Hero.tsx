// import assets:
import dataBiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import imgHero from "../images/image-hero-desktop.png";
import "./Hero.css";
import "./mediaM1000.css";
const Hero = () => {
  return (
    <>
      <div className="hero flex justify-between items-center">
        <div className="left flex flex-col justify-stretch items-end">
          <div className="content flex flex-col justify-center items-start">
            <div className="instead">
                <h1>
                Make <br />
                remote work
                </h1>
                <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.{" "}
                </p>
            </div>
            <div className="btn">
                <button className="learn-more">learn more</button>
            </div>
          </div>
          <div className="companies flex justify-around items-center">
            <img src={dataBiz.src} alt="" />
            <img src={audiophile.src} alt="" />
            <img src={meet.src} alt="" />
            <img src={maker.src} alt="" />
          </div>
        </div>
        <div className="img">
          <img src={imgHero.src} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;
