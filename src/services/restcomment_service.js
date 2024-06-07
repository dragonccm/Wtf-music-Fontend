import { restComment } from '../controller/restcomment.controller';
const reportComment = async (inputdata) => {
    try {
        const data = await restComment({ data: inputdata, status: "report" });
        return data
    } catch (error) {
        console.error("Error loading Comment data:", error);
        return null;
    }
};

const createComment = async (inputdata) => {

    try {
        const data = await restComment({ data: inputdata, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading Comment data:", error);
        return null;
    }
};
const getComment = async (inputdata) => {
    try {
        const data = await restComment({ data: inputdata, status: "read" })
        return data
    } catch (error) {
        console.error("Error loading Comment data:", error);
        return null;
    }
};

export {
    reportComment,
    createComment,
    getComment
}