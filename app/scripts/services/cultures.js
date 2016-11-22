'use strict';

/**
 * @ngdoc service
 * @name addressBookApp.cultures
 * @description
 * # cultures
 * Service in the addressBookApp.
 */
angular.module('addressBookApp')
  .service('cultures', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.data = function() {
      return [
        {
          "id": "4",
          "name": "zh-Hans",
          "LanguageCountryRegion":"Chinese (Simplified)"
        },
        {
          "id": "1031",
          "name": "de-DE",
          "LanguageCountryRegion":"German (Germany)"
        },
        {
          "id": "1033",
          "name": "en-US",
          "LanguageCountryRegion":"English (United States)"
        },
        {
          "id": "1036",
          "name": "fr-FR",
          "LanguageCountryRegion":"French (France)"
        },
        {
          "id": "1040",
          "name": "it-IT",
          "LanguageCountryRegion":"Italian (Italy)"
        },
        {
          "id": "1041",
          "name": "ja-JP",
          "LanguageCountryRegion":"Japanese (Japan)"
        },
        {
          "id": "1042",
          "name": "ko-KR",
          "LanguageCountryRegion":"Korean (Korea)"
        },
        {
          "id": "1045",
          "name": "pl-PL",
          "LanguageCountryRegion":"Polish (Poland)"
        },
        {
          "id": "1046",
          "name": "pt-BR",
          "LanguageCountryRegion":"Portuguese (Brazil)"
        },
        {
          "id": "1049",
          "name": "ru-RU",
          "LanguageCountryRegion":"Russian (Russia)"
        },
        {
          "id": "1051",
          "name": "sk-SK",
          "LanguageCountryRegion":"Slovak (Slovakia)"
        },
        {
          "id": "1055",
          "name": "tr-TR",
          "LanguageCountryRegion":"Turkish (Turkey)"
        },
        {
          "id": "3082",
          "name": "es-ES",
          "LanguageCountryRegion":"Spanish (Spain, International Sort)"
        },
        {
          "id": "31748",
          "name": "zh-Hant",
          "LanguageCountryRegion":"Chinese (Traditional)"
        },
      ];
    };
  });
