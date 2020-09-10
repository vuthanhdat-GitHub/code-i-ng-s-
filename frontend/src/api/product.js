import API from './api';

export const getAllProduct = async (params) => {
    try {

        const res = await API.get('/product', {
            params
        });
        return {
            status: true,
            data: res.data,
        };
    } catch (err) {
        return {
            status: false,
            message: "khong lay duoc du lieu",
        }
    }
}

export const getProduct = async () => {
    try {
        const res = await API.get('/product/${id}'); 
        return {
            status: true,
            data: res.data,
        };
    } catch (err) {
        return {
            status: false,
            message: "khong lay duoc du lieu",
        }
    }
}


