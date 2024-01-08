import './SinglePlace.css'
import { KeyboardEventHandler, MouseEventHandler, MutableRefObject, useEffect, useRef } from 'react'
import usePlayer from '../../hook/usePlayer'
import pageType from '../../shared/config/pageType'
import Empty from '../../config/content/other/Empty'

const SinglePlace = (props: pageType) => {

    const player = usePlayer();

    const divRef = useRef() as MutableRefObject<HTMLDivElement>;

    const moveItemRight = () => {

        if(props.index==19){
            player.setPageNr(props.index, player.page1.innerItem);   
            player.setPageNr(0,props.innerItem);
            (divRef.current.parentNode?.firstChild as HTMLElement)?.focus();
        }else{
            player.setPageNr(props.index, player.getPageNr(props.index+2).innerItem);   
            player.setPageNr(props.index+1,props.innerItem, true);
            (divRef.current.parentNode?.childNodes[props.index+1] as HTMLElement)?.focus();
        }
        divRef.current.blur();
    }

    const moveItemLeft = () => {

        if(props.index==0){
            player.setPageNr(props.index, player.page20.innerItem);
            player.setPageNr(19, props.innerItem, true);
            (divRef.current.parentNode?.lastChild as HTMLElement)?.focus();
        }else{
            player.setPageNr(props.index, player.getPageNr(props.index).innerItem);
            player.setPageNr(props.index-1,props.innerItem, true);
            (divRef.current.parentNode?.childNodes[props.index-1] as HTMLElement)?.focus();
        }
        divRef.current.blur();
    }

    const moveItemDown = () => {

        if(props.index+6<20){
            player.setPageNr(props.index, player.getPageNr(props.index+6).innerItem);
            player.setPageNr(props.index+5, props.innerItem, true);
            (divRef.current.parentNode?.childNodes[props.index+5] as HTMLElement)?.focus();
            divRef.current.blur();
        }
        
    }

    const moveItemUp = () => {

        if(props.index-4>=0){
            player.setPageNr(props.index, player.getPageNr(props.index-4).innerItem);
            player.setPageNr(props.index-5, props.innerItem, true);
            (divRef.current.parentNode?.childNodes[props.index-5] as HTMLElement)?.focus();
            divRef.current.blur();
        }
        
    }

    const changeSelected: MouseEventHandler = ($e) => {
        console.log($e);

        player.setSelectedToThis(props.index);
        divRef.current.focus();

    }

    const addSelectedClass = () => {
        return props.mutliColor ? "selected" : "";
    }

    const sellItem = () => {
        player.setCurrentGold(player.Gold+props.innerItem.price);
        player.setPageNr(props.index, Empty);
    }

    const moveItem: KeyboardEventHandler = ($e) => {
        console.log($e.key);
        switch($e.key){
            case "ArrowRight":
                moveItemRight();
                break;
            case "ArrowUp":
                moveItemUp();
                break;
            case 'ArrowLeft':
                moveItemLeft();
                break;
            case 'ArrowDown':
                moveItemDown();
                break;
            case 'Backspace':
                sellItem();
                break;

        }
    }

    useEffect(()=>{
        divRef.current.focus();
    },[divRef])

    return <div tabIndex={1} className={props.innerItem.category+" SinglePlace "+addSelectedClass()} ref={divRef} onKeyDown={moveItem} onMouseDown={changeSelected}>
        <img src={props.innerItem.img} alt={props.innerItem.name} />
    </div>
}

export default SinglePlace