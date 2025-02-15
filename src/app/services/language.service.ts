import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('es');
  currentLang$ = this.currentLang.asObservable();

  constructor() {
    // Initialize with browser language or default to Spanish
    const browserLang = navigator.language;
    this.setLanguage(browserLang.startsWith('en') ? 'en' : 'es');
  }

  setLanguage(lang: string) {
    document.documentElement.lang = lang;
    this.currentLang.next(lang);
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}
