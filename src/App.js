import React, { useState } from 'react';
import 'primereact/resources/themes/viva-dark/theme.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Logo from './components/ui/Logo/logo.js';
import AppDataTable from './components/ui/DataTable/DataTable';
import NewTextForm from './components/form/NewText/NewText.js';
import AddButton from './components/ui/AddButton/Button.js';

function App() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  }

  const closeForm = () => {
    setShowForm(false);
  }
  
  return (
    <div className='App'>
      <Logo />
      <AddButton onClick={ openForm } />
      {showForm && <NewTextForm onClose={ closeForm } />}
      <AppDataTable />
    </div>    
  );
}

export default App;
