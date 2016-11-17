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

    this.data = function() {
      return [
        {
          id:1,
          name:"Kaylyn Gentry",
          address:"47 2nd Lane Mountain View, CA 94043",
          phone:"(405) 718-6173",
          image: "https://source.unsplash.com/category/people",
          favorite:true
        },
        {
          id:2,
          name:"Alanna Montgomery",
          address:"574 Lincoln Street Loveland, OH 45140",
          phone:"(294) 283-3246",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:3,
          name:"Brooklynn Mccall",
          address:"35 Manhattan Ave. Piedmont, SC 29673",
          phone:"(748) 620-4830",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:4,
          name:"Peyton Le",
          address:"95 Kent Court Suite 9 Mokena, IL 60448",
          phone:"(736) 514-1321",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:5,
          name:"Issac Cabrera",
          address:"7673 S. Chestnut Court Macomb, MI 48042",
          phone:"(918) 558-4377",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:6,
          name:"Skyler Mccoy",
          address:"354 West Street Havertown, PA 19083",
          phone:"(434) 734-0723",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:7,
          name:"Malia Edwards",
          address:"9043 Lyme Street Williamsburg, VA 23185",
          phone:"(113) 553-2521",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:8,
          name:"Skyla Gates",
          address:"932 Vernon Drive Severna Park, MD 21146",
          phone:"(399) 943-1492",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:9,
          name:"Alec Warren",
          address:"8446 Maple Ave. Delaware, OH 43015",
          phone:"(305) 849-0862",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        },
        {
          id:10,
          name:"Leonard Massey",
          address:"32 Center Lane Oak Park, MI 48237",
          phone:"(817) 229-6014",
          image: "https://source.unsplash.com/category/people",
          favorite:false
        }
      ];
    };
  });
