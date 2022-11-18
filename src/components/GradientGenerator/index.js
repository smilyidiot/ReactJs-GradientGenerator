import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  HeadLine,
  Paragraph,
  ButtonList,
  ColorInput,
  ColorContainer,
  InputContainer,
  ColorLabel,
  SubmitButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
  }

  currentTab = value => {
    this.setState({gradientDirection: value})
  }

  changeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  changeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  generateBgColor = event => {
    event.preventDefault()
    const {colorOne, colorTwo} = this.state

    this.setState({bgColor1: colorOne, bgColor2: colorTwo})
  }

  render() {
    const {
      colorOne,
      bgColor1,
      colorTwo,
      bgColor2,
      gradientDirection,
    } = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        linerGradient={`to ${gradientDirection}, ${bgColor1}, ${bgColor2}`}
      >
        <HeadLine>Generate a CSS Color Gradient</HeadLine>

        <Paragraph>Choose Direction</Paragraph>
        <ButtonList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              activeTab={this.currentTab}
              content={each}
              activeDirection={gradientDirection}
            />
          ))}
        </ButtonList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorContainer>
          <InputContainer>
            <ColorLabel value={colorOne}>{colorOne}</ColorLabel>
            <ColorInput
              type="color"
              id="colorOne"
              value={colorOne}
              onChange={this.changeColorOne}
            />
          </InputContainer>
          <InputContainer>
            <ColorLabel value={colorTwo}>{colorTwo}</ColorLabel>
            <ColorInput
              type="color"
              id="colorTwo"
              value={colorTwo}
              onChange={this.changeColorTwo}
            />
          </InputContainer>
        </ColorContainer>
        <SubmitButton type="button" onClick={this.generateBgColor}>
          Generate
        </SubmitButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
