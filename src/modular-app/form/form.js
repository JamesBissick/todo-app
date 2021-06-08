const Form = ({ text, onTextChange, onTextSubmit }) => {
  return (
    <form onSubmit={ onTextSubmit }>
      <input type='text' placeholder="What's next?" value={ text } onChange={ onTextChange } autoFocus />
      <button className='submit-button'>Submit</button>
    </form>
  );
};

export default Form;
