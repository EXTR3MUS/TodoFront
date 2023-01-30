import './App.css';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import AddTodoItem from './components/AddTodoItem';
import {useState, useEffect} from 'react';


function App() {
  // const initialTodoItems = [
  //   { title:"task 1", description: "description 1", isDone: true },
  //   { title:"task 2", description: "description 2", isDone: true },
  //   { title:"task 3", description: "description 3", isDone: false },
  //   { title:"task 4", description: "description 4", isDone: false }
  // ];

  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/items/')
      .then(res => {
        setTodoItems(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function refreshItems(){
    axios.get('http://localhost:8000/items/')
      .then(res => {
        setTodoItems(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function addTodoItem(item) {
    // posting to the backend
    axios.post('http://localhost:8000/users/1/items/', item)
      .then(res => {
        setTodoItems([...todoItems, res.data]);
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
  }

  function on_item_click(item) {
    console.log("clicked");

    item.is_on = !item.is_on;

    // updating the backend
    axios.put('http://localhost:8000/items/'+item.id, item)
      .then(res => {
        refreshItems()
      }
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoItem addTodoItem={addTodoItem}/>
      <div className="todo-list-container">
        {todoItems.map((item, index) => (
          <TodoItem key={index} item={item} on_item_click={on_item_click} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
