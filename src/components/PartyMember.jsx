import {useState} from 'react';
import ActionButton from './ActionButton'
import NumberInput from './NumberInput';

function PartyMember( {member, dispatch} ) {
    const [step, setStep] = useState(1);

  return (
    <>
    <div style={{ width: "100%", textAlign: "center", marginBottom: "0px"}}>
        <b>{member.name}</b>
    </div>
    <div style={{ width: "100%", textAlign: "center", marginBottom: "10px"}}>
        <small 
            style={{ fontSize: '12px', color: 'red', cursor: 'pointer'}}
            onClick={() => {
                if (
                    window.confirm(
                        `Are you sure you want to remove ${member.name} from your party?`
                    )
                ) {
                    dispatch({
                        type: 'remove_adventurer',
                        payload: {
                            name: member.name
                        }
                    })
                }
            }}
        >
            Remove {member.name} from party            
        </small>
    </div>
    <div>
        Health:{" "}
        <span>{member.health}</span>
    </div>
    <div>
        <ActionButton
            type='decrement'
            payload={{ name: member.name, step}}
            dispatch={dispatch}
            className='one-character'
        >
            -
        </ActionButton>
        <NumberInput state={step} setState={setStep}/>
        <ActionButton
            type='increment'
            payload={{ name: member.name, step}}
            dispatch={dispatch}
            className='one-character'
        >
            +
        </ActionButton>
    </div>
    </>
  )
}

export default PartyMember