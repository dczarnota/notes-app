angular.module('notesApp')
  .controller('MainController', function($scope, StorageFactory){

    // All notes stored here
    $scope.notes = [];

    // Get any previously saved notes from local storage
    var notes = StorageFactory.savedNotes();
    $scope.notes = notes;

    // Used to store current note text (used in $scope.editNote)
    var currentNote;

    // Add new notes to local storage
    $scope.addNote = function(){
      $scope.notes.push( {noteText: $scope.noteText, editStatus: false} );
      StorageFactory.storeNote($scope.notes);      
      
      // Reset input form field (note: field must be filled in; blank notes are not accepted)
      $scope.noteText = '';
    }

    // Remove note from local storage
    $scope.removeNote = function(index){
      $scope.notes.splice(index, 1);
      // Update local storage to reflect the removal of a note
      StorageFactory.storeNote($scope.notes);
    }

    $scope.editNote = function(index){
      // Toggle editing status to true for current note
      $scope.notes[index].editStatus = true;
      currentNote = $scope.notes[index].noteText;
      return currentNote;
    }

    $scope.updateNote = function(index, note){

      // Updated note cannot be blank
      if(note.noteText === undefined){
        return false;
      }

      // Store new note text
      $scope.notes[index].noteText = note.noteText;
      // Reset edit status
      $scope.notes[index].editStatus = false;
      // Update local storage
      StorageFactory.storeNote($scope.notes);
    }

    $scope.cancelEdit = function(index){
      // Reset edit status
      $scope.notes[index].editStatus = false;
      // Reset note text and disregard any form text
      $scope.notes[index].noteText = currentNote;
      // Update local storage with editing status
      StorageFactory.storeNote($scope.notes);
    }
  });
