import usePlayer from "../../hook/usePlayer"

const PlayerStats = () => {

    const player = usePlayer();

    return <div>
        <span>HP: {player.HP}</span><br></br>
        <span>Power: {player.Power}</span><br></br>
        <span>Gold: {player.Gold}</span>
    </div>
}

export default PlayerStats