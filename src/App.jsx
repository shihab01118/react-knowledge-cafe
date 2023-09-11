
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import History from './components/History/History'

function App() {

  return (
    <div className='container mx-auto'>
    <Header></Header>
    <hr />
    <div className='mt-6 md:flex'>
      <Blogs></Blogs>
      <History></History>
    </div>
    </div>
  )
}

export default App
