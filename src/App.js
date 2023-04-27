import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    id: 1,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    id: 2,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    id: 3,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    id: 4,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    id: 5,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    id: 6,
    name: 'praveen',
    role: 'civil engineer',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
]

const App = () => (
  //   <h1>
  //   <UserProfile userDetails={userDetails} />
  //   </h1>
  <div className="list-container">
    <h1 className="title">User Details</h1>
    <ul className="user-container">
      {userDetailsList.map(eachIem => (
        <UserProfile userDetails={eachIem} key={eachIem.id} />
      ))}
    </ul>
  </div>
)

export default App
