import './MiFieldSet.css'

function MiFieldSet(props) {    
    const {titulo, txt1, txt2} = props;
    return(    
        <> {/* Lo que está dentro de estos, se les conoce como fragmentos*/}
        <fieldset>
            <legend>{titulo}</legend>
            <label htmlFor={txt1}>{txt1}: </label>
            <input type="text" id={txt1} />
            <label htmlFor={txt2}>{txt2}: </label>
            <input type="password" id={txt2} />
        </fieldset>
        </>
    )
}

export default MiFieldSet;