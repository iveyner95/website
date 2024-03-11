import { useHoverFilterState } from "../../hooks/useHoverFilterState"

const FILTER_ON = 'grayscale(1)'
const FILTER_OFF = 'grayscale(0)'

export const useGrayscaleIconState = () => {
  const { filter, turnFilterOn, turnFilterOff } = useHoverFilterState(FILTER_ON, FILTER_ON, FILTER_OFF)

  return {
    filter,
    turnFilterOn,
    turnFilterOff
  }
}