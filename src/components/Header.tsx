import { Layout, Button } from 'antd'
import styled from 'styled-components'
import colors from '../utils/color'

const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.lightBlack};
  border-bottom: 1px solid ${colors.borderColor};
`

const Header = () => {
  return (
    <StyledHeader>
      <Button type='primary' size='large'>CREATE</Button>
    </StyledHeader>
  )
}

export default Header
