import React from "react"
import { useEffect, useState } from "react" // Import useEffect and useState from "react" module
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import axios from "axios"

import "./reset.css"

const api_key = process.env.WEATHER_API_KEY
const api_base = process.env.WEATHER_LINK_BASE


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
          <SearchButton onClick={searchWeather}>Search</SearchButton>
        </InputContainer>
        <WidgetContainer>
        <TempContainer>
          <p>{Math.round(temp)}°</p>
          <p>{Math.round(temp_feel)}°</p>
          <p>{Math.round(temp_min)}°</p>
          <p>{Math.round(temp_max)}°</p>
          <p>{humidity}%</p>
          <p>{pressure} hPa</p>
        </TempContainer>
        <SunContainer>
          <p>{Date(sunrise)}</p>
          <p>{Date(sunset)}</p>
        </SunContainer>
        <WeatherContainer>
          <p>{weather}</p>
          <p>{weather_description}</p>
        </WeatherContainer>
        <WindContainer>
          <p>{wind_speed} mph</p>
          <p>{wind_deg} deg</p>
        </WindContainer>
        </WidgetContainer>
      </Container>
  )
}

const Container = styled.div`
  background-color: #282c34;
  color: white;

  height: 100%;
  width: 100vw;

  padding: 1.5rem 5rem;
`

const Title = styled.h1`
  font-family: 'Editorial Old', serif;
  font-size: 4rem;
  text-align: center;
`

const InputContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;
`
const CityInput = styled.input``
const StateInput = styled.input``
const SearchButton = styled.button``

const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const WeatherContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;
`

const WindContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;
`

const TempContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;
`

const SunContainer = styled.div`
  font-family: "Neue Montreal", sans-serif;
  text-align: center;
`

export default IndexPage

export const Head: HeadFC = () => <title>Weather</title>
