import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { translations } from '../i18n/translations';

type Languages = keyof typeof translations;
type TranslationKeys = keyof typeof translations.es;

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: TranslationKeys): string {
    const currentLang = this.languageService.getCurrentLang() as Languages;
    return translations[currentLang][key];
  }
}
