import React, { useState, useRef, useEffect } from "react";
import Eng from "../../images/flag.svg"; 
import Eng2 from "../../images/flag2.svg"; 
import Eng3 from "../../images/flag3.svg"; 

const languages = [
  { code: "tr", label: "TR", flag: Eng },
  { code: "en", label: "EN", flag: Eng2 },
  { code: "de", label: "DE", flag: Eng3 }
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState(languages[1]); 
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <li className="langu custom-dropdown" ref={dropdownRef}>
      <div
        className="selected-option"
        onClick={() => setOpen(!open)}
      >
        <img src={selectedLang.flag} alt={selectedLang.label} />
      </div>
      {open && (
        <ul className="dropdown-options">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleSelect(lang)}>
              <img src={lang.flag} alt={lang.label} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default LanguageSelector;
