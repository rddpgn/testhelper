import style from './AppView.module.css';
import HeaderController from './layouts/header/HeaderController';

function AppView() {
    return (
        <div className={style.wrapper}>
            <HeaderController/>
        </div>
    )
}

export default AppView;