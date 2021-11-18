import styled from 'styled-components'
import SupportMedicSelect from './SupportMedicSelect'
import TrapperAssaultSelect from './TrapperAssaultSelect'

const Container = styled.div`
    background-color: #00aa00;
`

export default function HunterSelect() {
    return (
        <Container>
            <TrapperAssaultSelect />
            <SupportMedicSelect />
        </Container>
    )
}