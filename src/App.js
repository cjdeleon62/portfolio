import { useToggle } from './utils/hooks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.scss';

function App() {
  const [isSidebarVisible, toggleSidebarVisible] = useToggle();
  return (
    <div className="App">
      <Header toggleSidebarVisible={toggleSidebarVisible} />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <main className="Content">
        <div>
          This is some content
        </div>
      </main>
    </div>
  );
}

export default App;
