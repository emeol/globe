import { createContext, useContext } from 'react'
import { useHouse } from '../hooks/useHouse'

const HouseContext = createContext(null)

export const HouseProvider = ({ children }) => {
  const houseState = useHouse()

  return <HouseContext.Provider value={houseState}>{children}</HouseContext.Provider>
}

export const useHouseContext = () => {
  const context = useContext(HouseContext)

  if (!context) {
    throw new Error('useHouseContext must be used within HouseProvider')
  }

  return context
}

export default HouseContext
