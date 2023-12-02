import React, { useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const api_link = process.env.WEATHER_ICON_LINK_BASE

const WeatherWidget = (props) => {
  console.log(`${api_link}${props.weather_icon}@2x.png`)

  return (
    <WeatherContainer>
      <p>{props.weather}</p>
      <p>{props.weather_description}</p>
      <img src={`${api_link}${props.weather_icon}@2x.png`} alt="Icon" />
    </WeatherContainer>
  )
}

export default WeatherWidget

const WeatherContainer = styled.div`
  display: flex;
  width: 616px;
  height: 300px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 32px;
  background: #fcf5e5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`
