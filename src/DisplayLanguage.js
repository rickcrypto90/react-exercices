import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {

    const strings = {
        en: 'english',
        it: 'italiano'
    }

    const language = useContext(LanguageContext);

    return (
        <p>{strings[language]}</p>
    )
}
