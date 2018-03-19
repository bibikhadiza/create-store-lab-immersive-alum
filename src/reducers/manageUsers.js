export default function manageUsers(state = {
  users: []
}, action){
  switch (action.type) {
    case "ADD_USER":
      let newUserState = state;
      newUserState.users.push({username: action.user.username, hometown: action.user.hometown})
      return newUserState;
      default:
      return state;
  }
}
