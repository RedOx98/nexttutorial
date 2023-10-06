type Products = {
    price: number,
    id: number,
    title: string,
    desc?: string,
    img?: string,
    options?: {title: string,
        additionalPrice: number,}[]
}[];

// type option = {
//     title: string,
//     additionalPrice: number,
// };

type Menu = {
    id: number,
    slug: string,
    title?: string,
    desc?: string,
    img?: string,
    color: string,
    col?: string,
}[];



export const menu: Menu = [
    {
        id: 1,
        slug: 'Pastas',
        title: 'Italian Pastas',
        desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
        img: "/temporary/pots.jpg",
        color: "white",
        col: "white",
    },
    {
        id: 2,
        slug: 'Burgers',
        title: 'Juicy Burgers',
        desc: "Burgers Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
        img: "/temporary/berg.jpg",
        color: "black",
        col: "black",
    },
    {
        id: 1,
        slug: 'Pizzas',
        title: 'Cheesy Pizzas',
        desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
        img: "/temporary/patsy.jpg",
        color: "white",
        col: "white",
    },
]

export const featuredProducts: Products = [
    {
        id: 1,
        title: 'Siccilian',
        desc: 'Ignite your taste buds with this fiery combination of spicy pepperoni, combining penne in a refreshing way with prawns',
        img: '/temporary/p1.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 2,
        title: 'Bacon Deluxe',
        desc: 'Indulge in smoky goodness with a flame-grilled beef patty.  topped with crispy mints',
        img: '/temporary/p2.jpg',
        price: 29.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 3,
        title: 'Bella Napoli',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, garnished with joy and happiness.',
        img: '/temporary/p3.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 4,
        title: 'Spicy Arrabiata',
        desc: 'Ignite your taste buds with this fiery pasta creation, combining penne in a refreshing way with prawns',
        img: '/temporary/p4.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 5,
        title: 'Jalapeno Fiesta',
        desc: 'Ignite your taste buds with this fiery kick! , This burger features a succulent bethrothing pleasurable taste',
        img: '/temporary/p5.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 6,
        title: 'Margherita Magic',
        desc: 'A timeless flavor with a twist, showcasing a thin crust topped with sweet potatoes; combining penne in a refreshing way with prawns',
        img: '/temporary/p15.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 7,
        title: 'Garlic Parmesan Linguine',
        desc: 'A garlic lovers delight, featuring linguine smothered in a creamy Parmesan, combining penne in a refreshing way with prawns',
        img: '/temporary/p14.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 8,
        title: 'Mediteranean Delight',
        desc: 'Ignite your taste buds with this fiery pasta creation, combining penne in a refreshing way with prawns',
        img: '/temporary/p13.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 9,
        title: 'Spicy Arrabiata',
        desc: 'Ignite your taste buds with this fiery pasta creation, combining penne in a refreshing way with prawns',
        img: '/temporary/p12.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
]

export const pizzas: Products = [
    {
        id: 1,
        title: 'Siccilian',
        desc: 'Ignite your taste buds with this fiery combination of spicy pepperoni, combining penne in a refreshing way with prawns',
        img: '/temporary/p1.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 2,
        title: 'Burgers',
        desc: 'Indulge in smoky goodness with a flame-grilled beef patty.  topped with crispy mints',
        img: '/temporary/p2.jpg',
        price: 29.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 3,
        title: 'Mediterranean Delight',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, garnished with joy and happiness.',
        img: '/temporary/p3.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 4,
        title: 'Pesto Primavera',
        desc: 'A classic Italian delight featuring a thin, cripsy crust, tangy tomato sauce, fersh mozarella, and a madley barley.',
        img: '/temporary/p10.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 5,
        title: 'Veggie Supreme',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozarella, and a medley barley',
        img: '/temporary/p11.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 6,
        title: 'Four Cheese Fantasy',
        desc: 'Experience pure cheesey bliss with a melty blend of mozazarella, cheddasr, provolone, and Parmesan cheeses, created with pimare curry.',
        img: '/temporary/p12.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
]

export const singleProduct: Products = [
    {
        id: 1,
        title: 'Siccilian',
        desc: 'Ignite your taste buds with this fiery combination of spicy pepperoni, combining penne in a refreshing way with prawns',
        img: '/temporary/p1.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 2,
        title: 'Burgers',
        desc: 'Indulge in smoky goodness with a flame-grilled beef patty.  topped with crispy mints',
        img: '/temporary/p2.jpg',
        price: 29.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 3,
        title: 'Mediterranean Delight',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, garnished with joy and happiness.',
        img: '/temporary/p3.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 4,
        title: 'Pesto Primavera',
        desc: 'A classic Italian delight featuring a thin, cripsy crust, tangy tomato sauce, fersh mozarella, and a madley barley.',
        img: '/temporary/p10.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 5,
        title: 'Veggie Supreme',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozarella, and a medley barley',
        img: '/temporary/p11.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
    {
        id: 6,
        title: 'Four Cheese Fantasy',
        desc: 'Experience pure cheesey bliss with a melty blend of mozazarella, cheddasr, provolone, and Parmesan cheeses, created with pimare curry.',
        img: '/temporary/p12.jpg',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 8,
            },
        ]
    },
]

