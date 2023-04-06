import React from 'react'
import 'primereact/resources/themes/viva-dark/theme.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Logo from './components/ui/Logo/logo.js';
import AppDataTable from './components/ui/DataTable/DataTable';
import AddButton from './components/ui/AddButton/Button';
import NewTextForm from './components/form/NewText/NewText..js';

function App() {
  return (
    <div className='App'>
      <Logo />
      <AddButton />
      <AppDataTable />
      <NewTextForm />
      

    </div>    
  );
}

export default App;
