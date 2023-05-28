import { useNavigate, useParams } from "react-router-dom";

const style = {
    backgroundImage: "url('/Dashboard/BeatCravings.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '20rem',
    width: '30rem',
    borderRadius: '1rem'
    
};

export default function Cravings(){
    const {userID} = useParams()
    const navigate = useNavigate()
    const handleClick= ()=>{
        navigate(`/${userID}/trigger`)
    }
    return (
        <div style={style} onClick={handleClick}>
        <h2 style={{textAlign: 'center', padding: '6rem', color: 'orange', fontSize: '4rem', textShadow: '1px 1px white'}}>Beat Cravings</h2>
        </div>
    )

}