import style from './AppView.module.css';
import Tabs from "../../components/tabs/Tabs";
import Tab from "../../components/tabs/Tab";
import {HeaderTabs} from "./AppRepository";
import CommandsSearch from "../../components/commands_search/CommandsSearch";

type Props = {
    currentTab: HeaderTabs;
    onTabChanged: (tab: string) => void;
};

function AppView({currentTab, onTabChanged}: Props) {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Tabs
                    initialTab={currentTab}
                    onTabChanged={onTabChanged}
                >
                    <Tab
                        id={HeaderTabs.SETTINGS}
                        key={HeaderTabs.SETTINGS}
                    >
                        Настройки
                    </Tab>
                    <Tab
                        id={HeaderTabs.COMMANDS}
                        key={HeaderTabs.COMMANDS}
                    >
                        Команды
                    </Tab>
                </Tabs>
                <div className={style.close_button}/>
            </div>
            { currentTab === HeaderTabs.SETTINGS && <div>settings</div>}
            { currentTab === HeaderTabs.COMMANDS && <div>
                <CommandsSearch
                    onChange={(val) => console.log(val)}
                />
            </div>}
        </div>
    )
}

export default AppView;