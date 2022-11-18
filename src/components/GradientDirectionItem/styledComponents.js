// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
  background-color: transparent;
`

export const DirectionButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  background-color: transparent;
  width: 70px;
  height: 25px;
  border: 0px solid;
  padding: 0px;
  border-radius: 2px;
  background-color: white;
  font-size: 12px;
  opacity: ${props => (props.bgColor ? 1 : 0.5)};
  @media screen and (max-width: 576px) {
    width: 100px;
    margin-bottom: 20px;
  }
  cursor: pointer;
`
