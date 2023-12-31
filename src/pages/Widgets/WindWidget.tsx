import React from "react"
import styled from "styled-components"

const WindWidget = (props: { wind_speed: number; wind_deg: number }) => {
  return (
    <WindContainer>
      <p>{props.wind_speed} mph</p>
      <p>{props.wind_deg}°</p>
    </WindContainer>
  )
}

export default WindWidget

const WindContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 32px;
  background: var(--White, #fff);

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`
