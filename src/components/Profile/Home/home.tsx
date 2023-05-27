import DailyProgress from "./DailyProgress"
import Articles from "./Articles"
import './Home.css'

export default function Home(){
    return (
        <div className="home">
            <div className="progress">
                <h2>Your Achievements</h2>
                <DailyProgress/>
                {/* <p>Keep up the great work!</p>
                <p>Don't forget to track your cravings and triggers.</p> */}
            </div>

            <div className="articles">
                <h2>Featured Articles</h2>
                <Articles/>
            </div>
            

        </div>
    )
}