import React from "react"
import { useEffect, useState } from "react" // Import useEffect and useState from "react" module
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import axios from "axios"

import TempWidget from "./Widgets/TempWidget"

import "./reset.css"

const api_key = process.env.WEATHER_API_KEY
const api_base = process.env.WEATHER_CURRENT_LINK_BASE


const IndexPage = () => {
  // City States
  const [display_city, setDisplayCity] = useState("")
  const [city_name, setCityName] = useState("New York")
  const [state_code, setStateCode] = useState("NY")
  const [country_code, setCountryCode] = useState("USA")

  // Tempurature States
  const [temp, setTemp] = useState()
  const [temp_feel, setTempFeel] = useState()
  const [temp_min, setTempMin] = useState()
  const [temp_max, setTempMax] = useState()
  const [humidity, setHumidity] = useState()
  const [pressure, setPressure] = useState()

  // Sun States
  const [sunrise, setSunrise] = useState()
  const [sunset, setSunset] = useState()

  // Weather States
  const [weather, setWeather] = useState()
  const [weather_description, setWeatherDescription] = useState()
  const [weather_icon, setWeatherIcon] = useState()

  // Wind States
  const [wind_speed, setWindSpeed] = useState()
  const [wind_deg, setWindDeg] = useState()

  // Error States
  const [error, setError] = useState(false)

  useEffect(() => {
    searchWeather()
  }, [])

  const handleUpdateCity = (event: any) => {
    setCityName(event.target.value)
  }

  const handleUpdateState = (event: any) => {
    setStateCode(event.target.value)
  }

  const searchWeather = () => {
    axios
      .get(
        `${api_base}q=${city_name},${state_code},${country_code}&appid=${api_key}&units=imperial`
      )
      .then((res) => {
        setDisplayCity(`${city_name}, ${state_code}`)
        setTemp(res.data.main.temp)
        setTempFeel(res.data.main.feels_like)
        setTempMin(res.data.main.temp_min)
        setTempMax(res.data.main.temp_max)
        setHumidity(res.data.main.humidity)
        setPressure(res.data.main.pressure)
        setSunrise(res.data.sys.sunrise)
        setSunset(res.data.sys.sunset)
        setWeather(res.data.weather[0].main)
        setWeatherDescription(res.data.weather[0].description)
        setWeatherIcon(res.data.weather[0].icon)
        setWindSpeed(res.data.wind.speed)
        setWindDeg(res.data.wind.deg)
      })
      .catch((err) => {
        setError(true)
      })
  }

  return (
      <Container>
        <Title>{display_city}</Title>
        <InputContainer>
          <CityInput type="text" id="city_name" placeholder="City" onChange={handleUpdateCity} />
          <StateInput type="text" id="state_code" placeholder="State" onChange={handleUpdateState} />
          <SearchButton onClick={searchWeather}>GO</SearchButton>
        </InputContainer>
        <WidgetContainer>
          <TempWidget temp={temp} temp_min={temp_min} temp_max={temp_max} />
          <WeatherWidget weather={weather} weather_description={weather_description} />
          <PressureWidget humidity={humidity} pressure={pressure} />
          <WindWidget wind_speed={wind_speed} wind_deg={wind_deg} />
          <SunWidget sunrise={sunrise} sunset={sunset} />
        </WidgetContainer>
      </Container>
  )
}



const WeatherWidget = (props) => {
  return (
    <WeatherContainer>
      <p>{props.weather}</p>
      <p>{props.weather_description}</p>
    </WeatherContainer>
  )
}

const PressureWidget = (props) => {
  return (
    <PressureContainer>
      <p>{props.humidity}%</p>
      <p>{props.pressure} hPa</p>
    </PressureContainer>
  )
}

const WindWidget = (props) => {
  return (
    <WindContainer>
      <p>{props.wind_speed} mph</p>
      <p>{props.wind_deg}°</p>
    </WindContainer>
  )
}

const SunWidget = (props) => {
  return (
    <SunContainer>
      <p>{props.sunrise}</p>
      <p>{props.sunset}</p>
    </SunContainer>
  )
}

const Container = styled.div`
  display: flex;
  padding: 22px 80px;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(73deg, #0F7CB0 -3.23%, #3098D9 32.81%, #3DADD9 78.01%, #C2E0F2 106.61%);
`

const Title = styled.h1`
  color: #FCF5E5;
  font-family: 'Editorial Old', serif;
  font-size: 6rem;
  text-align: center;
`

const InputContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`
const CityInput = styled.input`
  width: 300px;
  height: 60px;

  padding: 16px;

  border: none;
  border-radius: 32px;
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const StateInput = styled.input`
  width: 150px;
  height: 60px;

  padding: 16px;

  border: none;
  border-radius: 32px;
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const SearchButton = styled.button`
  width: 60px;
  height: 60px;

  display: flex;
  padding: 18px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 32px;
  background: #D9C516;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const WidgetContainer = styled.div`
  display: flex;
  width: 932px;
  padding: 32px 0px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
`



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
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const WindContainer = styled.div`
 display: flex;
  width: 300px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 32px;
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const PressureContainer = styled.div`
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
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

const SunContainer = styled.div`
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
  background: #FCF5E5;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.10), 14px 14px 20px 0px rgba(0, 0, 0, 0.09), 32px 31px 27px 0px rgba(0, 0, 0, 0.05), 57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0.00);
`

export default IndexPage

export const Head: HeadFC = () => <title>Weather</title>
