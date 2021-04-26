import { ConstantsEN, ConstantsRO } from '../constants/Translations';
import LANGUAGES from '../constants/Translations';

export function translate(member: string, selectedLanguage: LANGUAGES): string {
    switch (+selectedLanguage) {
        case LANGUAGES.EN: return ConstantsEN[member];
        case LANGUAGES.RO: return ConstantsRO[member];
        default: return ConstantsEN[member];
    }
}