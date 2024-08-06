
export default function InstructionsList({
  myInstructions,
  onChangeInstruction,
  onDeleteInstruction
}) {
  return (
    <ol style={{marginBottom:'6px'}}>
      {myInstructions.map((instruction, index) => (
        <li key={index}>
          <Item
            instruction={instruction}
            onChange={onChangeInstruction}
            onDelete={onDeleteInstruction}
          />
        </li>
      ))}
    </ol>
  );
}

function Item({instruction, onChange, onDelete }) {
  let instructionContent;
  instructionContent = (
      <>
        <input style={{width:'310px'}}
          value={instruction.instruction}
          onChange={e => {onChange({...instruction,instruction: e.target.value});}} 
        />
      </>
    );
  return (
    <label>
      {instructionContent}
      <button className='btn btn-danger btn-sm' style={{marginLeft:'5px'}} onClick={() => onDelete(instruction.ordinalPosition)}>
        x
      </button>
    </label>
  );
}
