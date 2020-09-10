import API from './api';

export const getAllCategory = async (params) => {
    try {

        const res = await API.get('/category', {
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

export const getCategoryById = async () => {
    try {
        const res = await API.get('/category/${id}'); 
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


