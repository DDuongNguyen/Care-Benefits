const loadUser = () => dispatch => {

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  };

  fetch("http://localhost:3001/", config)
};

//
//
// const signIn = user => dispatch => {
//
//   const config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(user)
//   };
//
//   fetch("http://localhost:3000/login", config)
//     .then(resp => resp.json())
//     .then(data => {
//       if(!data.errors){
//         localStorage.token = data.token;
//         alert("token: "+ localStorage.token)
//         dispatch({type:"SIGNIN",payload: data.user});
//     }
//       else{
//         alert("wrong cats mang")
//       }});
// };

export default {
  // signUp,
  // signIn
}
