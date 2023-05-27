const style = {
    backgroundImage: "url('/Dashboard/BeatCravings.jpg')",
    backgroundSize: "cover",
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundPosition: "center",
    height: '20rem',
    width: '30rem',
    borderRadius: '1rem'
    
};

export default function Cravings(){
    return (
        <div style={style}>
        <h2 style={{textAlign: 'center', padding: '6rem', color: 'orange', fontSize: '4rem', textShadow: '1px 1px white'}}>Beat Cravings</h2>
        </div>
    )

}