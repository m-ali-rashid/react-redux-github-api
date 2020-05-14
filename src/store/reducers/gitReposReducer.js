
export default function gitReposReducer(state = [], action) {
   switch (action.type) {
      case 'LOAD_GIT_REPOS_SUCCESS':
         return action.gitRepos
      default:
         return state
   }
}
