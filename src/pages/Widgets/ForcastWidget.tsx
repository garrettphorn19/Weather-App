import React from "react"
import styled from "styled-components"

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const api_link = process.env.WEATHER_ICON_LINK_BASE

const ForcastWidget = (day: any) => {
  console.log(day)
  const dateObj = new Date(day.day.dt_txt)
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()
  const dayOfWeek = weekdays[dateObj.getDay()]

  const tempHigh = Math.round(day.day.main.temp_max, 2)
  const tempLow = Math.round(day.day.main.temp_min, 2)

  const weatherIcon = day.day.weather[0].icon
  console.log(weatherIcon)

  return (
    <Container>
      <div>
        <p>
          {month}/{date}
        </p>
        <p>{dayOfWeek}</p>
      </div>
      <div>
        <p>↑{tempHigh}</p>
        <p>↓{tempLow}</p>
      </div>
      <Icon src={`${api_link}${weatherIcon}@2x.png`} alt="Icon" />
    </Container>
  )
}

export default ForcastWidget

const Container = styled.div`
  display: flex;
  width: 932px;
  height: 100px;
  padding: 16px;
  justify-content: space-between;
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

const Icon = styled.img`
  width: 100px;
  height: 100px;
`
