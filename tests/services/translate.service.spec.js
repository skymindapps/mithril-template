const o = require("mithril/ospec/ospec");
require('../setup');

// should load from environment file and get all language files.
// then it should use the first file as baseline
// - check that each has the same count as the first
// - check that each has the same key as the first
// this requires a setup with environment file
// perhaps we are talking about some settings file instead that can be replaced at runtime in deploy environment?
const en = require('../../src/assets/i18n/en.json');
const da = require('../../src/assets/i18n/da.json');
o.spec('Translate', function() {
  o.spec('File keys', function() {
    o('Count', function() {
      o(Object.keys(en.values).length).equals(Object.keys(da.values).length);
    });

    o.spec('Match', function() {
      Object.keys(en.values).forEach(key => {
        o(key, function() {
          o(da.values[key]).notEquals(undefined);
        });
      });
    });
  })
});