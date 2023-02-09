import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from '../main'
import { Button, Container, Heading, HStack, Image,  Radio,  RadioGroup,  Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './Error'
import CoinCard from './CoinCard'




const Coins = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("inr")



  let currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$"

  const changePage = (page) => {
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(132).fill(1)

  useEffect(()=>{
    const fetchCoins = async()=>{
     try{
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      setCoins(data)
      setLoading(false)
     }catch(err){
       setError(true)
        setLoading(false)
     }
    };
    fetchCoins()
    
  }, [page, currency])

  if(error){
    return <ErrorComponent message={"Error while fetching Coins"}/>
  }


  return (
    <Container maxW={'container.xl'}>
        {loading? <Loader/>:<>

          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>


          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {
              coins.map(
                (i)=>{
                  return(
                    <CoinCard
                      key = {i.id}
                      id = {i.id}
                      currencySymbol = {currencySymbol}
                      name={i.name} img={i.image} price = {i.current_price} symbol = {i.symbol}
                    />
                  )
                }
              )
            }
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((item, index)=>{
                return(
                  <Button bgColor={"blackAlpha.900"} 
                  key={index} color={"white"} onClick={()=>changePage(index+1)}>
                    {index+1}
                  </Button>
                )
              })
            }
          </HStack>

        </>}
    </Container>
  )
}




export default Coins