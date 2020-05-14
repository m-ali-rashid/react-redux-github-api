
export default function userReducer(state = '', action) {
   switch (action.type) {
      case 'SEARCH_USER':
         return action.user
      // case 'SEARCH_USER':
      //    return [...state, {...action.user}]
      default:
         return state
   }
}
