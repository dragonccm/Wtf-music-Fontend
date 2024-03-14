import '../../css/col_3_layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
const Col3Layout = ({ data }) => {

  // Chia data thành các mảng con có 3 phần tử
  const chunkedData = [];
  const chunkSize = 3;

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    chunkedData.push(chunk);
  }

  return (
    <div className="col_3_layout_Container">
      {chunkedData.map((chunk, index) => (
        <div key={index} className="col_3_layout">
          <div className="col_3_layout_colum">
            {chunk.map((element, elementIndex) => (
              <div key={elementIndex} className="col_3_layout_colum_item">
                <div className="playlist_item_img">
                  <img src={element.img} alt="Playlist" />
                  <div className="img_overlay">
                    <div className="img_overlay_group_btn">
                      <NavLink to="/songpage"  className="nav-link list_nav_item">
                        <FontAwesomeIcon icon={faPlay} />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="playlist_item_content">
                  <div className="content_name">
                    <p>{element.name}</p>
                  </div>
                  <div className="content_cate">{element.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Col3Layout;