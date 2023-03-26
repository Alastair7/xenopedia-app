import 'primereact/resources/themes/viva-dark/theme.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AppTabMenu from './components/ui/Menu/menu';
import Logo from './components/ui/Logo/logo.js';

function App() {
  return (
    <div className='App'>
      <Logo />
      <AppTabMenu />

    </div>    
  );
}

export default App;
