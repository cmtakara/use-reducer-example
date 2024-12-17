import { Link } from 'react-router'
import { useReducer, useState } from 'react';
import PartyMember from '../components/PartyMember';
import ActionButton from '../components/ActionButton';
import TextInput from '../components/TextInput';
import partyReducer from '../reducers/partyReducer';

const initialState = [
    { name: "Gandalf", health: 100 },
    { name: "Aragorn", health: 100 },
    { name: "Frodo", health: 100 },
    { name: "Sam", health: 100 },
    { name: "Pippin", health: 100 },
    { name: "Merry", health: 100 },
    { name: "Legolas", health: 100 },
    { name: "Gimli", health: 100 },
    { name: "Boromir", health: 100 }
  ];

function AdventureParty() {
    const [ name, setName ] = useState("");
    const [party, dispatch ] = useReducer(partyReducer, initialState);

    const partyList = party.map((member) => {
        return (
            <PartyMember key={member.name} member={member} dispatch={dispatch}/>
        )
    })

  return (
    <div>
        <Link to='/'>Go HOME</Link> <br/>
        <h1>Adventuring Party</h1>
        <div>
            Add a New Adventurer <br />
            <TextInput state={name} setState={setName}/>
            <ActionButton
                type='add_adventurer'
                payload={{name}}
                dispatch={dispatch}
            >
                Add to Party
            </ActionButton>
        </div>
        <div>
            {partyList}
        </div>
        </div>
  )
}

export default AdventureParty