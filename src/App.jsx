import { Header } from './components/Header';
import { Content } from './components/Content';
import { Aside } from './components/Aside';
import { Card } from './components/Card';


function App() {

  return (
    <>
      <Header />
      <main className='flex flex-row justify-between mt-12 gap-8'>
        <Content
          title="The Bright Future of Web 3.0?"
          text="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?" />
        <Aside/>
      </main>

      <Card />

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Yeison García</a>.
      </footer>
    </>
  )
}

export default App
