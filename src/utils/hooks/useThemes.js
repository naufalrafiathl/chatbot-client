import { useState, useEffect } from "react";

const useThemes = (defaultThemes) => {
  const [themes, setThemes] = useState(defaultThemes);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const configString = urlParams.get('config');
    if (configString) {
      try {
        const config = JSON.parse(configString);
        setThemes((prevThemes) => ({ ...prevThemes, ...config }));
      } catch (e) {
        console.error('Invalid JSON config:', e);
      }
    }
  }, []);

  return themes;
};

export default useThemes;
