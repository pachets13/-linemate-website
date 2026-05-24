import { Routes, Route } from 'react-router-dom'
import PlayerPage from './pages/PlayerPage'
import ForCoachesPage from './pages/ForCoachesPage'
import ForFrontOfficesPage from './pages/ForFrontOfficesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PlayerPage />} />
      <Route path="/for-coaches" element={<ForCoachesPage />} />
      <Route path="/for-front-offices" element={<ForFrontOfficesPage />} />
    </Routes>
  )
}
