import {useState, useEffect, useRef, useCallback, memo} from 'react';
import '../../css/sideBar/sideBar.css';
import {SidebarProps, NavItem} from "../../types/types.ts";
import LanguageSwitcher from "./languageSwitcher.tsx";

const NavItemComponent = memo(({
                                   item,
                                   isActive,
                                   onClick
                               }: {
    item: NavItem;
    isActive: boolean;
    onClick: (ref: React.RefObject<HTMLDivElement | null>, id: string) => void;
}) => {
    const handleClick = useCallback(() => {
        onClick(item.ref, item.id);
    }, [onClick, item.ref, item.id]);

    return (
        <li
            className={isActive ? 'active' : ''}
            onClick={handleClick}
        >
            {item.id === 'hero' && <span className="icon">#</span>}
            {item.id === 'about' && <span className="icon">👤</span>}
            {item.id === 'educationAndExperienceRef' && <span className="icon">🎓</span>}
            {item.id === 'projects' && <span className="icon">💼</span>}
            {item.id === 'contact' && <span className="icon">✉️</span>}

            <span className="tooltip">{item.label}</span>
        </li>
    );
});

NavItemComponent.displayName = 'NavItemComponent';

const SideBar = ({navItems, scrollToSection}: SidebarProps) => {
    const [activeSection, setActiveSection] = useState<string>('hero');
    const observersRef = useRef<IntersectionObserver[]>([]);

    // Cleanup observers on unmount
    useEffect(() => {
        return () => {
            observersRef.current.forEach(observer => {
                observer.disconnect();
            });
            observersRef.current = [];
        };
    }, []);

    useEffect(() => {

        const setupObservers = () => {

            observersRef.current.forEach(observer => {
                observer.disconnect();
            });
            observersRef.current = [];

            navItems.forEach(item => {
                if (item.ref.current) {
                    const observer = new IntersectionObserver(
                        entries => {
                            entries.forEach(entry => {
                                // If section is intersecting with at least 20% visibility
                                if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                                    setActiveSection(item.id);
                                }
                            });
                        },
                        {
                            rootMargin: '-10% 0px -80% 0px',
                            threshold: [0.2, 0.5, 0.8]
                        }
                    );

                    observer.observe(item.ref.current);
                    observersRef.current.push(observer);
                }
            });
        };

        const timer = setTimeout(() => {
            setupObservers();
        }, 100);

        return () => clearTimeout(timer);
    }, [navItems]);

    const handleSidebarItemClick = useCallback((ref: React.RefObject<HTMLDivElement | null>, id: string) => {
        setActiveSection(id);
        scrollToSection(ref);
    }, [scrollToSection]);

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item) => (
                        <NavItemComponent
                            key={item.id}
                            item={item}
                            isActive={activeSection === item.id}
                            onClick={handleSidebarItemClick}
                        />
                    ))}

                    <li className="language-item">
                        <LanguageSwitcher/>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default memo(SideBar);