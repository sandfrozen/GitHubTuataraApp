export const addRepo = repo => (
  {
    type: 'ADD_REPO',
    ...repo,
  }
);