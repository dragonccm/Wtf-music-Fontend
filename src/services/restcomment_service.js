import { restComment } from '../controller/restcomment.controller';
const reportComment = async (inputdata ,userId) => {
    try {
        const data = await restComment({ data: inputdata,userId: userId, status: "report" });
        return data
    } catch (error) {
        console.error("Error loading Comment data:", error);
        return null;
    }
};

const createComment = async (inputdata ,userId) => {

    try {
        const data = await restComment({ data: inputdata, userId: userId, status: "create" })
        return data
    } catch (error) {
        console.error("Error loading Comment data:", error);
        return null;
    }
};
const getComment = async (inputdata,userId) => {
    try {
        const data = await restComment({ data: inputdata,userId: userId , status: "read" })
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