export const repoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPO':
      return [
        {...action},
        ...state
      ]
    default:
      return state
  }
}