import { useTranslation } from 'react-i18next';
import '../../css/sideBar/languageSwitcher.css'


interface Language {
    code: string;
    name: string;
    flag: string;
}

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const languages: Language[] = [
        { code: 'en', name: 'EN', flag: '/flags/en.png' },
        { code: 'ru', name: 'RU', flag: '/flags/ru.png' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (langCode: string): void => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="language-switcher">
            <div className="selected-language">
                <img
                    src={currentLanguage.flag}
                    alt={`${currentLanguage.name} flag`}
                    style={{ width: 36, height: 36 }}
                />
            </div>

            <div className="language-dropdown tooltip">
                {languages.map((lang) => (
                    <div
                        key={lang.code}
                        className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                        onClick={() => changeLanguage(lang.code)}
                    >

                        <span>{lang.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;