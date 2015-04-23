angular.module('notesApp')
  .factory('StorageFactory', function($window){

    return {
      storeNote: function(value){
        // Checks that browser accepts local storage
        if($window.Storage){
          // Store note to local storage
          $window.localStorage.setItem('notes', JSON.stringify(value));
          // return true;
        } else {
          console.log('Error storing note.');
          // return false;
        }
      },

      savedNotes: function(){
        // Checks for local storage
        if($window.Storage){
           if($window.localStorage.getItem('notes') === null){
            return [];
           } else {
            return JSON.parse($window.localStorage.getItem('notes'));
           }
        } else {
          console.log('Error returning saved notes.')
        }
      }
    };
  });
