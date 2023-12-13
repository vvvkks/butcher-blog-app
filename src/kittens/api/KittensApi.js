import axiosInstance from "./Api";

export const getKittyPhoto = async (page = 1, limit = 5) => {
    try {
        const response = await axiosInstance.get('search', {
            params: {
                page,
                limit,
            },
        });

        const images = response.data.map((cat) => ({
            id: cat.id,
            url: cat.url,
            width: cat.width,
            height: cat.height,
            name: cat.breeds.length > 0 ? cat.breeds[0].name : "Unknown",
            origin: cat.breeds.length > 0 ? cat.breeds[0].origin : "Unknown",
        }));

        console.log(images);
        return images;
    } catch (error) {
        throw error;
    }
};