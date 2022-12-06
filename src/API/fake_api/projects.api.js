// const qualities = {
//     tedious: {
//         _id: "67rdca3eeb7f6fgeed471198",
//         name: "Нудила",
//         color: "primary"
//     },
//     strange: {
//         _id: "67rdca3eeb7f6fgeed471100",
//         name: "Странный",
//         color: "secondary"
//     },
//     buller: {
//         _id: "67rdca3eeb7f6fgeed4711012",
//         name: "Троль",
//         color: "success"
//     },
//     alcoholic: {
//         _id: "67rdca3eeb7f6fgeed471101",
//         name: "Алкоголик",
//         color: "danger"
//     },
//     handsome: {
//         _id: "67rdca3eeb7f6fgeed471102",
//         name: "Красавчик",
//         color: "info"
//     },
//     uncertain: {
//         _id: "67rdca3eeb7f6fgeed471103",
//         name: "Неуверенный",
//         color: "dark"
//     }
// }

// const users = [
//     {
//         _id: "67rdca3eeb7f6fgeed471815",
//         name: "Джон Дориан",
//         qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
//         completedMeetings: 36,
//         rate: 2.5,
//         bookmark: false
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed471816",
//         name: "Кокс",
//         qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
//         completedMeetings: 15,
//         rate: 2.5,
//         bookmark: false
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed471817",
//         name: "Боб Келсо",
//         qualities: [qualities.buller],
//         completedMeetings: 247,
//         rate: 3.5,
//         bookmark: false
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed471818",
//         name: "Рэйчел Грин",
//         qualities: [qualities.uncertain],
//         completedMeetings: 148,
//         rate: 3.5,
//         bookmark: false
//     },
//     {
//         _id: "67rdca3eeb7f6fgeed471819",
//         name: "Шелдон Купер",
//         qualities: [qualities.strange, qualities.tedious],
//         completedMeetings: 37,
//         rate: 4.6,
//         bookmark: false
//     }
// ]

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(users)
//         }, 2000)
//     })

// const getById = (id) =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(users.find((user) => user._id === id))
//         }, 1000)
//     })


const projects = [
    {
        id: "256",
        name: "Подключить кассу Атол",
        events: ["Подключить кассу"],
        time: 1
    },
    {
        id: "24k",
        name: "обновить 1С Розница базовая",
        events: ["Сделать копию", "Обновление бд"],
        time: 2
    },
    {
        id: "ыв5",
        name: "Настроить весы",
        events: ["Подключить весы"],
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

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(projects)
        }, 2000)
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(projects.find((project) => project.id === id))
        }, 1000)
    })

export default {
    fetchAll,
    getById
}
