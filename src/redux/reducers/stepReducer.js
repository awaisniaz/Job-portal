const initialState = {
    visible: 1
}
const stepper = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return { visible: state.visible + 1 }

        case 'PREVIOUS_STEP':
            return { visible: state.visible - 1 }
        case 'EXIT':
            return { visible: 1 }
        default:
            return state
    }
}
export default stepper