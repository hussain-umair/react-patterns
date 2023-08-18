import { useRef, useCallback, useEffect, useState, memo } from "react"

const FantasticClosure = () => {
  const [state, setState] = useState('')
  const ref = useRef()

  useEffect(() => {
    ref.current = () => {
      console.log(state)
    }
  }, [state])

  const onClick = useCallback(() => {
    ref.current()
  }, [])

  return (
    <div>
      <input name="fantastic input" value={state} onChange={(e) => setState(e.target.value)}/>
      {/* <HeavyComponent title='submit' onClick={onClick}/> */}
      <HeavyComponentMemo title='submit' onClick={onClick}/>
    </div>
  )
}

export default FantasticClosure

const HeavyComponent = ({ title, onClick }) => {
  console.log('this is heavyComponent')
  return <button onClick={onClick}>{title}</button>
}

const HeavyComponentMemo = memo(HeavyComponent, (before, after) => {
  if (before.title === after.title) return true
  return false
})