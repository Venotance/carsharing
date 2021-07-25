import React from 'react'
import { render } from 'react-dom';
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
import Description from './Description/Description';
import Map from './img/map.jpg';
import { NavLink } from 'react-router-dom'
// import Autocomplete from "./Autocomplete";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ob1 from './Autocomplete.module.css'


const OrderPage = () => {

  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const [inputValue1, setInputValue1] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');

  let adress = [
    {
      city: "Ульяновск", point: ["Карла Маркса, 13А",
        "Скочилова, 2",
        "Пионерская, 12/21",
        "Заречная, 9А"]
    },
    {
      city: "Саранск", point: ["просп. Российской Армии, 2/2",
        "Коммунистическая, 36",
        "Васенко, 8",
        "Ульянова, 22А"]
    },
    {
      city: "Пермь", point: ["Екатерининская, 105",
        "Карпинского, 25",
        "Борцов, 167",
        "Лядовская, 108А"]
    },
    {
      city: "Астрахань", point: ["Свердлова, 12",
        "Савушкина, 51А",
        "Минусинская, 2А",
        "Ленинградский, 9А"]
    },
  ]

  let location = {value1, value2}


  let arrCities = adress.map((el) => el.city)
  let arrPoints = () => {
    let points = []
    let cityValue = adress.map((el) => {
      if (value1 == el.city)
        return points = el.point
    })
    return points;
  }
  // let arrPoints = adress.map((el) => el.city)

  let inputEQ = (eq) => {
    if (eq == "Город") {
      return arrCities
    }
    else if (eq == "Пункт") {
      return arrPoints()
    }
  }

  return (
    <div className={ob.content}>
      <Header />
      <div></div>

      <div className={ob.navbar}>
        <div className={ob.navbar_elements}>
          <div>
            <NavLink to='/carsharing/orderpage/location' className={ob.nav_element} activeClassName={ob.nav_element_active}>Местоположение</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/model' className={ob.nav_element} activeClassName={ob.nav_element_active}>Модель</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/additionally' className={ob.nav_element} activeClassName={ob.nav_element_active}>Дополнительно</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/total' className={ob.nav_element} activeClassName={ob.nav_element_active}>Итого</NavLink>
          </div>
        </div>
      </div>


      <div className={ob.body}>
        <div className={ob.body_content}>
          <div className={ob.geolocation}>
            <div className={ob.select_adress}>
              <div className={ob.city_line}>
                <div><p>Город</p></div>
                <Autocomplete
                  onInputChange={(event, newInputValue1) => {
                    setInputValue2('');
                    setValue2(null);
                  }}
                  onChange={(event, newValue1) => {
                    setValue1(newValue1);
                  }}
                  className={ob1.aut}
                  id="combo-box-demo"
                  options={inputEQ("Город")}
                  getOptionLabel={(option) => option}
                  style={{ width: 224, height: 25 }}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" placeholder="Начните вводить город ..." />
                  )}
                />
              </div>
              <div className={ob.point_line}>
                <div><p>Пункт выдачи</p></div>
                <Autocomplete
                  onChange={(event, newValue2) => {
                    setValue2(newValue2);
                  }}
                  inputValue={(value2==null) ? '' : inputValue2}
                  onInputChange={(event, newInputValue2) => {
                    (value1==null) ? setInputValue2('') : setInputValue2(newInputValue2);
                  }}
                  className={ob1.aut}
                  id="combo-box-demo"
                  options={inputEQ("Пункт")}
                  getOptionLabel={(option) => option}
                  style={{ width: 224, height: 25 }}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" placeholder="Начните вводить пункт ..." />
                  )}
                />

              </div>
            </div>
            <div className={ob.map}>
              <p>Выбрать на карте:</p>
              <img src={Map} alt="" />
            </div>
          </div>
          <Description 
          location={location}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderPage;