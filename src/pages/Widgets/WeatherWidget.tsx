import React from "react"
import styled from "styled-components"

const WeatherWidget = (props: {
  weather:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
  weather_description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
}) => {
  return (
    <WeatherContainer>
      <p>{props.weather}</p>
      <p>{props.weather_description}</p>
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
