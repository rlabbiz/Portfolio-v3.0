import './App.css';
import { Header } from './header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Home } from './home/Home';

let data = null

function App() {
  console.log('data');

  // handle language switch
  const [language, setLanguage] = useState({language: 'en', isLoading: true});

  const handleLanguage = () => {
    setLanguage((prev) => {
      if (prev.language === 'en') {
        return {language: 'fr'  , isLoading: true};
      } else {
        return {language: 'en', isLoading: true}
      }
    })
  }

  // fetch data from data.json based on language
  const fetchData = async () => {
    await fetch(`/language/${language.language}.json`, {})
      .then(res => res.json())
      .then(res => {
        data = res;
        setLanguage(prev => ({...prev, isLoading: false}));
      })
  }

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
    
    // eslint-disable-next-line 
  }, [language.language]);

  if (language.isLoading) {
    return <div>Loading...</div>
  }

  return (
    
    <Router>
      <Header 
        languageObj={{
          language: language.language,
          handleLanguageSwitch: handleLanguage,
        }}
        data={data}
      />
      <Routes>
        <Route 
          path="/" exact 
          element={
            <Home
              data={data}
            />
          }
        />

      </Routes>
    </Router>
  );
}


export default App;
