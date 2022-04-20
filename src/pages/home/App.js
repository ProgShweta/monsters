
/*const user=[{
    fname:'shweta',
    lname:'chaudhary'
},
{
    fname:'chhoti',
    lname:'singh'
}]
    const App = () =>{
    let a = 12
    let b = 44
    return (
    <div>
        <h1> Monesters App</h1>
        <p>Building CRUD App</p>
        <p>some calculation:{a*b}</p>
        {
            user.map((element)=>{
                return(
                    <div>
                        <p>{element.fname}</p>
                        <p>{element.lname}</p>
                    </div>
                )
            })
        }
    </div>
    )

}

export default App
//jo bhi default hoga wo print hoga*/
import './App.css'
import React from 'react'

import CardList from '../../components/card-list/card-list.comaponent'
import Search from '../../components/search/search.component'
/*const App=()=>{
    return (
        <div className="App">
            <h1>Monester roldex</h1>
            <p>shweta</p>
             <Search/>
             <CarList/>
        </div>
    )

}*/

class App extends React.Component{
        /**Step 1 */
  constructor(){
    super()
      this.state = {
        users: [],
        searchValue:''
      }
}
       

  /**Step 4 */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    /** return result => result.json() => Array[] */
    .then(result =>result.json())
    /** return Array[] => this.state = {users:monsters} **/
    .then(monsters => this.setState(
          {
            users:monsters
          }
        )
    )
  }

  /**Step 2 */
  handleOnChange = (event) => {
    this.setState({searchValue:event.target.value})
  }
  // let array = [1,2,3,4,5]
  // array.filter((value) => value = '')
  // [1,2,3,4,5]
 

  /**Step 2 */
  render(){
    const {users,searchValue } = this.state
    const filteredMonsters = users.filter(
      monster => monster.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  /*
  render(){
    const filteredMonsters = this.state.users.filter(
        (element, idx) => element.name === this.state.searchValue
    )*/
    /**Step 3 */
    return(
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing = {this.handleOnChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App
