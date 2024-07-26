export const initPartnersState = { partners: [] }
export const statePartners = (state, action) => {
  switch (action.type) {
    case 'SET_PARTNERS':
      return { ...state, partners: action.payload }

    default:
      return state
  }
}
