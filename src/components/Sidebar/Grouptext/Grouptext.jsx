import React from 'react'
import ob from './Grouptext.module.css'
import Text from './Text/Text'

const Grouptext = () => {
    return (
        <div>
            <ul className={ob.ul}>
                    <Text eq="Парковка"/>
                    <Text eq="Страховка"/>
                    <Text eq="Бензин"/>
                    <Text eq="Обслуживание"/>
                </ul>
        </div>
    )
}


export default Grouptext;