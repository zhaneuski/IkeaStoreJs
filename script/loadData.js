
    import {getData} from './getData.js';

    const wishList = ['idd005', 'idd100', 'idd007', 'idd033'];

    const cartList = [
        {
            id: 'id015',
            count: 3
        },
        {
            id: 'id045',
            count: 1
        },
        {
            id: 'id095',
            count: 2
        }
    ];



export const loadData = () => {

    if (location.search) {

        const search = decodeURI(location.search);
        console.log(search);

        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            console.log(value);
        }else if (prop === 'wishlist') {
            getData.wishList(wishList, () => console.log(data));
        } else {
            console.log(prop, value);
        }

    }

    if (location.hash) {
        console.log(location.hashslice(1));
    }

    if (location.pathname.includes('cart')) {
        console.log(cartList);
    }
};