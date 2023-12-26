

const CFormInputs = (props) => {
  return (
    <input
    name={props.name}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
    onChange={props.onChange}
    />
  )
}

export default CFormInputs