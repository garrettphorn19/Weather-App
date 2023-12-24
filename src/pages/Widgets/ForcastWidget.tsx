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
  const time = dateObj.toLocaleTimeString([], {
    timeStyle: "short",
  })

  const tempHigh = Math.round(day.day.main.temp_max, 2)
  const tempLow = Math.round(day.day.main.temp_min, 2)

  const weatherIcon = day.day.weather[0].icon
  console.log(weatherIcon)

  return (
    <Container>
      <TextContainer>
        <Text>
          {month}/{date}
        </Text>
        <Text>{dayOfWeek}</Text>
        <TimeText>{time}</TimeText>
      </TextContainer>
      <TextContainer>
        <Text>↑{tempHigh}</Text>
        <Text>↓{tempLow}</Text>
        <Icon src={`${api_link}${weatherIcon}@2x.png`} alt="Icon" />
      </TextContainer>
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

const Text = styled.p`
  color: #000000;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0;
  padding: 0;
`

const TimeText = styled.p`
  color: #6e6e6e;
  text-align: center;
  font-family: "Neue Montreal", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0;
  padding: 0;
`

const Icon = styled.img`
  width: 100px;
  height: 100px;

  margin: 0;
  padding: 0;
`
