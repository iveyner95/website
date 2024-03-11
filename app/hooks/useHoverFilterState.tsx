import { useState } from "react"

export const useHoverFilterState = (defaultState: string, onState: string, offState: string) => {
  const [filter, setFilter] = useState(defaultState)

  const turnFilterOn = () => {
    setFilter(onState)
  }

  const turnFilterOff = () => {
    setFilter(offState)
  }

  return {
    filter,
    turnFilterOn,
    turnFilterOff
  }
}