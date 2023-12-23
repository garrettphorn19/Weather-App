import React from "react"
import styled from "styled-components"
import axios from "axios"

const forcast_api_key = process.env.WEATHER_API_KEY
const forcast_link_base = process.env.WEATHER_FORCAST_LINK_BASE

const ForcastWidget = (day: any) => {
  console.log(day)
  return (
    <Container>
      <h1>{day.day.dt_txt}</h1>
    </Container>
  )
}

export default ForcastWidget

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
