import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({motto, text1, text2, desc1, desc2, btnText, imageUrl}) => 
(
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image width = {500} height = {300} src = {imageUrl}/>
    <Box>
      <Text color = 'gray.500' fontSize = 'sm'>{motto}</Text>
      <Text color = 'gray.500' fontSize = 'sm'>{text1}</Text>
      <Text color = 'gray.500' fontSize = 'sm'>{desc1}</Text>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <Box>
       <Banner 
          motto = 'Rent a Home' 
          text1 = 'Rental Homes for' 
          text2 = 'Everyone' 
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          buttonText='Explore Renting'
          imageUrl = 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'/>

        <Banner 
          motto='BUY A HOME'
          text1=' Find, Buy & Own Your'
          text2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          imageUrl ='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'/>
    </Box>
  )
}
