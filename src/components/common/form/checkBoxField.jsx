import React from "react"

const CheckBoxField = ({id, children, value}) => {
  return (
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={value} id={id} checked/>
  <label class="form-check-label" for="flexCheckDefault">
    {children}
  </label>
</div>
  )
}

export default CheckBoxField