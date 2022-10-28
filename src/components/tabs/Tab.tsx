import React, {useCallback} from "react";
import style from './style.module.css';

type Props = {
    id: string,
    selected?: boolean,
    children?: React.ReactNode;
    onClick?: (key: string) => void;
}

function Tab({id, selected, children, onClick}: Props) {
    const clickHandler = onClick && useCallback(() => onClick(id), [id, onClick]);

    return (
        <span
            className={`${style.tab} ${selected && style.selected}`}
            onClick={clickHandler}
        >
            {children}
        </span>
    )
}

export default Tab;