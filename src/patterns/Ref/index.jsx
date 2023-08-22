import { forwardRef, useImperativeHandle, useRef } from "react"

const Form = () => {
  const [name, setName] = useState('')
  const inputRef = useRef(null)

  const onSubmitClick = () => {
    if (!name) {
      // focus here
      inputRef.current.focus()
      inputRef.current.shake()

    }
  }
  
  return <>
    <InputField ref={inputRef} onChange={e => setName(e.target.value)}/>
    <button onClick={onSubmitClick}>submit!</button>
  </>
}

const InputField = forwardRef(({ onChange }, ref) => {

  useImperativeHandle(ref, () => ({
    focus: () => {},
    shake: () => {} 
  }), [])
  return <input ref={ref} onChange={e => onChange(e.target.value)}/>
})