'use strict';


var app = angular.module('App', []);


app.controller('enquiryCtrl', function($scope, $http) {

    $scope.user = {};

    $scope.ph_numbr = /^\+?\d{10}$/;
    $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    console.log("inside cntrl");
    $scope.submitEnquiry = function(data) {
        console.log("data", data);
        var userdata = data;

        $http({

            method: 'POST',
            url: 'https://sokt.io/XvQy3AyXcywptzmvonw1/personal-e7adventure-booking',
            data: userdata

        }).then(function successCallback(response) {

            alert("Send Successfully")

        }, function errorCallback(response) {

            alert("Error, Try Again!");

        });

        $scope.user = {};
    }



});



app.controller('enquiryCntrl', function($scope, $http) {

    $scope.user = {};

    $scope.ph_numbr = /^\+?\d{10}$/;
    $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    console.log("inside cntrl");
    $scope.submitEnquiryz = function(data) {
        console.log("data", data);
        var userdata = data;

        $http({

            method: 'POST',
            url: 'https://sokt.io/6KVw9LYxjDTcA4EGrTN1/personal-e7-adventure-contact',
            data: userdata

        }).then(function successCallback(response) {

            alert("Send Successfully")

        }, function errorCallback(response) {

            alert("Error, Try Again!");

        });

        $scope.user = {};
    }



});