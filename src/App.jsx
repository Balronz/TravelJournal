
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data.js'


function App() {


  const dataInfo = data.map((item) => {
    return(
      <Entry
        key = {item.id}
        item = {item}
      />
    );
  });

return(
    <>
      <Header />
      <main className='container'>
        {dataInfo}
      </main>
    </>
);

}

export default App
