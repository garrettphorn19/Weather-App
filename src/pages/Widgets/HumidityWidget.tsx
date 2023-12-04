import React from "react"
import styled from "styled-components"

const HumidtyWidget = (props: { humidity: number }) => {
  return (
    <Container>
      <Value>{props.humidity}%</Value>
      <Subtitle>Humidity</Subtitle>
      <Progress $value={props.humidity * 3} />
    </Container>
  )
}

export default HumidtyWidget

const Container = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 142px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-radius: 32px;
  background: linear-gradient(
      0deg,
      rgba(47, 81, 255, 0.5) 0%,
      rgba(47, 81, 255, 0.5) 100%
    ),
    #ffffff;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`

const Value = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  z-index: 1;
`

const Subtitle = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  z-index: 1;
`

const Progress = styled.div<{ $value?: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(props) => props.$value || 50}px;
  height: 142px;
  background: #2f51ff;
`
