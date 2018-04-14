import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ContainerRow = styled(Container)`
  flex-direction: row;
`

export const ContainerCenter = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const PaddedBox = styled.div`
  padding: 20px;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`
export const SpacedRow = styled(Row)`
  justify-content: space-between;
`

export const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

export default Container
