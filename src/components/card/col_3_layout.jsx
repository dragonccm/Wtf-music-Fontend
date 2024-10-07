import '../../css/col_3_layout.scss';

import SongCard from './song_card'




const Col3Layout = ({ data, rowSize, col, isDuration }) => {
  const colData = col ? rowSize*col : 12
  const slicedData = data.slice(0, colData);
  // Chia data thành các mảng con có 3 phần tử
  const chunkedData = [];
  const chunkSize = rowSize||4;

  for (let i = 0; i < slicedData.length; i += chunkSize) {
    const chunk = slicedData.slice(i, i + chunkSize);
    chunkedData.push(chunk);
  }



  return (
    data && Array.isArray(data) &&
    <div className="col_3_layout_Container">
      {chunkedData.map((chunk, index) => (
        <div key={'haha'+index} className="col_3_layout">
          <div className="col_3_layout_colum">
            {chunk.map((element, elementIndex) => {
              element = {
                ...element,
                artists: element.artists|| [{alias:'haha',name:'haha'}] ,
                thumbnailM: element.thumbnailM || element.img,
                encodeId: element.encodeId || element.id,
                title: element.title || element.name,
              }
              return (
                <div key={elementIndex} className="col_3_layout_colum_item">
                  <SongCard element={ element} isDuration={isDuration} />
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>

  );
};

export default Col3Layout;