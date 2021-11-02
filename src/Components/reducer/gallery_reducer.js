export const gallery_reducer = (state, action) => {

        if (action.type === 'OPEN_GALLERY') {
            return {
                ...state,
                isGallery: true
            }
        }

        if (action.type === 'CLOSE_GALLERY') {
            return {
                ...state,
                isGallery: false
            }
        }
}