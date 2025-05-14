import {useState, useEffect, useRef, useCallback, memo, useMemo} from 'react';
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
            {/*{item.id === 'about' && <span className="icon">👤</span>}*/}
            {item.id === 'projects' && <span className="icon">💼</span>}
            {item.id === 'educationAndExperienceRef' && <span className="icon">🎓</span>}
            {item.id === 'contact' && <span className="icon">✉️</span>}

            <span className="tooltip">{item.label}</span>
        </li>
    );
});

NavItemComponent.displayName = 'NavItemComponent';

const SideBar = memo(({navItems, scrollToSection}: SidebarProps) => {

    const [activeSection, setActiveSection] = useState<string>('hero');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const visibleSectionsRef = useRef(new Set<string>());

    const observerOptions = useMemo(() => ({
        threshold: 0.1,
        rootMargin: '-30% 0px -30% 0px'
    }), []);

    useEffect(() => {

        const cleanup = () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };

        cleanup();

        const callback = (entries: IntersectionObserverEntry[]) => {
            let needsUpdate = false;

            entries.forEach(entry => {
                const id = entry.target.id;

                if (entry.isIntersecting) {
                    visibleSectionsRef.current.add(id);
                    needsUpdate = true;
                } else if (visibleSectionsRef.current.has(id)) {
                    visibleSectionsRef.current.delete(id);
                    needsUpdate = true;
                }
            });

            // Only proceed if we need to update
            if (!needsUpdate) return;

            let newActiveSection = '';

            // Iterate through navItems
            for (const item of navItems) {
                if (visibleSectionsRef.current.has(item.id)) {
                    newActiveSection = item.id;
                }
            }

            if (newActiveSection && newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        // intersectionObserver
        observerRef.current = new IntersectionObserver(callback, observerOptions);

        // Observe all section elements
        navItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observerRef.current?.observe(element);
            }
        });

        return cleanup;

    }, [navItems, observerOptions, activeSection]);

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
});

SideBar.displayName = 'SideBar';

export default SideBar;