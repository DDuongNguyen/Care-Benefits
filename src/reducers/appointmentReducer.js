const defaultState = {
  appointments: []
}

  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case "GET-APPOINTMENT-INFO":
        return {...state, daycares: payload};

      default:
          return state;
}}
