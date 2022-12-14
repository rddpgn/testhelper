import React, {useCallback, useState} from "react";

type Props = {
    children: JSX.Element | JSX.Element[];
    initialTab: string,
    onTabChanged?: (tab: string) => void;
}

function getChildTabs(children: JSX.Element | JSX.Element[]) {
    return Array.isArray(children) ? children : [children];
}

function Tabs({children, initialTab, onTabChanged}: Props) {
    const [selectedTab, updateSelectedTab] = useState<string>(initialTab || '0');

    const clickHandler = useCallback((id: string) => {
        updateSelectedTab(id);
        onTabChanged && onTabChanged(id);
    }, [children, selectedTab, onTabChanged]);

    const clone = (tab: JSX.Element) => React.cloneElement(tab, {
        ...tab.props,
        onClick: clickHandler,
        selected: selectedTab === tab.props.id,
    });

    return (
        <div>
            {getChildTabs(children)
                .map(clone)}
        </div>
    )
}

export default Tabs;