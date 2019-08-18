export const addRepo = context => (
  {
    type: 'ADD_REPO',
    ...context
  }
)

export const setRepos = repos => (
  {
    type: 'SET_REPOS',
    repos,
  }
);