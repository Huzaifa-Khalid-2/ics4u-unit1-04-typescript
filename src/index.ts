/**
 * The program makes the user guess the random number
 *
 * By:     Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-25
 */
import promptSync from 'prompt-sync'

const randomNumber = Math.floor(Math.random() * 6 + 1)
const counter = 0

While(true)
{
  const prompt = promptSync()
  const userString = prompt('Guess a number (1-6): ')
  const userNumber = parseInt(userString)
  counter + 1
  if (userNumber === randomNumber) {
    console.log(`Correct and it took you ${counter} tries)`)
    break
  } else if (randomNumber < userNumber) {
    console.log(`Too high guess lower`)
  } else if (randomNumber > userNumber) {
    console.log(`Too low guess lower`)
  } else {
          (`Invalid Input`)
  }
}
console.log(`\nDone`)
