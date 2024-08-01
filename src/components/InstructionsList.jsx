import { useState } from 'react';

export default function InstructionsList({
  myInstructions,
  onChangeInstruction,
  onDeleteInstruction
}) {
  return (
    <ul>
      {myInstructions.map((instruction, index) => (
        <li key={index}>
          <Item
            instruction={instruction}
            onChange={onChangeInstruction}
            onDelete={onDeleteInstruction}
          />
        </li>
      ))}
    </ul>
  );
}

function Item({instruction, onChange, onDelete }) {
  let instructionContent;
  instructionContent = (
      <>
        <input className='instructions-input'
          value={instruction.instruction}
          onChange={e => {onChange({...instruction,instruction: e.target.value});}} 
        />
      </>
    );
  return (
    <label>
      {instructionContent}
      <button className="button-remove" onClick={() => onDelete(instruction.ordinalPosition)}>
        x
      </button>
    </label>
  );
}
