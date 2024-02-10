import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  const Auxroute = () => <CreateNote params={useParams()} />;
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={<NotesList/>} />
          <Route path="/edit/:id" element={<Auxroute />} />
          <Route path="/create" element={<CreateNote/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
