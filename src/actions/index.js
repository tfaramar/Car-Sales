//build an action creator for each event that might happen in the app that would cause the state to be updated

export const addFeature = (feature) => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export const removeFeature = (feature) => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    }
}