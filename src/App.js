import { useToggle } from './utils/hooks';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import styles from './App.module.scss';

function App() {
  const [isSidebarVisible, toggleSidebarVisible] = useToggle();
  return (
    <div className={styles.App}>
      <Header toggleSidebarVisible={toggleSidebarVisible} />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <main className={styles.Content}>
        <div>
          This is some content
        </div>
      </main>
    </div>
  );
}

export default App;
