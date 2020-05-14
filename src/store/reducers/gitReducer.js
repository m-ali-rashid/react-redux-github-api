
export default function gitReducer(state = [], action) {
   switch (action.type) {
      case 'LOAD_GIT_SUCCESS':
         return action.gits
      default:
         return state
   }
}