import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  },
  {
    userName: 'thegrefg',
    name: 'TheGrefg',
    isFollowing: false
  },
  {
    userName: 'ibaillanos',
    name: 'Ibai Llanos',
    isFollowing: true
  },
  {
    userName: 'auronplay',
    name: 'AuronPlay',
    isFollowing: false
  }
]

function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App;
