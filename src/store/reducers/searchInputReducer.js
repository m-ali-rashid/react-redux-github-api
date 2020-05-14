
export default function inputReducer(state = '', action) {
   switch (action.type) {
      case 'SEARCH_INPUT':
         return action.input
      default:
         return state
   }
}
