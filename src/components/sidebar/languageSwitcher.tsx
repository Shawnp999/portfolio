// src/components/sidebar/languageSwitcher.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/sideBar/languageSwitcher.css';

// Define languages outside component to prevent recreation on each render
const languages = [
    { code: 'en', name: 'EN', displayName: 'English', flag: '/flags/en.png' },
    { code: 'ru', name: 'RU', displayName: 'Русский', flag: '/flags/ru.png' }
];

const CustomToggle = React.forwardRef<HTMLDivElement, any>(({ onClick, currentLanguage }, ref) => (
    <div
        className="selected-language"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        ref={ref}
    >
        <img
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} flag`}
            className="flag-icon"
            style={{ width: 32, height: 32 }}
        />
    </div>
));

CustomToggle.displayName = 'CustomToggle';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const previousLanguageRef = useRef(i18n.language);
    const resizeTimeoutRef = useRef<number | null>(null);

    // Find current language
    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        const debouncedResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeTimeoutRef.current = window.setTimeout(handleResize, 150);
        };

        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
                resizeTimeoutRef.current = null;
            }
        };
    }, []);

    const changeLanguage = (langCode: string): void => {
        if (langCode === i18n.language) {
            setIsOpen(false);
            return;
        }

        if (previousLanguageRef.current !== langCode) {
            document.body.classList.add('language-transition');

            setTimeout(() => {
                i18n.changeLanguage(langCode);
                previousLanguageRef.current = langCode;

                setTimeout(() => {
                    document.body.classList.remove('language-transition');
                }, 200);
            }, 50);
        }

        setIsOpen(false);
    };

    // const toggleDropdown = () => {
    //     if (isOpen && isMobile) {
    //         setIsOpen(false);
    //
    //         const dropdown = document.querySelector('.language-dropdown');
    //         if (dropdown) {
    //             dropdown.classList.add('force-hide');
    //
    //             setTimeout(() => {
    //                 dropdown?.classList.remove('force-hide');
    //             }, 200);
    //         }
    //     } else {
    //         setIsOpen(!isOpen);
    //     }
    // };

    return (
        <div className="language-switcher">
            <Dropdown
                align="end"
                show={isOpen}
                onToggle={setIsOpen}
            >
                <Dropdown.Toggle
                    as={CustomToggle}
                    id="language-dropdown"
                    currentLanguage={currentLanguage}
                />

                <Dropdown.Menu className="language-dropdown">
                    {languages.map((lang) => (
                        <Dropdown.Item
                            key={lang.code}
                            className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <span>{isMobile ? lang.displayName : lang.name}</span>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcher;