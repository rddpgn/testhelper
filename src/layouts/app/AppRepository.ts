enum HeaderTabs {
    SETTINGS = 'settings',
    COMMANDS = 'commands',
}

function getInitialTab():HeaderTabs {
    return HeaderTabs.SETTINGS;
}

export {
    HeaderTabs,
    getInitialTab,
};