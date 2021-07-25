import React from 'react'
import Points from './Points/Points'
import ob from './Description.module.css'

const Description = (props) => {

  let location = props.location;
  { console.log(location.value1, location.value2) }
  location.value1 = (location.value1 == null) ? '' : location.value1;
  location.value2 = (location.value2 == null) ? '' : location.value2;
  let sepatator = (location.value1 == '') ? '' : ', ';



  return (
    <div className={ob.description}>
      <div>
        <p>Ваш заказ:</p>
        <div className={ob.order_details}>
          <p>Пункт выдачи</p>
          <Points />
          <div>
            <p>{location.value1}{sepatator}</p>
            <p>{location.value2}</p>
          </div>
          {console.log(location.value1)}
        </div>


        
        {/* <p>{`value: ${props.locatv !== null ? `'${props.locatv}'` : 'null'}`}</p>
      <p>{console.log(props.locatv, props.locatinp)}</p>
      <div>{`inputValue: '${props.locatinp}'`}</div> */}
      </div>
    </div>
  )
}

export default Description;