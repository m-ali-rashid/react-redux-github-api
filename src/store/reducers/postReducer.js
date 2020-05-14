const initState = {
   posts: [
      // { id: 1, title: 'Some Title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde magni quas vitae repudiandae voluptates nihil amet corrupti commodi suscipit eveniet magnam dicta corporis asperiores culpa nesciunt earum, autem dolores? Illum eligendi perspiciatis excepturi soluta nisi, neque amet rerum fugiat magnam quos nobis repudiandae dolorem eaque ipsam beatae odio ducimus possimus?' },
      // { id: 2, title: 'Someother Title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde magni quas vitae repudiandae voluptates nihil amet corrupti commodi suscipit eveniet magnam dicta corporis asperiores culpa nesciunt earum, autem dolores? Illum eligendi perspiciatis excepturi soluta nisi, neque amet rerum fugiat magnam quos nobis repudiandae dolorem eaque ipsam beatae odio ducimus possimus?' },
      // { id: 3, title: 'Also a title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde magni quas vitae repudiandae voluptates nihil amet corrupti commodi suscipit eveniet magnam dicta corporis asperiores culpa nesciunt earum, autem dolores? Illum eligendi perspiciatis excepturi soluta nisi, neque amet rerum fugiat magnam quos nobis repudiandae dolorem eaque ipsam beatae odio ducimus possimus?' },
      // { id: 4, title: 'just Title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde magni quas vitae repudiandae voluptates nihil amet corrupti commodi suscipit eveniet magnam dicta corporis asperiores culpa nesciunt earum, autem dolores? Illum eligendi perspiciatis excepturi soluta nisi, neque amet rerum fugiat magnam quos nobis repudiandae dolorem eaque ipsam beatae odio ducimus possimus?' },
      // { id: 5, title: 'just Title', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde magni quas vitae repudiandae voluptates nihil amet corrupti commodi suscipit eveniet magnam dicta corporis asperiores culpa nesciunt earum, autem dolores? Illum eligendi perspiciatis excepturi soluta nisi, neque amet rerum fugiat magnam quos nobis repudiandae dolorem eaque ipsam beatae odio ducimus possimus?' }
   ],
}

const rootReducer = (state = initState, action) => {
   switch (action.type) {
      case "CREATE_POST":
      return [...state,{...action.post}]
      default:
      return state
   }
}

export default rootReducer