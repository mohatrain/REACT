function FunctionEvent(){
    function handleClick(){
    console.log('I am super fun and awesome I guess I am learning a bunch of shit about react and this is suoer great and super awesome am leaning alot of shit')
    }
    return (
        <div>
            Functional Component
            <button onClick = {() => handleClick()}>TAP ME NOW</button>
        </div>
    )
}

export default FunctionEvent