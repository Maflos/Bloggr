import { ConstantsEN, ConstantsRO } from './LanguageConstants';
import LANGUAGES from './LanguageConstants';

//TODO: manage this state in a more nicer way
export let SELECTED_LANGUAGE: LANGUAGES = LANGUAGES.EN;

export function setLanguage(selectedLanguage: LANGUAGES) {
    SELECTED_LANGUAGE = selectedLanguage;
}

export function getLanguage(): LANGUAGES {
    return SELECTED_LANGUAGE;
}

export function translate(member: string): string {
    switch (+SELECTED_LANGUAGE) {
        case LANGUAGES.EN: return ConstantsEN[member];
        case LANGUAGES.RO: return ConstantsRO[member];
        default: return ConstantsEN[member];
    }
}