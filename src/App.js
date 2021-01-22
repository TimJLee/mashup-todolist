import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead'; // 컴포넌트 가져오기
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`; // 스타일 컴포넌트

function App() {
  return (
    <TodoProvider>
      <GlobalStyle /> {/* 스타일 컴포넌트 사용 */}
      <TodoTemplate>
        <TodoHead /> 
        <TodoList />
        <TodoCreate />
      </TodoTemplate>   
    </TodoProvider>
  );
}

export default App;