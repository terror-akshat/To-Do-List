import React from 'react';

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.SyntheticEvent) => void
}

const InputField = ({ todo, setTodo, handelAdd }: InputFieldProps) => {
  return (
    <>
      <form className="containerq" onSubmit={(e) => handelAdd(e)}>
        <input className='input'
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button type='submit' className='btn'>Add</button>
      </form>
    </>
  );
};

export default InputField;
