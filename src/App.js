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

  const handleChange = () => {
    setList([...list, {title: title, content: content}]);
    console.log(list);
  }

  function handleRemove(id) {
    console.log(id);
    const newList = list.filter((item, i) => i !== id);
    setList(newList);
  }


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


        <div className="c-list">
        {
          list.map((item, index) => {
            return (
              <Card title={item.title} content={item.content} key={index} index={index} onRemove={handleRemove}/>
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
