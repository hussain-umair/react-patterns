// What is the problem with useEffect

import { useRef } from "react"

// Fix it with useLayoutEffect

// How and why the fix works: rendering, painting, tasks

// SSR and useLayoutEffect

const Component = ({ items }) => {
  const ref = useRef()
}
