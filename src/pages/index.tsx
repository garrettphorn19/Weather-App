import React from "react"
import { useEffect, useState } from "react" // Import useEffect and useState from "react" module
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import axios from "axios"

import TempWidget from "./Widgets/TempWidget"
import WeatherWidget from "./Widgets/WeatherWidget"
import PressureWidget from "./Widgets/PressureWidget"
import HumidityWidget from "./Widgets/HumidityWidget"
import WindWidget from "./Widgets/WindWidget"
import SunWidget from "./Widgets/SunWidget"

import "./reset.css"
import ForcastWidget from "./Widgets/ForcastWidget"

const api_key = process.env.WEATHER_API_KEY
const api_base = process.env.WEATHER_CURRENT_LINK_BASE
const forcast_api_base = process.env.WEATHER_FORCAST_LINK_BASE

const IndexPage = () => {
  // City States
  const [display_city, setDisplayCity] = useState("")
  const [city_name, setCityName] = useState("New York")
  const [state_code, setStateCode] = useState("NY")
  const [country_code, setCountryCode] = useState("USA")

  // Location Statess
  const [lat, setLat] = useState<number>(40.71)
  const [lon, setLon] = useState<number>(74.0)

  const [forcast, setForcast] = useState<any>([])

  // Tempurature States
  const [temp, setTemp] = useState<number>(0)
  const [temp_feel, setTempFeel] = useState<number>(0)
  const [temp_min, setTempMin] = useState<number>(0)
  const [temp_max, setTempMax] = useState<number>(0)
  const [humidity, setHumidity] = useState<number>(0)
  const [pressure, setPressure] = useState<number>(0)

  // Sun States
  const [sunrise, setSunrise] = useState<number>(0)
  const [sunset, setSunset] = useState<number>(0)

  // Weather States
  const [weather, setWeather] = useState<string>("")
  const [weather_description, setWeatherDescription] = useState<string>("")
  const [weather_icon, setWeatherIcon] = useState<string>("")

  // Wind States
  const [wind_speed, setWindSpeed] = useState<number>(0)
  const [wind_deg, setWindDeg] = useState<number>(0)

  // Error States
  const [error, setError] = useState<boolean>(false)

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
        setLat(res.data.coord.lat)
        setLon(res.data.coord.lon)
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

    getForcast()
  }

  const getForcast = () => {
    axios
      .get(
        `${forcast_api_base}lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`
      )
      .then((res) => {
        console.log(res.data.list)
        setForcast(res.data.list)
      })
      .catch((err) => {
        setError(true)
      })
  }

  return (
    <Container>
      <Title>{display_city}</Title>
      <InputContainer>
        <CityInput
          type="text"
          id="city_name"
          placeholder="City"
          onChange={handleUpdateCity}
        />
        <StateInput
          type="text"
          id="state_code"
          placeholder="State"
          onChange={handleUpdateState}
        />
        <SearchButton onClick={searchWeather}>GO</SearchButton>
      </InputContainer>
      <WidgetContainer>
        <TempWidget temp={temp} temp_min={temp_min} temp_max={temp_max} />
        <WindWidget wind_speed={wind_speed} wind_deg={wind_deg} />
        <StackedWidgetContainer>
          <PressureWidget pressure={pressure} />
          <HumidityWidget humidity={humidity} />
        </StackedWidgetContainer>
        <WeatherWidget
          weather={weather}
          weather_description={weather_description}
          weather_icon={weather_icon}
        />
        <SunWidget sunrise={sunrise} sunset={sunset} />
      </WidgetContainer>
      <ForcastContainer>
        {forcast.map((day: any, key: any) => (
          <ForcastWidget key={key} day={day} />
        ))}
      </ForcastContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 32px 80px;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    73deg,
    #0f7cb0 -3.23%,
    #3098d9 32.81%,
    #3dadd9 78.01%,
    #c2e0f2 106.61%
  );
`

const Title = styled.h1`
  color: var(--White, #fff);

  /* Drop Shadow */
  text-shadow: 4px 3px 11px rgba(0, 0, 0, 0.1),
    14px 14px 20px rgba(0, 0, 0, 0.09), 32px 31px 27px rgba(0, 0, 0, 0.05),
    57px 56px 32px rgba(0, 0, 0, 0.01), 90px 87px 35px rgba(0, 0, 0, 0);
  font-family: "Editorial Old", serif;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
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
  background: #ffffff;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
`

const StateInput = styled.input`
  width: 150px;
  height: 60px;

  padding: 16px;

  border: none;
  border-radius: 32px;
  background: #ffffff;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);
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
  background: #d9c516;

  /* Drop Shadow */
  box-shadow: 4px 3px 11px 0px rgba(0, 0, 0, 0.1),
    14px 14px 20px 0px rgba(0, 0, 0, 0.09),
    32px 31px 27px 0px rgba(0, 0, 0, 0.05),
    57px 56px 32px 0px rgba(0, 0, 0, 0.01), 90px 87px 35px 0px rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
    background: #c2b316;
    scale: 1.05;
  }

  &:active {
    background: #a89e14;
    scale: 0.9;
  }
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

const StackedWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
const ForcastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default IndexPage

export const Head: HeadFC = () => <title>Weather</title>
