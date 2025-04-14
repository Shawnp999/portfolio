import { useState, useEffect } from 'react';
import './sideBar.css';

interface NavItem {
    id: string;
    label: string;
    ref: React.RefObject<HTMLDivElement | null>;
}

interface SidebarProps {
    navItems: NavItem[];
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const SideBar = ({ navItems, scrollToSection }: SidebarProps) => {

    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {

            const scrollPosition = window.scrollY;

            for (let i = navItems.length - 1; i >= 0; i--) {
                const section = navItems[i];

                if (section.ref.current) {
                    const element = section.ref.current;
                    const offsetTop = element.offsetTop - 100;

                    if (scrollPosition >= offsetTop) {
                        if (activeSection !== section.id) {
                            setActiveSection(section.id);
                        }
                        break;
                    }
                }
            }
        };

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
                            onClick={() => scrollToSection(item.ref)}
                        >

                            {item.id === 'hero' && <span className="icon">#</span>}
                            {item.id === 'about' && <span className="icon">👤</span>}
                            {item.id === 'educationAndExperienceRef' && <span className="icon">🎓</span>}
                            {item.id === 'projects' && <span className="icon">💼</span>}

                            {item.id === 'skillsref' && <span className="icon">🛠️</span>}
                            {item.id === 'contact' && <span className="icon">✉️</span>}

                            <span className="tooltip">{item.label}</span>
                        </li>

                    ))}
                </ul>

            </nav>
        </aside>
    );
};

export default SideBar;