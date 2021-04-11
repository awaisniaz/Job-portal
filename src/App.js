
import './App.css';
import './global.scss';
import { Button } from 'antd'
import axios from 'axios'
import Header from './component/header/index'
import Table from './component/table/index'
import { v4 as uuidv4 } from 'uuid';
function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          console.log(response.data)
        }).catch(err => {
          console.log(err)
        })
      }}>Fetch User</Button>
      <Button onClick={() => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
          "id": uuidv4(),
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }).then(response => {
          console.log(response.data)
        }).catch(err => {
          console.log(err)
        })
      }}>Add User</Button>
    </div>
  );
}

export default App;
