import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './Components/Todo-Create';
import TodoHead from './Components/Todo-Head';
import TodoList from './Components/Todo-List';
import TodoTemplate from './Components/Todo-Template';
import { TodoProvider } from './Components/Todo-Context';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      
    </TodoProvider>

    
  );
}

export default App;