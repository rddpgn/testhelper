import TabModel from "./TabModel";
import TabView from "./TabView";
import {useCallback, useState} from "react";

type Props = {
    tabs: Array<TabModel>;
    initialTab?: TabModel;
}

function TabController({tabs, initialTab}: Props) {
    const [selectedTab, setSelected] = useState<TabModel>(initialTab || tabs[0]);

    const clickHandler = useCallback((name: string) => {
        const model = tabs.filter((tab) => tab.name === name)[0];

        setSelected(() => model);
        model.callback();
    }, tabs);

    return (
        <>
            {tabs.map((tab) =>
                <TabView
                    key={tab.name}
                    text={tab.name}
                    selected={tab == selectedTab}
                    clickHandler={clickHandler}
                />)
            }
        </>
    )
}

export default TabController;