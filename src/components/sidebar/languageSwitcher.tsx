import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/sideBar/languageSwitcher.css';

interface Language {
    code: string;
    name: string;
    displayName: string;
    flag: string;
}

const LanguageSwitcher: React.FC = () => {
    const {i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const languages: Language[] = [
        {code: 'en', name: 'EN', displayName: 'English', flag: '/flags/en.png'},
        {code: 'ru', name: 'RU', displayName: 'Русский', flag: '/flags/ru.png'}
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changeLanguage = (langCode: string): void => {
        if (langCode === i18n.language) {
            setIsOpen(false);
            return;
        }

        document.body.classList.add('language-transition');

        // allow react to update, short delay
        setTimeout(() => {
            i18n.changeLanguage(langCode);

            setTimeout(() => {
                document.body.classList.remove('language-transition');
            }, 200);
        }, 50);

        setIsOpen(false);
    };

    const toggleDropdown = () => {

        if (isOpen && isMobile) {
            setIsOpen(false);

            document.querySelector('.language-dropdown')?.classList.add('force-hide');

            setTimeout(() => {
                document.querySelector('.language-dropdown')?.classList.remove('force-hide');
            }, 200);

        } else {
            setIsOpen(!isOpen);
        }
    };

    const handleToggle = (nextIsOpen: boolean) => {
        setIsOpen(nextIsOpen);
    };

    const CustomToggle = React.forwardRef<HTMLDivElement, any>(({onClick}, ref) => (
        <div
            className="selected-language"
            onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
                onClick(e);
            }}
            ref={ref}
        >
            <img
                src={currentLanguage.flag}
                alt={`${currentLanguage.name} flag`}
                className="flag-icon"
                style={{width: 32, height: 32}}
            />
        </div>
    ));

    return (
        <div className="language-switcher">
            <Dropdown
                align="end"
                show={isOpen}
                onToggle={handleToggle}
            >
                <Dropdown.Toggle as={CustomToggle} id="language-dropdown"/>

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