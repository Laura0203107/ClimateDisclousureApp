import React from 'react'
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {  
  //por primera vez props muy imoprtante
  return (
    <article className="grid-layout">
      <Header/> 
      <Main/>
      <Footer/>
    </article>
  );
}
export default App;
