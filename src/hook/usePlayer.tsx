import { useDispatch, useSelector } from "react-redux";
import { setPage1, setPage10, setPage11, setPage12, setPage13, setPage14, setPage15, setPage16, setPage17, setPage18, setPage19, setPage2, setPage20, setPage3, setPage4, setPage5, setPage6, setPage7, setPage8, setPage9 } from "../shared/config/currentSlice";
import item from "../config/content/ContentConfig";

const usePlayer = () => {

    const dispatch = useDispatch();

    const {page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20} = (useSelector((state) => state) as any).currency;

    const setPageNr = (which: number, i: item, m: boolean = false) =>{
        switch(which){
            case 0:
                dispatch(setPage1({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 1:
                dispatch(setPage2({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 2:
                dispatch(setPage3({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 3:
                dispatch(setPage4({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 4:
                dispatch(setPage5({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 5:
                dispatch(setPage6({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 6:
                dispatch(setPage7({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 7:
                dispatch(setPage8({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 8:
                dispatch(setPage9({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 9:
                dispatch(setPage10({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 10:
                dispatch(setPage11({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 11:
                dispatch(setPage12({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 12:
                dispatch(setPage13({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 13:
                dispatch(setPage14({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 14:
                dispatch(setPage15({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 15:
                dispatch(setPage16({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 16:
                dispatch(setPage17({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 17:
                dispatch(setPage18({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 18:
                dispatch(setPage19({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
            case 19:
                dispatch(setPage20({
                    innerItem: i,
                    mutliColor: m,
                    index: which
                }));
                break;
        }
        
    }

    const getPageNr = (which: number) => {
        switch(which){
            case 1:
                return page1;
                break;
            case 2:
                return page2;
            case 3:
                return page3;
            case 4:
                return page4;
            case 5:
                return page5;
            case 6:
                return page6;
            case 7:
                return page7;
            case 8:
                return page8;
            case 9:
                return page9;
            case 10:
                return page10;
            case 11:
                return page11;
                break;
            case 12:
                return page12;
            case 13:
                return page13;
            case 14:
                return page14;
            case 15:
                return page15;
            case 16:
                return page16;
            case 17:
                return page17;
            case 18:
                return page18;
            case 19:
                return page19;
            case 20:
                return page20;
        }
    }

    const setSelectedToThis = (indexOfPage: number) => {
        for(let i=0; i<20; i++){
            setPageNr(i, getPageNr(i+1).innerItem);
        }
        setPageNr(indexOfPage, getPageNr(indexOfPage+1).innerItem, true);
    }

    return ({
        setPageNr, getPageNr, setSelectedToThis, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20
    })

}

export default usePlayer