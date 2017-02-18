function clickFunction(){
          document.getElementById('win-lose').innerHTML = ''
          document.getElementById('missed-letters').innerHTML = 'Missed Letters<br>';
          var words = ['glass', 'napkin', 'straw', 'laptop', 'beer', 'phone', 'keyboard', 'shampoo', 'conditioner', 'document', 'script', 'program', 'microphone', 'mouse', 'controller', 'hat', 'fork', 'plate', 'spoon', 'fan', 'almonds', 'printer', 'bowl'];
          var guessedLetters = [];
          var guessesRemaining = 12;
          var guessBlanks = '';
          var missedLetters = '';
          var alphabet = "abcdefghijklmnopqrstuvwxyz";
          var alphabetArr = (alphabet.split("")); 
          var secretWord = words[ Math.floor( Math.random() * words.length ) ];
          var len = secretWord.length;
          var correctRemaining = len;

          for(i = 0; i < len - 1; i++){
            guessBlanks += '_ '
          }
          guessBlanks += '_'
          
          document.getElementById('game').innerHTML = guessBlanks;

          document.getElementById('remaining').innerHTML = 'Guesses remaining: ' + guessesRemaining;
          //console.log(secretWord);

          document.onkeyup = function(event) {

              userGuess = event.key.toLowerCase();
              //console.log(secretWord.indexOf(userGuess));
              if ( secretWord.indexOf(userGuess) == -1) {
                if (missedLetters.indexOf(userGuess) != -1 || alphabetArr.indexOf(userGuess) == -1){

                }
                else if(guessesRemaining == 1){
                  guessesRemaining--;
                  document.getElementById('remaining').innerHTML = 'Guesses remaining: ' + guessesRemaining;
                  //alert('You lose!');
                  document.getElementById('win-lose').innerHTML = '<div class="alert alert-danger"><strong>You Lose!</strong></div>';
                  document.onkeyup = function() {

                      return false;
                  }
              return false;
                }
                else if( missedLetters == '') {
                  missedLetters = userGuess;
                  guessesRemaining--;
                  document.getElementById('remaining').innerHTML = 'Guesses remaining: ' + guessesRemaining;
                }
                else{
                  missedLetters += (', ' + userGuess);
                  guessesRemaining--;
                  document.getElementById('remaining').innerHTML = 'Guesses remaining: ' + guessesRemaining;
                }
                document.getElementById('missed-letters').innerHTML = 'Missed Letters<br>' +missedLetters;
              }
              else{
                if( guessedLetters.indexOf(userGuess) == -1){
                  for(var i = 0; i < len; i++){                  
                    if (secretWord[i] == userGuess){
                      guessedLetters.push(userGuess);
                      correctRemaining--;
                      guessBlanks = guessBlanks.substr(0, 2*i) + userGuess.toUpperCase() + guessBlanks.substr(2*i + 1);
                      //guessBlanks[2*i] = userGuess;
                      document.getElementById('game').innerHTML = guessBlanks;
                      if (correctRemaining == 0){
                         //alert('You win!');
                         document.getElementById('win-lose').innerHTML = '<div class="text-center alert alert-success"><h1><strong>You Win!!</strong></h1></div>';
                         document.onkeyup = function() {

                              return false;
                          }
                      
                      }
                    }
                  }
                }


            }


          }




    }