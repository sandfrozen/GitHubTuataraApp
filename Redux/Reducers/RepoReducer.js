export const repoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPO':
      return [
        {...action},
        ...state
      ]
    case 'SET_REPOS':
      return action.repos
    default:
      return state
  }
}