import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    // Check if there is a winner
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // There is no winner
    return null
}

export const checkEndGame = (newBoard) => {
    // Check if there is a draw
    // If there is no empty square
    return newBoard.every(square => square !== null)
}