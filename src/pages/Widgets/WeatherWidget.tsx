import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const api_link = process.env.WEATHER_ICON_LINK_BASE

const WeatherWidget = (props: {
  weather: string
  weather_description: string
  weather_icon: string
}) => {
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  return (
    <WeatherContainer>
      <Icon src={`${api_link}${props.weather_icon}@2x.png`} alt="Icon" />
      <Subtitle>{toTitleCase(props.weather_description)}</Subtitle>
    </WeatherContainer>
  )
}

export default WeatherWidget

const WeatherContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 32px;
  background: #0d5f90;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`

const Icon = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  margin: 0;
`

const Subtitle = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`
