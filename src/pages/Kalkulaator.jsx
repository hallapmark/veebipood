import Tavakalkulaator from '../components/Tavakalkulaator'
import LaenuKalkulaator from '../components/LaenuKalkulaator'
import MaksimaalneKalkulaator from '../components/MaksimaalneKalkulaator'

function Kalkulaator() {
  return (
    <div>
        <Tavakalkulaator />

        <br /><br /><br />
        
        <LaenuKalkulaator />

        <br /><br /><br />
        
        <MaksimaalneKalkulaator />
    </div>
  )
}

export default Kalkulaator
