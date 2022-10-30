import style from "./CommandsSearch.module.css";
import React, {useCallback, useState} from "react";

type Props = {
    onChange: (value: string) => void;
}

function CommandsSearch({onChange}: Props) {
    const [value, setValue] = useState<string>('');

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }, [value]);

    return (
        <div className={style.wrapper}>
            <div className={style.icon}>
            </div>
            <input
                className={style.input}
                type="text"
                value={value}
                onChange={handleChange}
                placeholder='Поиск'
            />
        </div>
    )
}

export default CommandsSearch;