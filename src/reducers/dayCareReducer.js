const defaultState = {
  daycares: []
}

  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case "GET-DAYCARE-INFO":
        return {...state, daycares: payload};

      default:
          return state;
}}
