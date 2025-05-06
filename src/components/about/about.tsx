import '../../css/about/about.css';
import '../../css/globalCSS.css'
import {useInDevelopmentLink} from "../utils/inDev/developmentContext.tsx";

const About = () => {

    const handleInDevelopmentClick = useInDevelopmentLink();


    return (
        <section id="about-section">

            <div className="about-container">

                <div className="about-content">
                    <div className="common-header mb-4">About Me</div>

                    <div className="common-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nisi eget augue hendrerit
                            hendrerit.
                        </p>

                        <p>
                            Nulla nec arcu non velit dapibus feugiat vitae sit amet risus. Fusce quis tellus laoreet sem
                            dignissim sodales. Donec malesuada ex id purus bibendum hendrerit. Suspendisse tincidunt
                            molestie nisi. Etiam at dolor finibus, dignissim lacus ut, iaculis diam. Fusce sed nunc dui.
                        </p>

                        <p>
                            Nulla nec arcu non velit dapibus feugiat vitae sit amet risus. Fusce quis tellus laoreet sem
                            dignissim sodales. Donec malesuada ex id purus bibendum hendrerit. Suspendisse tincidunt
                            molestie nisi. Etiam at dolor finibus, dignissim lacus ut, iaculis diam. Fusce sed nunc dui.
                        </p>

                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Nam maximus neque vel porta suscipit. Fusce scelerisque enim nec nibh egestas imperdiet.
                        </p>
                    </div>
                </div>

                <div className="second-cont d-flex justify-content-center justify-content-sm-start">
                    <button
                        className="btn btn-secondary w-100 w-sm-99"
                        style={{opacity: 0.5}}
                        onClick={handleInDevelopmentClick}
                    >
                        Embed/animation
                    </button>
                </div>


            </div>


            {/* Background decoration */}
            {/*<div className="about-bg-decoration">*/}
            {/*    <div className="code-block">*/}
            {/*        <div className="code-line"><span className="code-keyword">const</span> developer = {'{'}</div>*/}
            {/*        <div className="code-line">  name: <span className="code-string">'Shawn'</span>,</div>*/}
            {/*        <div className="code-line">  role: <span className="code-string">'Frontend Developer'</span>,</div>*/}
            {/*        <div className="code-line">  loves: [<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>, <span className="code-string">'Design'</span>]</div>*/}
            {/*        <div className="code-line">{'}'}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default About;