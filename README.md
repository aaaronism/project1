# Wordle

[Play Wordle Here](https://aaaronism.github.io/wordle-clone/)

## Objective
Guess the 5 letter word in 6 tries. You must press the enter button to submit each guess. After each guess, the tiles will turn green if you got the letter in the correct spot, yellow if the letter is in the word but in the wrong spot, and grey if it is not in the word at all.

![main board](https://github.com/aaaronism/project1/blob/main/gameplay.PNG)

## Code/Technologies Used
- HTML
- CSS
- JavaScript
- Random Word Generator API: https://random-words-api.vercel.app/word

## Hurdles
Because I am using a Random Word Generator API to generate the word set at the beginning of each board, I had to add a condition to reload the page until a word with exactly 5 letters was generated.

## Future Inclusions
- Wordle Clone will check if you entered a valid word when you click submit.
