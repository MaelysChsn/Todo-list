import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Card from './card';

function App() {
  const [list, setList] = useState([]);
  const[title, setTitle] = useState([]);
  const[content, setContent] = useState([]);
  const[count, setCount] = useState(0);


  const handleChange = () => {
    if(count >= 5){
      alert('Fais tes autres tâches avant d\'en ajouter d\'autre mec !')
    }else{
      setList([...list, {title: title, content: content, checked: false}]);
      setCount(count + 1);
    }
  }

  function handleRemove(id) {
    const newList = list.filter((item, i) => i !== id);
    setList(newList);
  }

  function handleChecked(id, value) {
    const newArray = [...list];
    newArray[id].checked = value;
    setList(newArray);
    value === true ? setCount(count - 1) : setCount(count + 1);
  }

  useEffect(() => {
    setCount(count);
  }, [list, count]);



  return (
    <div className="App container">
        <div className="c-main">
          <div className="c-add_list">
            <h1>Ajouter des choses</h1>
            <form>
              <div className="form-group">
                <input type="text" name="title" value={title} placeholder="un titre" className="form-control" onChange={(event) => setTitle(event.target.value)}/>
                <textarea name="content" value={content} placeholder="une description" className="form-control" onChange={(event) => setContent(event.target.value)}></textarea>
                <button type="button" onClick={handleChange} className="btn btn-primary">Ajouter</button>
              </div>
            </form>
          </div>
        </div>


        <div className="c-list container">
        {
          list.map((item, index) => {
            return (
              <Card title={item.title} content={item.content} key={index} index={index} onRemove={handleRemove} onChecked={handleChecked} checked={item.checked}/>
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
