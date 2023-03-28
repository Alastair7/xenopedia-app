import React from 'react'
import 'primereact/resources/themes/viva-dark/theme.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AppTabMenu from './components/ui/Menu/menu';
import Logo from './components/ui/Logo/logo.js';
import AppDataTable from './components/ui/DataTable/DataTable';

function App() {
  return (
    <div className='App'>
      <Logo />
      <AppTabMenu />
      <AppDataTable />
      

    </div>    
  );
}

export default App;
