export const navbar_reducer = (state, action) => {
        if (action.type === 'OPEN_SIDEBAR') {
            return {
                ...state,
                sidebar: true
            }
        }

        if (action.type === 'CLOSE_SIDEBAR') {
            return {
                ...state,
                sidebar: false
            }
        }
}