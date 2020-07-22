const NextI18Next = require('next-i18next').default;

// config: https://github.com/isaachinman/next-i18next#options
module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['de'],
    localeSubpaths: {
        en: 'en',
        de: 'de'
    }
});
