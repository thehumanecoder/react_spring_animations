import React from 'react';
import {useSpring,animated} from 'react-spring';
import {Grommet,Main,Heading,Paragraph,Box,Image} from 'grommet';

import background from './../resources/backgrounds/front.svg'
const Home = () =>{

  const fade = useSpring({
      from:{
        opacity:0
      },
      to:{
        opacity:1
      }
  })

  return (
    <Main pad="large">
      <animated.div style={fade}>
      <Heading>Welcome</Heading>
      <Paragraph>Something about something</Paragraph>
      </animated.div>
  </Main>

  )
}

export default Home;
