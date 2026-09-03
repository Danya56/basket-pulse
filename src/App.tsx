import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-1 h-full'></div>
      <Footer />
    </div>
  )
}

export default App
