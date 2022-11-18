// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {content, activeTab, activeDirection} = props
  const {directionId, value, displayText} = content

  const activeColor = () => {
    activeTab(value)
  }

  const opacity = activeDirection === value

  return (
    <ListItem>
      <DirectionButton
        bgColor={opacity}
        type="button"
        id={directionId}
        value={value}
        onClick={activeColor}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
