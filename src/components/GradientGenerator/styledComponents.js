// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.linerGradient});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const HeadLine = styled.h1`
  color: #ededed;
  font-size: 25px;
  text-align: center;
`

export const Paragraph = styled.p`
  color: #ffffff79;
  font-size: 20px;
`

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 16%;
  margin-left: 2%;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

export const ColorInput = styled.input`
  width: 80px;
  height: 35px;
  border: 0px solid;
  text-align: center;
  padding: 0px;
  cursor: pointer;
  background-color: transparent;
`

export const ColorLabel = styled.p`
  color: #ffffff79;
  font-size: 16px;
  text-align: center;
`

export const SubmitButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: #00c9b7;
  color: #334155;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  border: 0px solid;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
`
