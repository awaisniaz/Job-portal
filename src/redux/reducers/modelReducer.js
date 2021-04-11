const initialState = {
    visible: false
}
const ModelVisible = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDE':
            return { visible: false }
        case 'VISIBLE':
            return { visible: true }
        default:
            return state
    }
}
export default ModelVisible