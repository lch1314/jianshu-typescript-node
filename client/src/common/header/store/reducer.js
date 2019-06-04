const defaultState = {
    focused: false
}

export default (state=defaultState, action) => {
    if(action.type === 'serach_focus') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if(action.type === 'serach_blur') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state;
}