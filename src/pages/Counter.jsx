import { useReducer, useState } from 'react'
import { Link } from 'react-router'
import ActionButton from '../components/ActionButton';
import NumberInput from '../components/NumberInput';

function Counter() {
    // dispatch replaces setCount when we move to reducer rather than state
    // we also need to pass in the reducer function - 
    //      the reducer function tells us how to update the state
    const [ count, dispatch ] = useReducer(reducer, 0);
    // setState - this returns an array with the state and the setter
    //      initial value is passed in
    const [ step, setStep ] = useState(1);

    // define the reducer
    // normally, we would do this in a different module and import it
    // for this first example, because it is pretty straightforward, we'll define it here
    function reducer(state, action) {
        switch (action.type) {
            case 'increment': {
                return state + action.payload.step;
            }
            case 'decrement': {
                return state - action.payload.step;
            }
            default: {
                throw Error("Unknown Action: " + action.type);
            }
        }
    }

    return (
    <div>
        <Link to='/'>Go Home</Link>
        <h1>{ count }</h1>
        <ActionButton 
            type='increment' 
            dispatch={dispatch}
            payload={{step: step}}
        >
            Increment    
        </ActionButton>
        <br/>
        <ActionButton 
            type='decrement' 
            dispatch={dispatch}
            payload={{ step: step }}
        >
            Decrement</ActionButton>
        <br />
        <NumberInput state={step} setState={setStep}/>
    </div>
  )
}





export default Counter