import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component{

    render(){
        const strings = {
            en: 'english',
            it:  'italiano'
        }

        return(
        <LanguageContext.Consumer>
            {(language)=>{
           return <p>{strings[language]}</p>
            }}
        </LanguageContext.Consumer>
        )
    }
}