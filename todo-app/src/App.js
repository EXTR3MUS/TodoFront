import './App.css';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import AddTodoItem from './components/AddTodoItem';
import EditableText from './components/EditableText';
import {useState, useEffect} from 'react';


function App() {
  const [todoItems, setTodoItems] = useState([]);

  function is_on_comparator(a, b){
      // sorting the items to show the ones that is_on is true last
    if (a.is_on && !b.is_on) {
      return 1;
    }
    if (!a.is_on && b.is_on) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    refreshItems();
  }, []);

  function refreshItems(){
    axios.get('http://localhost:8000/items/')
      .then(res => {
        let newTodoItems = res.data;
        newTodoItems.sort(is_on_comparator);
        setTodoItems(newTodoItems);
        console.log(newTodoItems)
      })
      .catch(err => {
        console.log(err);
      })
  }

  function addTodoItem(item) {
    item.is_on = false;
    // posting to the backend
    axios.post('http://localhost:8000/users/1/items/', item)
      .then(res => {
        refreshItems();
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
  }

  function deleteTodoItem(item) {
    // deleting from the backend
    axios.delete('http://localhost:8000/items/' + item.id)
      .then(res => {
        refreshItems()
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
    axios.put('http://localhost:8000/items/' + item.id, item)
      .then(res => {
        refreshItems()
      }
    )
  }

  function on_complete_edit(item){
    console.log("completed edit");

    // updating the backend
    axios.put('http://localhost:8000/items/' + item.id, item)
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
          <TodoItem key={index} item={item} on_item_click={on_item_click} on_complete_edit={on_complete_edit} on_delete_click={deleteTodoItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
