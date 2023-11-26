import { useState } from 'react'

export default function usePopover() {
  const [activePopover, setActivePopover] = useState(false)
  const showPopover = () => setActivePopover(true)
  const hidePopover = () => setActivePopover(false)
  return {
    activePopover,
    showPopover,
    hidePopover
  }
}
