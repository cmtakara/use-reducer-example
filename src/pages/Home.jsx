import { Link } from 'react-router';

function Home() {
  return (
    <div>
        <Link to='/counter'>Counter Example</Link>
        <br />
        <Link to='/adventure'>Adventure Party Example</Link>
    </div>
  )
}

export default Home