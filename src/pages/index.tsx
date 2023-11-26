import React, { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import axios from "axios"

const api_key = process.env.WEATHER_API_KEY
const api_base = process.env.WEATHER_LINK_BASE

const IndexPage: React.FC<PageProps> = () => {
  const [city_name, setCityName] = useState("Detroit")
  const [state_code, setStateCode] = useState("MI")
  const [country_code, setCountryCode] = useState("USA")

  useEffect(() => {
    axios
      .get(
        `${api_base}q=${city_name},${state_code},${country_code}&appid=${api_key}&units=imperial`
      )
      .then((res) => {
        console.log(res.data)
      })
  }, [city_name, state_code, country_code])

  return (
    <Container>
      <Title>Weather</Title>
    </Container>
  )
}

const Container = styled.div``
const Title = styled.h1``

export default IndexPage

export const Head: HeadFC = () => <title>Weather</title>
