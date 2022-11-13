import style from "./CommandsSelect.module.css";
import {useCallback, useEffect, useState} from "react";
import {LAYOUTS} from "../../layouts/app/AppRepository";
import mcn from "../../utils/MergeClassNames";

function CommandsSelect() {
    const [value, setValue] = useState<string>(LAYOUTS[0]);
    const [opened, setOpened] = useState<boolean>(false);

    const buttonClickHandler = useCallback(() => setOpened(true), []);
    const optionClickHandler = useCallback((value:string) => {
        setOpened(false);
        setValue(value);
    }, []);

    useEffect(() => {
        if (!opened) return;

        const event = 'click';
        const callback = () => setOpened(false);

        setTimeout(() => document.addEventListener(event, callback), 0);
        return () => document.removeEventListener(event, callback);
    }, [opened]);

    return (
        <div className={style.wrapper}>
            <div className={style.select_wrapper}>
                <div className={style.icon}/>
                <button
                    className={style.value}
                    onClick={buttonClickHandler}
                >
                    {value}
                </button>
            </div>
            <div className={mcn(opened && style.options_wrapper_active, style.options_wrapper)}>
                {LAYOUTS.map((layout) => (
                    <div className={mcn(style.option, layout === value && style.option_selected)}
                         onClick={() => optionClickHandler(layout)}
                         key={layout}
                    >{layout}</div>
                ))}
            </div>
        </div>
    )
}

export default CommandsSelect;