import {NativeModules, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import pt_br from './translation/pt_BR.json';
import en_us from './translation/en_US.json';

const resources = {
  'pt-BR': pt_br,
  'en-US': en_us,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    // const storedLanguage = await AsyncStorage.getItem('language');

    // if (storedLanguage) return callback(storedLanguage);

    let phoneLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    phoneLanguage = phoneLanguage.replace('_', '-');

    return callback(phoneLanguage);
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem('language', language);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // Habilita o módulo de inicialização do hook
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
