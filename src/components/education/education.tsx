import { memo, useMemo } from 'react';
import '../../css/education/education.css';
import 'react-vertical-timeline-component/style.min.css';
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../../css/globalCSS.css';
import { useTranslation } from 'react-i18next';

const TimelineIcon = memo((props: { iconClass: string }) => (
    <i className={props.iconClass}></i>
));

const EducationAndExperience = memo(() => {
    const { t } = useTranslation();

    const styles = useMemo(() => ({
        work: {
            icon: { background: '#4fd1c5', color: '#fff' },
            content: { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #4fd1c5' },
            arrow: { borderRight: '7px solid #1e1e1e' }
        },
        project: {
            icon: { background: '#9f7aea', color: '#fff' },
            content: { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #9f7aea' },
            arrow: { borderRight: '7px solid #1e1e1e' }
        },
        education: {
            icon: { background: '#f56565', color: '#fff' },
            content: { background: '#1e1e1e', color: '#d0d0d0', boxShadow: '0 3px 0 #f56565' },
            arrow: { borderRight: '7px solid #1e1e1e' }
        }
    }), []);

    return (
        <section id="education-section">
            <div className="common-header">
                {t('education.sectionTitle')}
            </div>

            <p className="common-description">
                {t('education.sectionDescription')}
            </p>

            <VerticalTimeline lineColor="#333" animate={true}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={styles.education.content}
                    contentArrowStyle={styles.education.arrow}
                    date={t('education.education1.period')}
                    iconStyle={styles.education.icon}
                    icon={<TimelineIcon iconClass="bi bi-mortarboard-fill" />}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.education1.degree')}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{t('education.education1.institution')}</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles.work.content}
                    contentArrowStyle={styles.work.arrow}
                    date={t('education.work1.period')}
                    iconStyle={styles.work.icon}
                    icon={<TimelineIcon iconClass="bi bi-briefcase-fill" />}
                >
                    <h3 className="vertical-timeline-element-title">{t('education.work1.title')}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{t('education.work1.company')}</h4>
                    <p>
                        {t('education.work1.skills')}
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--project"
                    contentStyle={styles.project.content}
                    contentArrowStyle={styles.project.arrow}
                    date={t('education.project1.period')}
                    iconStyle={styles.project.icon}
                    icon={<TimelineIcon iconClass="bi bi-code-slash" />}
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
                    contentStyle={styles.project.content}
                    contentArrowStyle={styles.project.arrow}
                    date={t('education.project2.period')}
                    iconStyle={styles.project.icon}
                    icon={<TimelineIcon iconClass="bi bi-phone" />}
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
});

export default EducationAndExperience;