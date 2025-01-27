export const saveGameToStorage = ({ board, turn }) => {
    // Save game here
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    // Reset game here
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}