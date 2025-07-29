
import React from 'react';
import Counter from './components/Counter';
import FormSubmission from './components/FormSubmission';
import ToggleDiv from './components/ToggleDiv';
import HighligtListItem from './components/HighligtListItem';
import Parent1 from './components/Parent1';
import Todo from './components/todoComponents/Todo';

function App() {
  return (
    <div>
      <Counter />
      <FormSubmission />
      <ToggleDiv />
      <HighligtListItem />
      <Parent1 />
      <Todo />
    </div>
  );
}

export default App;
