import * as gitApi from '../../api/gitApi'

export function getGitRepos(route){
   return (dispatch) => {
      return gitApi.getGit(route).then(gits => {
         dispatch({ type: "LOAD_GIT_REPOS_SUCCESS", gitRepos:gits })
      }).catch(error => { throw error; })
   }
}


   // https://api.github.com/zen
   // https://api.github.com/user
   // https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
   // https://api.github.com/search/repositories?q=react+js&page=2
   // https://api.github.com/search/users?q=m-ali-rashid
   // https://api.github.com/gists/public
   // https://api.github.com/users
   // https://api.github.com/users/mojombo
   // https://api.github.com/users/mojombo/received_events
   // https://api.github.com/users/mojombo/gists
   // https://api.github.com/users/mojombo/gists/cda3a6a1d039398f09ee
