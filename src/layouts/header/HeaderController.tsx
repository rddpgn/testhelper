import Tabs from "../../components/tabs/Tabs";
import Tab from "../../components/tabs/Tab";

enum HeaderTabs {
    SETTINGS = 'settings',
    COMMANDS = 'commands',
}

function HeaderController() {
    return (
        <div>
            <Tabs
                initialTab={HeaderTabs.SETTINGS}
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
        </div>
    )
}

export default HeaderController;
