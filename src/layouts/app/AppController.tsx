import AppView from "./AppView";
import {useCallback, useState} from "react";
import {getInitialTab, HeaderTabs} from "./AppRepository";

function AppController() {
    const [currentTab, setCurrentTab] = useState<HeaderTabs>(getInitialTab());

    const tabChangedHandler = useCallback((tab:string) => setCurrentTab(tab as HeaderTabs), []);

    return (
        <AppView
            currentTab={currentTab}
            onTabChanged={tabChangedHandler}
        />
    )
}

export default AppController;
