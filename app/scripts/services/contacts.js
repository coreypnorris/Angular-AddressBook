'use strict';

/**
 * @ngdoc service
 * @name addressBookApp.contacts
 * @description
 * # contacts
 * Service in the addressBookApp.
 */
angular.module('addressBookApp')
  .service('contacts', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // service is just a constructor function
    // that will be called with 'new'
    var initialData = [
        {
          id:1,
          firstname:"Kaylyn",
          lastname:"Gentry",
          address1:"47 2nd Lane",
          address2:"",
          city:"Mountain View",
          state:"CA",
          postalcode:"94043",
          phone:"(405) 718-6173",
          email:"Treff1940@gustr.com",
          dateofbirth:"9/26/1976",
          image: "https://images.unsplash.com/photo-1415471659643-57043b686f87?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2576adcec53bb1ee41558ee540ac44b9",
          favorite:true
        },
        {
          id:2,
          firstname:"Alanna",
          lastname:"Montgomery",
          address1:"574 Lincoln Street",
          address2:"",
          city:"Loveland",
          state:"OH",
          postalcode:"45140",
          phone:"(294) 283-3246",
          email:"Oron1931@rhyta.com",
          dateofbirth:"2/18/1978",
          image: "https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d9de63d1fe9f4b69113e0e4ac8c51cb7",
          favorite:true
        },
        {
          id:3,
          firstname:"Brooklynn",
          lastname:"Mccall",
          address1:"35 Manhattan Ave.",
          address2:"",
          city:"Piedmont",
          state:"SC",
          postalcode:"29673",
          phone:"(748) 620-4830",
          email:"Shek1992@superrito.com",
          dateofbirth:"4/7/1979",
          image: "https://images.unsplash.com/photo-1419814193935-ddb634a0ddda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=95f5c890ba053fd79c11e9efa64d069c",
          favorite:true
        },
        {
          id:4,
          firstname:"Peyton",
          lastname:"Le",
          address1:"95 Kent Court Suite 9",
          address2:"",
          city:"Mokena",
          state:"IL",
          postalcode:"60448",
          phone:"(736) 514-1321",
          email:"Junde1984@cuvox.de",
          dateofbirth:"10/19/1980",
          image: "https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=385252eab7f2c18442122bf4fa1f27b8",
          favorite:false
        },
        {
          id:5,
          firstname:"Issac",
          lastname:"Cabrera",
          address1:"7673 S. Chestnut Court",
          address2:"",
          city:"Macomb",
          state:"MI",
          postalcode:"48042",
          phone:"(918) 558-4377",
          email:"Maded1939@fleckens.hu",
          dateofbirth:"7/27/1981",
          image: "https://images.unsplash.com/photo-1455719103652-8c015f564e2b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c1c9ab6e96f38142103b590c5ac0f5c0",
          favorite:false
        },
        {
          id:6,
          firstname:"Skyler",
          lastname:"Mccoy",
          address1:"354 West Street",
          address2:"",
          city:"Havertown",
          state:"PA",
          postalcode:"19083",
          phone:"(434) 734-0723",
          email:"Minuncen1969@teleworm.us",
          dateofbirth:"4/5/1983",
          image: "https://images.unsplash.com/photo-1470405614677-53b0279b9c4d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d5adf7f264f007e8ce5093956e49e8aa",
          favorite:false
        },
        {
          id:7,
          firstname:"Malia",
          lastname:"Edwards",
          address1:"9043 Lyme Street",
          address2:"",
          city:"Williamsburg",
          state:"VA",
          postalcode:"23185",
          phone:"(113) 553-2521",
          email:"Aber1950@dayrep.com",
          dateofbirth:"6/13/1983",
          image: "https://images.unsplash.com/photo-1435773658541-98cedf12d3cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3cc1103d98a780f0769fd0ed500d526a",
          favorite:false
        },
        {
          id:8,
          firstname:"Skyla",
          lastname:"Gates",
          address1:"932 Vernon Drive",
          address2:"",
          city:"Severna Park",
          state:"MD",
          postalcode:"21146",
          phone:"(399) 943-1492",
          email:"Entin1964@cuvox.de",
          dateofbirth:"10/15/1985",
          image: "https://images.unsplash.com/photo-1464860528572-9fa53459b242?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2607e29708623e7f58fd689052be1a7a",
          favorite:false
        },
        {
          id:9,
          firstname:"Alec",
          lastname:"Warren",
          address1:"8446 Maple Ave.",
          address2:"",
          city:"Delaware",
          state:"OH",
          postalcode:"43015",
          phone:"(305) 849-0862",
          email:"Boymor1932@superrito.com",
          dateofbirth:"12/6/1985",
          image: "https://images.unsplash.com/photo-1463760959829-d829ea46e191?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=776b5e78caf89c1a7cd884539158e122",
          favorite:false
        },
        {
          id:10,
          firstname:"Leonard",
          lastname:"Massey",
          address1:"32 Center",
          address2:"",
          city:"Lane Oak Park",
          state:"MI",
          postalcode:"48237",
          phone:"(817) 229-6014",
          email:"Whathe1948@armyspy.com",
          dateofbirth:"1/13/1986",
          image: "https://images.unsplash.com/photo-1414604582943-2fd913b3cb17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=b45a6518e3293e754a16b3c8f2515134",
          favorite:false
        }
      ];

    this.data = function() {
      return initialData;
    };

    this.save = function(newContact) {
      newContact.id = initialData.length + 1;
      initialData.push(newContact);
    };
  });
