import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})

//Global response
export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}

//Response types
export type GetCartsPackResponseType = {
    cartArray: CartsType[]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}

export type CartsType = {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}

type CartsPackType = {
    name: string // если не отправить будет таким "no Name"
    path: string // если не отправить будет такой "/def"
    grade: number // не обязателен
    shots: number // не обязателен
    rating: number // не обязателен
    deckCover: string // не обязателен
    private: boolean // если не отправить будет такой false
    type: string // если не отправить будет таким "pack"
}


type GetCartsResponseType = {
    carts: CartType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string //id юзера создавшего данную колоду
}

type CartType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

//cards
export const APIсards = {
    getCards(cardsPackId: string, lang?: string, question?: string, min?: number, max?: number, sortCards?: string, page?: number, pageCount?: number) {
        return instance.get<APIResponseType<GetCartsResponseType>>(`cards/card/?cardAnswer=${lang}&cardQuestion=${question}&cardsPack_id=${cardsPackId}&min=${min}&max=${max}&sortCards=${sortCards}&page=${page}&pageCount=${pageCount}`);
    },

    addCard(card: AddCardModelType) {
        return instance.post<APIResponseType<CartsType>>('cards/card', {card});
    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card/?id=${cardId}`);
    },
    updateCard(card: UpdateCardModelType) {
        return instance.put('cards/card', {card});
    },

}

//types for CRUD Cards
export type UpdateCardModelType = { id: string, question?: string, comments?: string }
export type AddCardModelType = {
    cardsPack_id: string,
    question?: string,
    answer?: string,
    grade?: number,
    shots?: number,
    rating?: 0,
    answerImg?: string,
    questionImg?: string
    questionVideo?: string,
    answerVideo?: string,
    type?: string
}