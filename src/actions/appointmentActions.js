const loadAppointment = () => dispatch => {
// debugger
  fetch("http://localhost:3001/appointments")
  .then(resp=>resp.json())
  .then(data=>{
    if(data){
      dispatch({type:'GET-APPOINTMENT-INFO',payload:data})}}
    )
};


export default {
  loadAppointment,
}
