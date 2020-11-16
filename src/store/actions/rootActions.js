
export const setUser = (userObj) => {
    return async dispatch => {
        try{
            const payload = userObj;
            dispatch({type: 'SET_USER', payload})
        }catch(e){
            console.log('Error while set user', e.messages);
        }
    }
}