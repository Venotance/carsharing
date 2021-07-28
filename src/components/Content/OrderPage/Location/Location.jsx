import React from 'react'
import ob from './Location.module.css'
import { useState } from 'react';
import Map from './img/map.jpg';
import { locparser } from '../ParserLocation';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Location = (props) => {
    let location1 = locparser(1, props);
    let location2 = locparser(2, props);
    const [value1, setValue1] = useState(location1);
    const [value2, setValue2] = useState(location2);
    let inputValue1 = '';
    const [inputValue2, setInputValue2] = useState('');
    const { updateLocation1 } = props;
    // const [inputValue1, setInputValue1] = useState('');

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


    let arrCities = adress.map((el) => el.city)
    let arrPoints = () => {
        let points = []
        let cityValue = adress.map((el) => {
            if (value1 == el.city)
                return points = el.point
        })
        return points;
    }

    let inputEQ = (eq) => {
        if (eq == "Город") {
            return arrCities
        }
        else if (eq == "Пункт") {
            return arrPoints()
        }
    }

    return (
        <div className={ob.geolocation}>
            <div className={ob.select_adress}>
                <div className={ob.city_line}>
                    <div><p>Город</p></div>
                    <Autocomplete
                        onInputChange={(event, newInputValue1) => {
                            (newInputValue1 == value1) ? '' : (
                                setInputValue2(''),
                                setValue2(null))
                        }}
                        onChange={(event, newValue1) => {
                            setValue1(newValue1);
                        }}
                        value={`${(value1 == null) ? '' : value1}`}
                        click={
                            updateLocation1((value1 == null) ? '' :
                                (value1 == '') ? '' : (
                                    (`${value1}${(value2 == null) ? '' :
                                        ((value2 == '') ? '' :
                                            (`, ${value2}`)
                                        )
                                        }`)
                                )
                            )
                        }
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
                        inputValue={(value2 == null) ? '' : inputValue2}
                        onInputChange={(event, newInputValue2) => {
                            (value1 == null) ? setInputValue2('') : setInputValue2(newInputValue2);
                        }}
                        value={`${value2}`}
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
    )
}

export default Location;