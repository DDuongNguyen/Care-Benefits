const loadDayCare = () => dispatch => {
  // debugger

  fetch("http://localhost:3001/daycare")
  .then(resp=>resp.json())
  .then(data=>{
    if (data){
    // debugger
  dispatch({type:'GET-DAYCARE-INFO',payload:data})}
}
)
};

export default {
loadDayCare
  // signIn
}
