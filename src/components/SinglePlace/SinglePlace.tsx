import './SinglePlace.css'
import { MouseEventHandler } from 'react'
import usePlayer from '../../hook/usePlayer'
import pageType from '../../shared/config/pageType'

const SinglePlace = (props: pageType) => {

    const player = usePlayer();

    const moveItemRight: MouseEventHandler = ($e) => {
        console.log($e);

        if(props.index==19){
            player.setPageNr(props.index, player.page1.innerItem);   
            player.setPageNr(0,props.innerItem);
        }else{
            player.setPageNr(props.index, player.getPageNr(props.index+2).innerItem);   
            player.setPageNr(props.index+1,props.innerItem);
        }
    }

    const moveItemLeft: MouseEventHandler = ($e) => {
        console.log($e);

        if(props.index==0){
            player.setPageNr(props.index, player.page20.innerItem);
            player.setPageNr(19, props.innerItem);
        }else{
            player.setPageNr(props.index, player.getPageNr(props.index).innerItem);
            player.setPageNr(props.index-1,props.innerItem);
        }
    }

    const changeSelected: MouseEventHandler = ($e) => {
        console.log($e);

        player.setSelectedToThis(props.index);
    }

    const addSelectedClass = () => {
        return props.mutliColor ? "selected" : "";
    }

    return <div className={props.innerItem.category+" SinglePlace "+addSelectedClass()} onClick={moveItemLeft} onMouseDown={changeSelected}>
        <img src={props.innerItem.img} alt={props.innerItem.name} />
    </div>
}

export default SinglePlace