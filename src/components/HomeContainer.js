import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  margin: 16px;
  flex-wrap: wrap;
  `

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const NoWrapRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`

export const Col = styled.div`
  display: flex;
  margin: 5px;
  flex-wrap: wrap;
  flex-direction: row;
`

export default Container
