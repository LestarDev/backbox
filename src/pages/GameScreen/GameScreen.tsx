import './GameScreen.css'
import SinglePlace from "../../components/SinglePlace/SinglePlace"
import usePlayer from '../../hook/usePlayer'

const GameScreen = () => {

    const player = usePlayer();

    player.reSumPower();
   

    return <div className="GameScreen">
        <SinglePlace {...player.page1} key={player.page1.index} />
        <SinglePlace {...player.page2} key={player.page2.index}/>
        <SinglePlace {...player.page3} key={player.page3.index} />
        <SinglePlace {...player.page4} key={player.page4.index} />
        <SinglePlace {...player.page5} key={player.page5.index} />

        <SinglePlace {...player.page6} key={player.page6.index} />
        <SinglePlace {...player.page7} key={player.page7.index} />
        <SinglePlace {...player.page8} key={player.page8.index} />
        <SinglePlace {...player.page9} key={player.page9.index} />
        <SinglePlace {...player.page10} key={player.page10.index} />

        <SinglePlace {...player.page11} key={player.page11.index} />
        <SinglePlace {...player.page12} key={player.page12.index} />
        <SinglePlace {...player.page13} key={player.page13.index} />
        <SinglePlace {...player.page14} key={player.page14.index} />
        <SinglePlace {...player.page15} key={player.page15.index} />

        <SinglePlace {...player.page16} key={player.page16.index} />
        <SinglePlace {...player.page17} key={player.page17.index} />
        <SinglePlace {...player.page18} key={player.page18.index} />
        <SinglePlace {...player.page19} key={player.page19.index} />
        <SinglePlace {...player.page20} key={player.page20.index} />
    </div>
}

export default GameScreen