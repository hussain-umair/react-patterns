import { useState } from "react"

const Reconciliation = () => {
  const [isCompany, setIsCompany] = useState(false)

  return (
    <div>
      <input type="checkbox" checked={isCompany} onChange={() => setIsCompany(!isCompany)} />
      {isCompany ? (
        // key prop is important here, as it helps fiber algorithm in reconciliation.
        // when same type of components render on conditions, must pass a different key otherwise react
        // fiber algorithm uses the same mounted component and just replace the attributes
        <Input key="company" id='company-tax-id-number' placeholder='enter company tax id' />
      ) : (
        <Input key="person" id='person-tax-id-number' placeholder='enter person tax id' />
      )}
    </div>
  )
}

export default Reconciliation

const Input = (props) => {
  const [value, setValue] = useState('')
  return <input type="text" value={value} onChange={e => setValue(e.target.value)} {...props}/>
}