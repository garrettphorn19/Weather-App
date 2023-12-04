import React from "react"
import styled from "styled-components"

const TempWidget = (props: {
  temp: number
  temp_min: number
  temp_max: number
}) => {
  return (
    <TempContainer>
      <CurrentTemp>{Math.round(props.temp)}</CurrentTemp>
      <HighLowContainer>
        <LowTemp>↓{Math.round(props.temp_min)}</LowTemp>
        <HighTemp>↑{Math.round(props.temp_max)}</HighTemp>
      </HighLowContainer>
    </TempContainer>
  )
}

export default TempWidget

const TempContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 32px;
  background: var(--White, #fff);

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`

const CurrentTemp = styled.h1`
  color: #000;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 128px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const HighLowContainer = styled.div`
  display: flex;
  width: 148px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const HighTemp = styled.h2`
  color: #000;
  text-align: center;
  font-family: PP Neue Montreal;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const LowTemp = styled.h2`
  color: #000;
  text-align: center;
  font-family: PP Neue Montreal;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
