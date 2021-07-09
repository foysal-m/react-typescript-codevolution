import { useState } from 'react'
import List from './components/List'
import './App.css'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Foysal',
      url: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
      age: 36,
      notes: 'staying on the same team',
    },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
