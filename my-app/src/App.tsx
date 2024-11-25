import {ConnectionButton  } from './utils/Connectionbutton';
import TodoList from './components/todo'
import Header from './components/header';
function App() {
  return (
    <>
    <div style={{ display:'flex', justifyContent:'center',height:'full',width:'full', flexDirection:'column'}}>
    <Header/>
    <TodoList/>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >

      <ConnectionButton
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  />
    </div>

    </>
  );
}
  
export default App;
