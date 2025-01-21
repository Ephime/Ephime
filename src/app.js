import { useState, useEffect } from 'react';
import Nav from './components/nav';
import Language from './components/language';
import Experience from './components/experience';
import Sidebar from './components/sidebar';
import BackgroundVideo from './components/backgroundVideo';
import './app.css';
import './scrollbar.css';
import './fonts.css';
import axios from 'axios';
import Main from './main';

const App = () => {
    // const supportedLanguages = ['af','ar','cs','de','el','en','es','fr','he','hi','ja','ko','nl','pt','ru','zh'];
    const supportedLanguages = ['en', 'ja'];

    const detectBrowserLanguage = () => {
        const browserLanguage = navigator.language || navigator.languages[0];
        const primaryLanguage = browserLanguage.split('-')[0];
        return supportedLanguages.includes(primaryLanguage) ? primaryLanguage : 'en';
    };

    const [content, setContent] = useState([]);
    const [language, setLanguage] = useState(detectBrowserLanguage());
    const [contentType, setContentType] = useState('web');

    useEffect(() => {
        const getJSON = async () => {
            const result = await axios.get(`JSON/content_${language}.json`);
            setContent(result.data);
        };

        getJSON();
    }, [language]);

    return (
        <>
            <BackgroundVideo />
            <Main />
            <Nav content={content} type={setContentType} />
            <Language chooseLanguage={setLanguage} currentLanguage={language} />
            <Sidebar type={contentType} display={content} />
            <div id="experience">
                <Experience content={content} type={contentType} />
            </div>
        </>
    );
};

export default App;
