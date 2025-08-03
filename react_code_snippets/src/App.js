
import React from 'react';
import Counter from './components/Counter';
import FormSubmission from './components/FormSubmission';
import ToggleDiv from './components/ToggleDiv';
import HighligtListItem from './components/HighligtListItem';
import Parent1 from './components/Parent1';
import Todo from './components/todoComponents/Todo';
import ModalParent from './components/modal/ModalParent';
import Button from './components/Button';

function App() {
  const showAlert = () => {
    alert("New Alert for Button click")
  }
  return (
    <div>
      {/* <ModalParent />
      <Counter />
      <FormSubmission />
      <ToggleDiv />
      <HighligtListItem />
      <Parent1 />
      <Todo /> */}
      <Button label="Submit Me" style={{color: "#000"}} action={showAlert} />
    </div>
  );
}

export default App;
