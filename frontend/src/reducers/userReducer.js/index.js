const defaultState = {
    user: { username: "", type: "" },
    id: "",
    room: null
}
  
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case "SET_HOST":
            return {
                ...state, 
                user: action.payload,
                room: action.room
            };
        case "SET_PLAYER":
            return {
                ...state, 
                user: action.payload,
                room: action.room
            };
        case "SET_ID":
            return {
                ...state, 
                id: action.payload.id
            };    
    
    }
};

export default userReducer;