const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const MOVE_ITEM_TO_TOP = 'MOVE_ITEM_TO_TOP';
const CLOSE_OPEN_TOGLE_ADD_ITEM_MENU = 'CLOSE_OPEN_TOGLE_ADD_ITEM_MENU';



export type ItemType = {
    name: string
    description: string
    img: string
    price: number
    id: number
}

let initialState = {
    editMode: false,
    items: [
        {
            name: 'Lenovo IdeaPad S540-14IML',
            description: 'Touch-Screen i7-10510U 10th Gen 12GB RAM 512GB SSD Laptop 81V00003US - Abyss Blue',
            img: 'https://pcmarket.uz/wp-content/uploads/2019/02/Lenovo-Ideapad320-3-1.jpeg',
            price: 849,
            id: 0
        },
        {
            name: 'Microsoft Surface Pro 7',
            description: '12.3-inch Tablet PC i3-1005G1 4GB 128GB USB-C W10P Touch',
            img: 'https://media.nbb-cdn.de/images/misc/MS_SurfacePro6_Platin_PlatinumCover_Hero.jpg',
            price: 479,
            id: 1
        },
        {
            name: 'Apple MacBook Pro',
            description: 'Core i7 2.7GHz 16GB RAM 512GB SSD 15" - ME665LL/A',
            img: 'https://media.didi.ua/images/catalog/product_gallery/thumb/38VVlG181H57@2x.jpg',
            price: 599,
            id: 2
        },
        {
            name: 'Microsoft Surface Go',
            description: '10in Touchscreen Intel Pentium 4415Y 4GB 128GB SSD Win 10',
            img: 'https://static.bhphoto.com/images/images2500x2500/1545219963_1423244.jpg',
            price: 399,
            id: 3
        },
        {
            name: 'Dell Inspiron 3580',
            description: '15.6-inch Touchscreen Notebook Pentium 5405U 8GB 1TB DVDRW',
            img: 'https://mta.ua/image/data/foto/z134/134618/photos/Dell-Inspiron-3580-(I3580F58H10DDL-8BK)-Black-04.jpg',
            price: 274,
            id: 4
        },
        {
            name: 'Lenovo thinkpad T440',
            description: 'i5 4300U 14” RAM 8GB SSD 120GB GRADO B',
            img: 'https://static.korob.com.ua/5877-tm_thickbox_default/noutbuk_lenovo_thinkpad_t440_i5_4300u_8_256ssd_class_a.jpg',
            price: 360,
            id: 5
        },
        {
            name: 'Asus TUF 15.6',
            description: '512GB SSD, Intel Core i7 9th Gen., 4.5 GHz, 8GB SSD Gaming Laptop - Black',
            img: 'https://ae01.alicdn.com/kf/H2b3f32a858cf40e280dec6edf371d970T/ASUS-TUF-Gaming-FX505DD-BQ060-15-6-IPS-Ryzen-5-3550H-8-1-HDD.jpeg_640x640q70.jpeg',
            price: 849,
            id: 6
        },
        {
            name: 'HP Pavilion 15-dk0068wm',
            description: '15.6" Gaming Laptop 256GB SSD Intel Core i5 9th Gen. 2.4GHz 8GB RAM NVIDIA GTX 1050 - Black - 7MP87UA',
            img: 'https://gorsishop.com/wp-content/uploads/2020/02/HP-Pavilion-Gaming-Laptop-15-DK0068WM-9th-Gen-Ci5-NVIDIA-GeForce-GTX-1050-Shadow-Black-Acid-Green-500x500.jpg',
            price: 695,
            id: 7
        },
        {
            name: 'MSI GL63 9SDK 15.6',
            description: '512GB SSD, Intel Core i7 9th Gen., 4.50 GHz, 16GB Gaming Laptop - Black - GL639SDK611 - with FHD IPS 60Hz Display',
            img: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=http://images.icecat.biz/img/gallery/73371770_2095589445.jpg&height=550&width=550',
            price: 999,
            id: 8
        },
        {
            name: 'HP Omen Gaming Laptop',
            description: 'Core I7-7700hq Processor 12gb RAM GTX 1050ti Graphics Card',
            img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6381/6381710_sd.jpg',
            price: 874,
            id: 9
        }
    ] as Array<ItemType>
};

export type InitialStateType = typeof initialState


const itemsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => {
                    return item.id != action.id
                })
            };
        case ADD_NEW_ITEM:
            return{
                ...state,
                items: [...state.items, action.item]
            };
        case CLOSE_OPEN_TOGLE_ADD_ITEM_MENU:
            return{
                ...state,
                editMode: action.close
            };
        case MOVE_ITEM_TO_TOP:
            return {
                ...state,
                items: [{
                    name: action.name,
                    description: action.description,
                    img: action.img,
                    price: action.price,
                    id: action.id
                }, ...state.items.filter((item)=>{
                    return item.id != action.id
                })]
            };
        default:
            return state
    }
};

type ActionTypes = DeleteItemActionType | MoveToTopActionType | closeOpenTogleAddItemMenuType | addProductType


type addProductType = {
    type: typeof ADD_NEW_ITEM
    item: ItemType
}

export const addProductMenuAC = (item: ItemType): addProductType => {
    return {
        type: ADD_NEW_ITEM,
        item
    }
};

type closeOpenTogleAddItemMenuType = {
    type: typeof CLOSE_OPEN_TOGLE_ADD_ITEM_MENU
    close: boolean
}

export const closeOpenTogleAddItemMenuAC = (close: boolean): closeOpenTogleAddItemMenuType => {
    return {
        type: CLOSE_OPEN_TOGLE_ADD_ITEM_MENU,
        close
    }
};

type DeleteItemActionType = {
    type: typeof DELETE_ITEM
    id: number
}

export const deleteItemAC = (id: number): DeleteItemActionType => {
    return {
        type: DELETE_ITEM,
        id
    }
};

type MoveToTopActionType = {
    type: typeof MOVE_ITEM_TO_TOP
    name: string
    description: string
    img: string
    price: number
    id: number
}

export const moveToTopItemAC = (name: string, description: string, img: string, price: number, id: number): MoveToTopActionType => {
    return {
        type: MOVE_ITEM_TO_TOP, name, description, img, price, id
    }
};

export default itemsReducer;