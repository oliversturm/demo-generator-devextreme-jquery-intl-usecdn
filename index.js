const locales = ['en', 'de', 'ja', 'en-GB'];

const shorten = l => l.replace(/-.*$/, '');

// Setting locale depending on browser settings, taking into account
// available locales.
const requestedLocale = navigator.language || navigator.browserLanguage;
const setLocale =
  locales.find(i => i === requestedLocale) ||
  locales.find(i => i === shorten(requestedLocale)) ||
  'en';
DevExpress.localization.locale(setLocale);

// Alternatively, set a specific locale:
// DevExpress.localization.locale('de');

// Now we can set up some widgets:
$('#button').dxButton({
  width: '200px',
  text: "Say 'Hello world'",
  onClick: function() {
    DevExpress.ui.dialog.alert('Hello world!', '', false);
  }
});

// For date parsing when using Intl localization, please read
// https://github.com/DevExpress/DevExtreme-Intl#restrictions
$('#datebox').dxDateBox({
  width: '200px',
  placeholder: 'Please enter a date'
});
