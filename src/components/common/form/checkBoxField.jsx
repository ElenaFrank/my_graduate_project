import React from "react"

const CheckBoxField = ({name, children, value, onChange}) => {
  const handleChange = () => {
    console.log({name:name, value:!value}) 
    onChange({name:name, value:!value})
   }
  return (
<div class="form-check mb-4">
  <input class="form-check-input" type="checkbox" value={value} id={name} checked={value} onChange={handleChange}/>
  <label class="form-check-label" forHTML={name}>
    {children}
  </label>
</div>
  )
}

export default CheckBoxField