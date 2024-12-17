export default function NumberInput ({ state, setState }) {
    return (
        <input 
            className='numberInput'
            type='number'
            step='1'
            min='1'
            max='100'
            value={state}
            onChange={(evt) => setState(Number(evt.target.value))}
        />
    )
}