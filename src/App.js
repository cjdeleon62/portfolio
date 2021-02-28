import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="Content">This is some content</div>
    </div>
  );
}

export default App;
