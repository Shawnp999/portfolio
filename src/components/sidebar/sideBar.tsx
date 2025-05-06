import { useState, useEffect } from 'react';
import '../../css/sideBar/sideBar.css';
import { SidebarProps } from "../../types/types.ts";
import LanguageSwitcher from "./languageSwitcher.tsx";

const SideBar = ({ navItems, scrollToSection }: SidebarProps) => {

    const [activeSection, setActiveSection] = useState<string>('hero');

    const handleSidebarItemClick = (sectionId: string, ref: React.RefObject<HTMLDivElement | null>) => {
        // set active section immediately
        setActiveSection(sectionId);
        // then scrollToSection
        scrollToSection(ref);
    };

    useEffect(() => {
        const handleScroll = () => {

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let foundActive = false;

            // chekc in document order, top to bottom
            for (const section of navItems) {

                if (section.ref.current) {
                    const element = section.ref.current;
                    const sectionTop = element.offsetTop;
                    const sectionBottom = sectionTop + element.offsetHeight;

                    // if current scroll pos is within this section
                    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                        if (activeSection !== section.id) {
                            setActiveSection(section.id);
                        }
                        foundActive = true;
                        break;
                    }
                }
            }

            if (!foundActive && navItems.length > 0 && scrollPosition < (navItems[0].ref.current?.offsetTop || 0)) {
                setActiveSection(navItems[0].id);
            }

            if (!foundActive && navItems.length > 0) {

                const lastSection = navItems[navItems.length - 1];

                const lastSectionBottom = (lastSection.ref.current?.offsetTop || 0) +
                    (lastSection.ref.current?.offsetHeight || 0);

                if (scrollPosition > lastSectionBottom) {
                    setActiveSection(lastSection.id);
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [navItems, activeSection]);

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={activeSection === item.id ? 'active' : ''}
                            onClick={() => handleSidebarItemClick(item.id, item.ref)}
                        >
                            {item.id === 'hero' && <span className="icon">#</span>}
                            {item.id === 'about' && <span className="icon">👤</span>}
                            {item.id === 'educationAndExperienceRef' && <span className="icon">🎓</span>}
                            {item.id === 'projects' && <span className="icon">💼</span>}
                            {item.id === 'contact' && <span className="icon">✉️</span>}

                            <span className="tooltip">{item.label}</span>
                        </li>
                    ))}

                    <li className="language-item">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;