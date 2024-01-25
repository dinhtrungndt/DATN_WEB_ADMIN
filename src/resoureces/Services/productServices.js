import AxiosInstance from "../helper/Axiosintances";

export const productsData = async () => {
    const res = await AxiosInstance().get('/api/postnews')
    // console.log("check products data : ", res.data);
    return res.data;
}

export const addProduct = async () => {
    const res = await AxiosInstance().post('/api/postnews/add')
    console.log("check add data : ", res.data);
    return res.data;
}
