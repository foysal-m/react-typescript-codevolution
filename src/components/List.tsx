import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img className="List-img" alt="" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.notes}</p>
        </li>
      )
    })
  }
  return <ul>{renderList()}</ul>
}

export default List
