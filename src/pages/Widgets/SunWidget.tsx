import React from "react"
import styled from "styled-components"

const SunWidget = (props: { sunrise: number; sunset: number }) => {
  return (
    <SunContainer>
      <p>{props.sunrise}</p>
      <p>{props.sunset}</p>
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
