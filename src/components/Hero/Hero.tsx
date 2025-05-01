// import assets:
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
const Hero = () => {
    return (
        <>
            <div className="hero flex flex-">
                <div className="left">
                    <div className="content">
                        <h1>
                        Make <br />
                        remote work
                        </h1>
                        <p>
                        Get your team in sync, no matter your location. Streamline
                        processes, create team rituals, and watch productivity soar.{" "}
                        </p>
                        <button className="learn-more">lear more</button>
                    </div>
                    <div className="companies">
                        <img src={databiz.src} alt="" />
                        <img src={audiophile.src} alt="" />
                        <img src={meet.src} alt="" />
                        <img src={maker.src} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;