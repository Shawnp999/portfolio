import '../../css/education/education.css';
import 'react-vertical-timeline-component/style.min.css';
// @ts-ignore
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import '../../css/globalCSS.css';
import {useTranslation} from 'react-i18next';

const EducationAndExperience = () => {


    const workIconStyle = {background: '#4fd1c5', color: '#fff'};
    const workContentStyle = {background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #4fd1c5'};

    const projectIconStyle = {background: '#9f7aea', color: '#fff'};
    const projectContentStyle = {background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #9f7aea'};

    const educationIconStyle = {background: '#f56565', color: '#fff'};
    const educationContentStyle = {background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #f56565'};

    const {t} = useTranslation();


    return (
        <section id="education-section">

            <div className="common-header ">
                {t('education.sectionTitle')}
            </div>

            <p className="common-description ">
                {t('education.sectionDescription')}
            </p>

            <VerticalTimeline lineColor="#333" animate={true}>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={educationContentStyle}
                    contentArrowStyle={{borderRight: '7px solid #1e1e1e'}}
                    date={t('education.education1.period')}
                    iconStyle={educationIconStyle}
                    icon={<i className="bi bi-mortarboard-fill"></i>}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.education1.degree')}</h3>

                    <h4 className="vertical-timeline-element-subtitle">{t('education.education1.institution')}</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={workContentStyle}
                    contentArrowStyle={{borderRight: '7px solid #1e1e1e'}}
                    date={t('education.work1.period')}
                    iconStyle={workIconStyle}
                    icon={<i className="bi bi-briefcase-fill"></i>}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.work1.title')}</h3>

                    <h4 className="vertical-timeline-element-subtitle">{t('education.work1.company')}</h4>
                    <p>
                        {t('education.work1.skills')}
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={projectContentStyle}
                    contentArrowStyle={{borderRight: '7px solid #1e1e1e'}}
                    date={t('education.project1.period')}
                    iconStyle={projectIconStyle}
                    icon={<i className="bi bi-code-slash"></i>}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.project1.title')}</h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        {t('education.project1.subtitle')} (
                        <a href="https://websmartcons.com/"
                           target="_blank" rel="noopener noreferrer">
                            {t('education.project1.website')}
                        </a>
                        )
                    </h4>

                    <p>
                        {t('education.project1.skills')}
                    </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={projectContentStyle}
                    contentArrowStyle={{borderRight: '7px solid #1e1e1e'}}
                    date={t('education.project2.period')}
                    iconStyle={projectIconStyle}
                    icon={<i className="bi bi-phone"></i>}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.project2.title')}</h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        {t('education.project2.subtitle')} (
                        <a href="https://play.google.com/store/apps/details?id=com.scannsplit.mobapp&hl=en"
                           target="_blank" rel="noopener noreferrer">
                            {t('education.project2.linkText')}
                        </a>
                        )
                    </h4>

                    <p>
                        {t('education.project2.skills')}
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default EducationAndExperience;