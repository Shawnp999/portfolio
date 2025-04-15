import './education.css';
import 'react-vertical-timeline-component/style.min.css';
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const EducationAndExperience = () => {
    // Work color
    const workIconStyle = { background: '#4fd1c5', color: '#fff' };
    const workContentStyle = { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #4fd1c5' };

    // Project color
    const projectIconStyle = { background: '#9f7aea', color: '#fff' };
    const projectContentStyle = { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #9f7aea' };

    // Education color
    const educationIconStyle = { background: '#f56565', color: '#fff' };
    const educationContentStyle = { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #f56565' };

    return (
        <section id="education-section">
            <h2>Experience & Education</h2>
            <p className="section-desc">
                My professional journey and educational background
            </p>



            <VerticalTimeline lineColor="#333" animate={true}>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={educationContentStyle}
                    contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
                    date="04/2022 - Present"
                    iconStyle={educationIconStyle}
                    icon={<i className="bi bi-mortarboard-fill"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of London | London, UK</h4>
                </VerticalTimelineElement>

                {/* Work Experience */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={workContentStyle}
                    contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
                    date="07/2023 - Present"
                    iconStyle={workIconStyle}
                    icon={<i className="bi bi-briefcase-fill"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">MTO GCC | Tashkent, Uzbekistan</h4>
                    <p>
                        SharePoint SPFx, React, Microsoft Graph API, Frontend Development
                    </p>
                </VerticalTimelineElement>

                {/* Projects */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={projectContentStyle}
                    contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
                    date="02/2024 - 10/2024"
                    iconStyle={projectIconStyle}
                    icon={<i className="bi bi-code-slash"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Consulting Platform</h3>
                    <h4 className="vertical-timeline-element-subtitle">websmartcons.com</h4>
                    <p>
                        Frontend Development with Bootstrap 5, Django, JavaScript
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={projectContentStyle}
                    contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
                    date="09/2024 - Present"
                    iconStyle={projectIconStyle}
                    icon={<i className="bi bi-phone"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Bill Splitting Mobile App</h3>
                    <h4 className="vertical-timeline-element-subtitle">Independent Project</h4>
                    <p>
                        React Native, Zustand, Git, CI/CD
                    </p>
                </VerticalTimelineElement>

                {/* Education */}


                {/*<VerticalTimelineElement*/}
                {/*    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
                {/*    icon={<i className="bi bi-check-lg"></i>}*/}
                {/*/>*/}
            </VerticalTimeline>
        </section>
    );
};

export default EducationAndExperience;