import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl,fetchApi } from '../utils/fetchData.js';
import Layout from '../components/Layout.jsx';
import Property from '../components/Property.jsx';


const Banner = ({motto, text1, text2, desc1, desc2, btnText, imageUrl}) => 
(
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{motto}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{text1}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}</Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        {btnText}
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {

  return (
    <Box>
       <Banner 
          motto = 'Rent a Home' 
          text1 = 'Rental Homes for' 
          text2 = 'Everyone' 
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          btnText='Explore Renting'
          imageUrl = 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'/>

        <Flex flexWrap='wrap'>{propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>

        <Banner 
          motto='BUY A HOME'
          text1=' Find, Buy & Own Your'
          text2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          btnText='Explore Buying'
          imageUrl ='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'/>

        <Flex flexWrap='wrap'>{propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>

    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

