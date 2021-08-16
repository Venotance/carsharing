import React from 'react'
import ob from './Model.module.css'
import { useState } from 'react';
import elantra from './img/elantra.jpg';
import creta from './img/creta.jpg';
import i30n from './img/i30n.jpg';
import sonata from './img/sonata.jpg';

const Model = () => {
    const [value, setValue] = useState(1);
    function changeHandler(event) {
        setValue(event.target.value);
    }

    const [auto, setAuto] = useState(1);
    function changeAuto(event) {
        setAuto(event.target.value);
    }

    return (
            <div className={ob.step_two}>
                <div className={ob.cat_row}>

                    <div className={ob.category}>
                        <div>
                            <input className={ob.in_rad} type="radio" name="category" value="1" id="all" checked={value === '1' ? true : false} onChange={changeHandler} ></input>
                            <label for="all">Все модели</label>
                        </div>
                        <div>
                            <input className={ob.in_rad} type="radio" name="category" value="2" id="econom" checked={value === '2' ? true : false} onChange={changeHandler}></input>
                            <label for="econom">Эконом</label>
                        </div>
                        <div>
                            <input className={ob.in_rad} type="radio" name="category" value="3" id="premium" checked={value === '3' ? true : false} onChange={changeHandler}></input>
                            <label for="premium">Премиум</label>
                        </div>
                    </div>
                    <div className={ob.waste}></div>
                </div>

                <div className={ob.choice_mobile}>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="1" checked={auto === '1' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>ELANTRA</h3>
                            <p>12 000 - 25 000 ₽</p>
                            <img src={elantra}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="2" checked={auto === '2' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>i30 N</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={i30n}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="3" checked={auto === '3' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>CRETA</h3>
                            <p>12 000 - 25 000 ₽</p>
                            <img src={creta}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="4" checked={auto === '4' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>SONATA</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={sonata}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="5" checked={auto === '5' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>SONATA</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={sonata}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="6" checked={auto === '6' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>SONATA</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={sonata}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="7" checked={auto === '7' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>SONATA</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={sonata}></img>
                        </div>
                    </label>
                    <label className={ob.card}>
                        <input type="radio" name="car" value="8" checked={auto === '8' ? true : false} onChange={changeAuto}></input>
                        <div className={ob.automobile}>
                            <h3>SONATA</h3>
                            <p>10 000 - 32 000 ₽</p>
                            <img src={sonata}></img>
                        </div>
                    </label>
                </div>
            </div>
    )
}

export default Model;