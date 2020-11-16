const initialState = {
    currUser: {
        name: 'Reem',
        age: 50,
        createdAt: Date.now()
    },
    isModalShowing: false,
    blabla: true
}

export function rootState(state = initialState, action) {
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                currUser: action.payload
            }
        default: return state;
    }
}