// This file is all the shared pieces between the Support+Medic selection and the Trapper+Assault selection phases
import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import GriffinThumbnail from '../../Images/Thumbnails/griffin.jpg'
import GriffinPortrait from '../../Images/Portraits/griffin.png'

import * as Context from '../../Context'

const Container = styled.div`
    background-color: inherit;
    flex-direction: column;
`

const IconContainer = styled.div`
    background-color: #553388;
`

function Icons () {
    return (
        <IconContainer>

        </IconContainer>
    )
}

const SelectedCharacterContainer = styled.div`
    width: 45%;
`

const SelectedCharacterImage = styled.img`
`

function SelectedCharacter({character}) {
    return (
        <SelectedCharacterContainer>
            {character && <SelectedCharacterImage src={character.portrait} />}
        </SelectedCharacterContainer>
    )
}

const SelectionContainer = styled.div`
    background-color: #1155aa;
`

function Selections () {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    return (
        <SelectionContainer>
            <SelectedCharacter character={gameState.selectedAssault} />
            <SelectedCharacter character={gameState.selectedTrapper} />
        </SelectionContainer>
    )
}

const CharacterContainer = styled.div`
    border: 1px solid black;
    margin: 2px;
    width: 25%;
    height: 25%;
`

const CharacterThumbnail = styled.img`
    width: 100%;
    height: 100%;
`
function Character({data}) {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    // TODO: check if he's banned
    // TODO: check game state 
    const selectCharacter = useCallback(() => {
        // TODO: obviously, we just want to modify the state, not reset it completely
        console.log("Selecting:", data)
        setGameState(
            {
                selectedAssault: data
            }
        )
    }, [data])
    return (
        <CharacterContainer onClick={selectCharacter}>
            <CharacterThumbnail alt={data.name} src={data.thumbnail} />
        </CharacterContainer>
    )
}

const AvailableContainer = styled.div`
    background-color: #88ee99;
    flex-wrap: wrap;
`

function Available () {
    // This should be somewhere else; possibly from server? could be here as well
    const characters = [{
        name: 'Griffin',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin2',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin3',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin2',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin3',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin2',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Griffin3',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    }]
    return (
        <AvailableContainer>
            {characters.map(c => <Character data={c} />)}
        </AvailableContainer>
    )
}
export default function TwoRoleSelect() {
    return (
        <Container>
            <Icons />
            <Selections />
            <Available />
        </Container>        
    )
}