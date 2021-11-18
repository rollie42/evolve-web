import styled from 'styled-components'
import TwoRoleSelect from './TwoRoleSelect'

const Container = styled.div`
    background-color: #6688aa;
`

export default function SupportMedicSelect() {
    return (
        <Container>
            <TwoRoleSelect />
        </Container>
    )
}