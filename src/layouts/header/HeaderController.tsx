import TabController from "../../components/tab/TabController";

function HeaderController() {
    return (
        <div>
            <TabController tabs={[
                {
                    name: 'Настройки',
                    callback: () => console.log('Настройки'),
                },
                {
                    name: 'Команды',
                    callback: () => console.log('Команды'),
                }
            ]}/>
        </div>
    )
}

export default HeaderController;
