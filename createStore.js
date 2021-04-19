export const createStore = (reducer, initialState) => {
    let state = initialState
    return {
        getState: () => state,
        dispatch: (action) => {state = reducer(state, action)}
    }
}
