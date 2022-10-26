const projects = [
    {
        id: "256",
        name: "Подключить кассу Атол",
        time: 1
    },
    {
        id: "24k",
        name: "обновить 1С Розница базовая",
        time: 2
    },
    {
        id: "ыв5",
        name: "Настроить весы",
        time: 1.5
    },
    {
        id: "34",
        name: "Подключить сканер",
        time: 0.5
    },
    {
        id: "78",
        name: "Обновить УТ11 (типовая)",
        time: 1
    },
    {
        id: "1112",
        name: "Обновить УТ11 (нетиповая)",
        time: 8
    },
    {
        id: "432",
        name: "Подключить 5 РМ кассиров",
        time: 6
    },
    {
        id: "098",
        name: "Обучить пользователя функциям товароведа",
        time: 4
    },
    {
        id: "45278",
        name: "Первоначальные настройки в 1С",
        time: 3
    },
    {
        id: "3457",
        name: "Внедрение 1С УНФ ИП Беккер",
        time: 21
    },
    {
        id: "3792",
        name: "Внедрение 1С УТ11 ООО Успех плюс",
        time: 28
    },
    {
        id: "67329",
        name: "Списать остатки в 0 ЕГАИС",
        time: 12
    }
]

const fetchAll = () => {
    new Promise(resolve => {
        window.setTimeout(function(){
            resolve(projects)
        }, 1)
    })
}
 
export default fetchAll