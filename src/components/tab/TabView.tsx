import {useCallback} from "react";
import style from './style.module.css';

type Props = {
    text: string;
    selected: Boolean;
    clickHandler: (key: string) => void;
}

function TabView({text, selected, clickHandler}: Props) {
    const clickHandlerCallback = useCallback(() => clickHandler(text), [text, clickHandler]);
    const selectedClass = selected ? style.selected : '';

    return (
        <span
            className={`${style.tab} ${selectedClass}`}
            onClick={clickHandlerCallback}
        >
            {text}
        </span>
    )
}

export default TabView;