var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',
      {
        templateUrl: "views/welcome.html",
        controller: "AppCtrl"
      }
    )
    .when('/tutor',
      {
        templateUrl: "views/tutor.html",
        controller: "AppCtrl"
      }
    )
    .when('/calendar',
      {
        templateUrl: "views/calendar.html",
        controller: "AppCtrl"
      }
    )
    .when('/about',
      {
        templateUrl: "views/about.html",
        controller: "AppCtrl"
      }
    )
    .when('/contact',
      {
        templateUrl: "views/contact.html",
        controller: "AppCtrl"
      }
    )

});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
})


app.factory('Team', function(){
  var Team = {};
  Team.tutors = [

  {
      name: "Hannah Holm",
      img: "https://lh3.googleusercontent.com/-lSTZqpmSozQ/AAAAAAAAAAI/AAAAAAAAAe8/d8NIB7gAPsQ/s180-c-k-no/photo.jpg",
      age: "26",
      experience: "6 years",
      first_language: "English",
      second_language: "French",
      service_type: "Conversation",
      rate: "25",
      location:"Cache Valley",

  },

  {
      name: "Mark Fitch",
      img: "http://www.medfordhistorical.org/wp-content/uploads/2013/02/portrait_timothyfitch.jpg",
      age: "23",
      experience: "4 Years",
      first_language: "English",
      second_language: "Fench",
      service_type: "Grammar, Conversation",
      rate: "22",
      location:"France",

  },

  {
      name: "",
      img: "",
      age: "",
      experience: "",
      first_language: "",
      second_language: "",
      service_type: "",
      rate: "",
      location:"",

  },

  {
      name: "",
      img: "",
      age: "",
      experience: "",
      first_language: "",
      second_language: "",
      service_type: "",
      rate: "",
      location:"",

  },

  {
      name: "",
      img: "",
      age: "",
      experience: "",
      first_language: "",
      second_language: "",
      service_type: "",
      rate: "",
      location:"",

  },

  {
      name: "",
      img: "",
      age: "",
      experience: "",
      first_language: "",
      second_language: "",
      service_type: "",
      rate: "",
      location:"",

  },


  ];

return Team;

})

function TeamCrtl($scope, Team){
  $scope.team = Team;
}