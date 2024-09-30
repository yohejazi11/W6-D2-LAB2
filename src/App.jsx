import { useState } from 'react'
import fat from '../public/fat.jpg'
import toofat from '../public/toofat.jpg'
import mid from '../public/mid.jpg'
import medum from '../public/medum.jpg'
import thin from '../public/thin.jpg'
import './App.css'

function App() {
  const [whight, setWhight] = useState()
  const [tall, setTall] = useState()
  const [mass, setMass] = useState()
  const [bestWaight, setBestWaight] = useState()
  const [photo, setPhoto] = useState()
  function massCalc() {

    setMass(whight / ((tall * 0.01) * (tall * 0.01)))
    bestMass()
  }
  let message;

  function bestMass() {

    setBestWaight(22 * ((tall * 0.01) * (tall * 0.01)))
    if (mass > 35) {
      message = 'بدانة مفرطة'
      setPhoto(toofat)
    } else if (mass >= 30 && mass <= 34.9) {
      message = 'بدانة '
      setPhoto(fat)
    } else if (mass >= 25 && mass <= 29.9) {
      message = 'زيادة في الوزن '
      setPhoto(mid)
    } else if (mass >= 18.5 && mass <= 24.9) {
      message = ' وزن طبيعي '
      setPhoto(medum)
    } else{
      message = ' نقص في الوزن'
      setPhoto(thin)
    }
  }




  return (
    <>
    <div className='flex flex-col justify-center items-center w-full'>
      <div>
        <div>
          كتلة جمسك هي :{mass} , { }
        </div>
        <div>
          الوزن المناسب هو : {bestWaight}
        </div>
        <div>
          الوضع العام : {message}
        </div>
        <img className='w-[20vw] h-[50vh]' src={photo}></img>
      </div>
      <div>
        <div>
          <div>ادخل وزنك</div>
          <input type='number' value={whight} onChange={(e) => { setWhight(e.target.value) }} ></input>
        </div>
        <div>
          <div>ادخل طولك</div>
          <input type='number' value={tall} onChange={(e) => { setTall(e.target.value) }}  ></input>
        </div>
        <button onClick={massCalc}>احسب</button>
      </div>
      </div>
    </>
  )
}

export default App
