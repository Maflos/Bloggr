import { ConstantsEN, ConstantsRO } from '../constants/Translations';
import LANGUAGES from '../constants/Translations';

//TODO: manage this state in a more nicer way
export let SELECTED_LANGUAGE: LANGUAGES = LANGUAGES.EN;

export function setLanguage(selectedLanguage: LANGUAGES) {
    console.log(selectedLanguage);
    SELECTED_LANGUAGE = selectedLanguage;
}

export function getLanguage(): LANGUAGES {
    return SELECTED_LANGUAGE;
}

export function translate(member: string): string {
    console.log(member);
    switch (+SELECTED_LANGUAGE) {
        case LANGUAGES.EN: return ConstantsEN[member];
        case LANGUAGES.RO: return ConstantsRO[member];
        default: return ConstantsEN[member];
    }
}