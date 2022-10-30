import React, {useCallback} from "react";
import style from './Tab.module.css';
import mcn from "../../utils/MergeClassNames";

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
            className={mcn(style.tab, selected && style.selected, '.noselect')}
            onClick={clickHandler}
        >
            {children}
        </span>
    )
}

export default Tab;