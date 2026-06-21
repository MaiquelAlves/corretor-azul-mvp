import { useState } from 'react'
import { Home, Building2, Users, Handshake, LogOut } from 'lucide-react'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Imoveis from './pages/Imoveis.jsx'
import Clientes from './pages/Clientes.jsx'
import Parcerias from './pages/Parcerias.jsx'

export default function App() {
  const [usuario, setUsuario] = useState(null)
  const [pagina, setPagina] = useState('dashboard')
  const [imoveis, setImoveis] = useState([])
  const [clientes, setClientes] = useState([])
  const [parcerias, setParcerias] = useState([])

  if (!usuario) {
    return <Login onLogin={setUsuario} />
  }

  const props = { imoveis, setImoveis, clientes, setClientes, parcerias, setParcerias }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Corretor Azul</h1>
        <p className="muted">MVP acadêmico</p>

        <button onClick={() => setPagina('dashboard')}><Home size={18}/> Dashboard</button>
        <button onClick={() => setPagina('imoveis')}><Building2 size={18}/> Imóveis</button>
        <button onClick={() => setPagina('clientes')}><Users size={18}/> Clientes</button>
        <button onClick={() => setPagina('parcerias')}><Handshake size={18}/> Parcerias</button>

        <button className="logout" onClick={() => setUsuario(null)}><LogOut size={18}/> Sair</button>
      </aside>

      <main className="content">
        {pagina === 'dashboard' && <Dashboard {...props} />}
        {pagina === 'imoveis' && <Imoveis {...props} />}
        {pagina === 'clientes' && <Clientes {...props} />}
        {pagina === 'parcerias' && <Parcerias {...props} />}
      </main>
    </div>
  )
}
