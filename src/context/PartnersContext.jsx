import PropTypes from 'prop-types'
import { createContext, useCallback, useReducer } from 'react'
import { initPartnersState, statePartners } from '../reducer/partnersReducer'
import { initLoadState, stateLoad } from '../reducer/loadReducer'

export const PartnersContext = createContext()

export const PartnersProvider = ({ children }) => {
  const [state_partners, dispatch_partners] = useReducer(
    statePartners,
    initPartnersState
  )
  const [state_load, dispatch_load] = useReducer(stateLoad, initLoadState)

  const getAllRestaurants = useCallback(async () => {
    try {
      dispatch_load({ type: 'SET_LOAD_TRUE' })
      const response = await fetch(
        `${import.meta.env.VITE_URL_API}/v1/user/restaurants`
      )
      const data = await response.json()
      dispatch_partners({ type: 'SET_PARTNERS', payload: data.restaurants })
    } catch (error) {
      console.log(error)
    } finally {
      dispatch_load({ type: 'SET_LOAD_FALSE' })
    }
  }, [])

  return (
    <PartnersContext.Provider
      value={{
        state_partners,
        state_load,
        dispatch_partners,
        getAllRestaurants
      }}
    >
      {children}
    </PartnersContext.Provider>
  )
}

PartnersProvider.propTypes = {
  children: PropTypes.node.isRequired
}
