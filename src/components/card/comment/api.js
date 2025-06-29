import {
  getComment,
  editComment,
  createComments,deleteComments,reportComments
} from "../../../controller/restcomment.controller";
export const getComments = async (id,page) => {
  const data = await getComment(id,page);
  console.log(data);
  if (data.EC === "0") {
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

export const deleteComment = async (id) => {
  const data1 = await deleteComments(id);
  console.log(data1);
  if (data1.EC == "0") {
    return data1.DT; 
  } else {
    return false;
  }
};
export const reportComment = async (id) => {
  const data1 = await reportComments(id);
  console.log(data1);
  if (data1.EC == "0") {
    return data1; 
  } else {
    return false;
  }
};
