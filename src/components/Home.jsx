import FilmInfo from './FilmInfo'
import FilmYear from './FilmYear'
import {data} from "../helper/data"
import { useState } from 'react'

const Home = () => {
  
const[info , setInfo] = useState(2022)

  return (
    <div className='d-flex gap-5 p-1 justify-content-center border shadow w-100 m-3 '>
      <FilmYear  data={data} setInfo={setInfo} />
      <FilmInfo data={data} info = {info} />
    </div>
  )
}

export default Home