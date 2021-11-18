import 'normalize.css'
import './App.css'
import styled from 'styled-components'
import HunterSelect from './Components/HunterSelect/HunterSelect'
import MapSelect from './Components/MapSelect/MapSelect'
import MonsterSelect from './Components/MonsterSelect/MonsterSelect'
import BottomBar from './Components/BottomBar/BottomBar'
import Context from './Context'

const MainDiv = styled.div`
  background-color: red;
  height: 100vh;
  width: 80vw;
  flex-direction: column;
`

const MainPanel = styled.div`
  background-color: green;
`

function App() {
  return (
    <Context>
      <MainDiv className="App">
        <MainPanel>
          <HunterSelect />
          <MapSelect />
          <MonsterSelect />
        </MainPanel>
        <BottomBar />
      </MainDiv>
    </Context>
  );
}

export default App;
