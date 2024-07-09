import {useState} from 'react'
import generateRandomNum from '../utils/generateRandomNum'

const RandomNumber = (props) => {
    console.log(props)
    const [randomNum, setRandomNum] = useState(generateRandomNum(props.maxNum))
    const changeRadomNum = () => {
        setRandomNum(generateRandomNum(props.maxNum))
    }

    return(    
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRadomNum}>Get random number</button>
        </div>
    )
}

export default RandomNumber
