import './education.css';

const educationAndExperience = () => {

    return (
        <section id="education-section">
            <div className="education-container">


                <h3>Education and work experience</h3>


                <div className="edu-exp">
                    <div className="education">
                        <h3>Education</h3>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h4>Bachelor's Degree in Computer Science</h4>
                            <p className="timeline-year"> 123 13232</p>
                            <p>University Name</p>
                        </div>
                    </div>

                    <div className="experience">
                        <h3>Experience</h3>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h4>Senior Frontend Developer</h4>
                            <p className="timeline-year"> 123 12314</p>
                            <p>Company X</p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h4>Frontend Developer</h4>
                            <p className="timeline-year">20234 213123</p>
                            <p>Company Y</p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default educationAndExperience;