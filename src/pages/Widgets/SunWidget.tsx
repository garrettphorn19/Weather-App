import React from "react"
import styled from "styled-components"

const SunWidget = (props: { sunrise: number; sunset: number }) => {
  const sunriseDt = new Date(props.sunrise * 1000)
  const sunsetDt = new Date(props.sunset * 1000)

  const sunriseHours =
    sunriseDt.getHours() > 12 ? sunriseDt.getHours() - 12 : sunriseDt.getHours()
  const sunriseMinutes =
    sunriseDt.getMinutes() < 10
      ? "0" + sunriseDt.getMinutes()
      : sunriseDt.getMinutes()

  const sunsetHours =
    sunsetDt.getHours() > 12 ? sunsetDt.getHours() - 12 : sunsetDt.getHours()
  const sunsetMinutes =
    sunsetDt.getMinutes() < 10
      ? "0" + sunsetDt.getMinutes()
      : sunsetDt.getMinutes()

  console.log(sunriseDt)

  return (
    <SunContainer>
      <Text>
        {sunriseHours}:{sunriseMinutes} AM
      </Text>
      <Text>
        {sunsetHours}:{sunsetMinutes} PM
      </Text>
    </SunContainer>
  )
}

export default SunWidget

const SunContainer = styled.div`
  width: 616px;
  height: 300px;
  flex-shrink: 0;

  border-radius: 32px;
  background: #78a4b6;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`

const Text = styled.p``
