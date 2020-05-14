
export default function gitUserReducer(state = [], action) {
   switch (action.type) {
      case 'LOAD_GIT_USER_SUCCESS':
         return action.gitUser
      default:
         return state
   }
}