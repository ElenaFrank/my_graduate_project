import React from "react"
import PropType from "prop-types"
import { useState } from "react"

const TextField = ({type, name, label, value, onChange}) => {
    const handleChange = ({target}) => {
        onChange({name: target.name, value: target.value})
    }

    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(prevstate => !prevstate)
    }

    //Для инпута в класснэйм для валидации
    // const valid = "is-invalid"
    return (
        <div className="mb-4">
            <label>{label}</label>
                <div className="input-group shadowPass">
                <input 
                    type={showPassword ? "text": type} 
                    name={name} 
                    id={name} 
                    value={value}
                    onChange={handleChange}
                    className="form-control "
                    />
                {/* {type==="password" && 
                    <button className="btn btn-outline-secondary" type="button" onClick={toggleShowPassword}>
                        <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}>
                        </i>
                    </button>} */}
                    {type==="password" &&
                    <div>
                        <i onClick={toggleShowPassword} className={"btn btn-outline-secondary bi bi-eye" + (showPassword ? "-slash" : "")} id="button-addon1">
                        </i>
                    </div>

                    }
                </div>
        </div>

    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    type: PropType.string,
    name: PropType.string,
    label: PropType.string,
    value: PropType.string,
    onChange: PropType.func
}
export default TextField