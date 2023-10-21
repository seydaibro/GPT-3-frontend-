import { Blog, Features, Footer,WhatGPT3,Header, Posibility } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css'

function App() {
  return (
   <div className='App'>
     <div className='gradient_bg'>
      <Navbar/>
      <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Posibility/>
     <CTA/>
     <Blog/>
     <Footer/>
   </div>
  );
}

export default App;
