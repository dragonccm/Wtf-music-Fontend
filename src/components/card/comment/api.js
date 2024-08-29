import {
  getComment,
  editComment,
  createComments
} from "../../../controller/restcomment.controller";
export const getComments = async (id) => {
  const data = await getComment(id);
  console.log(data);
  if (data.EC == "0") {
    return data.DT;
  } else {
    return false;
  }
};

export const createComment = async (text, parentId = null,id) => {
  const data = {text,parentId,id};
  const data1 = await createComments(data);
  console.log(data1);
  if (data1.EC == "0") {
    return {
      _id: data1.DT._id,
      content: data1.DT.content,
      parentId:data1.DT.parentId,
      userId: data1.DT.userId,
      username: data1.DT.userName,
      createdAt: data1.DT.createdAt,
      userAvt: data1.DT.userAvt,
    };  
  } else {
    return false;
  }
 
};

export const updateComment = async (data) => {
  const data1 = await editComment(data);
  console.log(data1);
  if (data1.EC == "0") {
    return {
      _id: data1.DT._id,
      content: data1.DT.content,
      parentId:data1.DT.parentId,
      userId: data1.DT.userId,
      username: data1.DT.userName,
      createdAt: data1.DT.createdAt,
      userAvt: data1.DT.userAvt,
    };  
  } else {
    return false;
  }
};

export const deleteComment = async () => {
  return {};
};
