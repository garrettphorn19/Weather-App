import React from "react"
import { useEffect, useState } from "react" // Import useEffect and useState from "react" module
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import axios from "axios"

const api_key = process.env.WEATHER_API_KEY
const api_base = process.env.WEATHER_LINK_BASE


const IndexPage: React.FC<PageProps> = () => {
  // City States
  const [display_city, setDisplayCity] = useState()
  const [city_name, setCityName] = useState("")
  const [state_code, setStateCode] = useState("")
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
  const [error, setError] = useState()

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
        setWeather(res.data.weather[0])
        setWeatherDescription(res.data.weather[0].description)
        setWeatherIcon(res.data.weather[0].icon)
        setWindSpeed(res.data.wind.speed)
        setWindDeg(res.data.wind.deg)
      })
      .catch((err) => {
        setError(err)
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
        <WeatherContainer>
          <p>{temp}F</p>
          <p>{temp_feel}F</p>
          <p>{temp_min}F</p>
          <p>{temp_max}F</p>
          <p>{humidity}%</p>
          <p>{pressure} hPa</p>
          <p>{sunrise}</p>
          <p>{sunset}</p>
          <p>{weather_description}</p>
          <p>{wind_speed} mph</p>
          <p>{wind_deg} deg</p>
        </WeatherContainer>
      </Container>
  )
}

const Container = styled.div``
const Title = styled.h1``

const InputContainer = styled.div``
const CityInput = styled.input``
const StateInput = styled.input``
const SearchButton = styled.button``

const WeatherContainer = styled.div``

export default IndexPage

export const Head: HeadFC = () => <title>Weather</title>
