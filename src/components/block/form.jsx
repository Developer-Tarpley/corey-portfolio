const Form =(props)=>{
    return(
        <form onSubmit={props.onSubmit} className={props.className} >
            {props.children}
            <button type='submit' >{props.btnText}</button>
        </form>
    )
}

export default Form