export const fallback = 'he';
export const supportedLocales = {
  en: {
    name: 'English',
    translationFileLoader: () => require('@equalbill/lang/en.json'),
  },
  he: {
    name: 'Hebrew',
    translationFileLoader: () => require('@equalbill/lang/he.json'),
  },
};

export const defaultNamespace = '';
export const namespaces = ['app', 'error', 'login', 'verification_code', 'update_password', 'gender_selection', 'date_picker'];
