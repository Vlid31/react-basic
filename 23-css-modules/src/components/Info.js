import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {
//     "info": "Info_info__OhBuI",
//     "myOtherButton": "Info_myOtherButton__V6WP3"
// }

const Info = () => {
    return(
    <div className={styles.info}>
        <div className="info">
            <h1>Hello from the Info Component</h1>
            <h2>Heading in the info component</h2>
            <button className="my-button">Click me in the info component</button>
        </div>
    </div>
    )
}

export default Info