import React from 'react'
import { PinInput, PinInputField,HStack, border } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup,WrapItem,Wrap} from '@chakra-ui/react'

const Chakra = () => {
  return (
    <div>
    <HStack>
  <PinInput type='alphanumeric'>
    <PinInputField style={{width:'40px',height:'40px',border:"3px solid red"}} />
    <PinInputField  style={{width:'40px',height:'40px',border:"3px solid green"}} />
    <PinInputField  style={{width:'40px',height:'40px',border:"3px solid yellow"}} />
    <PinInputField  style={{width:'40px',height:'40px',border:"3px solid blue"}} />
  </PinInput>
</HStack>
      
      <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov'  w={100} />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole'  w={100} />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  w={100} />
  </WrapItem>
  <WrapItem>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'  w={100} />
  </WrapItem>
  <WrapItem>
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba'  w={100}/>
  </WrapItem>
  <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast'  w={100}/>
  </WrapItem>
  <WrapItem>
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' w={100} />
  </WrapItem>
</Wrap>
    </div>
  )
}

export default Chakra

