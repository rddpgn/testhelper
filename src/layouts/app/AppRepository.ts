enum HeaderTabs {
    SETTINGS = 'settings',
    COMMANDS = 'commands',
}

function getInitialTab():HeaderTabs {
    return HeaderTabs.COMMANDS;
}

const LAYOUTS = [
    'Layout_0',
    'Layout_1',
    'Layout_2',
    'Layout_3',
]

export {
    HeaderTabs,
    getInitialTab,
    LAYOUTS,
};