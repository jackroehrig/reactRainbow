import React, {useState} from "react";

function ColorForm(props){
    let [input, setInput] = useState('')
    let [isWarning, changeWarn] = useState(false)

    let warning = isWarning
    ? 'Please enter a valid color.'
    : ''

    const handleSubmit = e => {
        e.preventDefault()

        let strColor = input.toLowerCase()
        let s = new Option().style;
        s.color = strColor;
        if(s.color === strColor){
            if(isWarning){
                changeWarn(false)
            }

            props.addColor(input)
            setInput('')
        } else {
            if(isWarning === false){
                changeWarn(true)
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setInput(e.target.value)} value={input}/>
                <button type='submit'>Submit!</button>
                <h6 style={{color: 'red', fontSize: '12px'}}>{warning}</h6>
            </form>
        </div>
    )
}

export default ColorForm