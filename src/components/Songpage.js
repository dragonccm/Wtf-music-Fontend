import React from "react";
import "../css/Songpage.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import ListCard from './ListCard'

import Recommended from './Recommended'
const Songpage = () => {
    const Recommendeds = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
        category: "playlist",
        songartist: "jisoo",
        songname: "Flower",
        addedday: "11 thg 11, 2021",
        liked_state: false,
        songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
        total: "3:00",
        root_album: "Solo"
    }));

    const playlistsData = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
        artists_list: ["Jisso", "Jisso", "Jisso", "Jisso", "Jisso"],
    }));

    const element = [
        {
          title: 'POPULAR',
          list: playlistsData,
        },
        {
          title: 'chill day',
          list: playlistsData,
        },
      ];


    const lyrics = `Em đang buồn buồn buồn hay vui
    Môi em cười nhưng nước mắt của em tuôn rơi x2
    
    Mascara em nhòe xin đừng che dấu
    Và nếu “có thể” em cứ hãy để cho anh lau
    Mọi thứ yên lặng kể từ ngày mà họ phai dấu 
    Giọt mưa trên mi xát vào những vết thương ấy đau
    Em cứ gọi dù là ở bất cứ nơi đâu :_) 
    Anh vẫn như vậy vẫn là người sẽ ở đây thôi
    Đừng để nỗi buồn này cũng chỉ có mình em thấu 
    Call up my phone you will neva feel alone 
    Em hãy cười cười cười cười lên đi
    Anh không muốn để em với những dòng lệ trên mi
    Anh muốn em nhìn vào màn hình và nhìn anh đi 
    Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy
    
    MCK : 
    Callin to my phone nói chuyện nào
    Callin to my phone 
    Yêu em nhưng mà em chưa đồng ý muốn trao những cái hôn
    Dáng thon yehh okkk em fashion khiến cho anh khoái hơn
    Và đêm nay là mưa to không về được nước rơi trên mái tôn 
    You known what for me 
    Con tim em đây đưa anh xem xem nó thật là to 
    Give it to me i give it to you đơn giản là nhận và cho 
    Từng bước một từng bước một từng bước một anh đã trao em we gonna fall in love 
    Cho anh say mắt môi em hãy cười cười cười lên đi 
    Đừng để nỗi buồn nó mặt kẹt lại ở tren mi
    Nhiều lúc anh ngại rồi rồi em bảo là phải nhìn em đi 
    Nhìn em ôm manh chưa bao h mà em nghĩ suy 
    Callin to my phone
    Callin to my phone
    Callin to my phone
    Callin to my phone
    
    OBITO :
    hurt hurt baby, rất rất đau
    hurt hurt baby, rất rất đau
    hurt hurt baby, rất rất đau
    hurt hurt baby, rất rất đau
    
    Baby 2am in the morning
    Tự hỏi dòng suy nghĩ của em ra sao, u got me falling
    Girl aint no trap just good vibe when you’re calling
    Chỉ cần dòng tin nhắn đến đón em, imma ballin
    
    Đừng để trái tim ta phai tàn, để nụ hồng lại héo đi
    Nước mắt rơi trong đêm lạnh, nụ cười nàng lại méo đi
    Cứ trao nhau môi ngọt, bao chuyện buồn nó xéo đi
    Hãy cứ khóc đi anh đây rồi, tay người đâu anh kéo đi
    
    Điệu nhạc lướt đi trên cung đàn, ngàn ánh sao, muôn màu, anh với em 
    Màu đôi mắt em soi tâm hồn, em thấy không, em không cần, buồn mỗi đêm
    
    Em hãy cười, cười, cười, cười lên đi
    Mặt xinh kia đừng, đừng để những giọt lệ trên mi
    Anh muốn em nhìn vào màn hình và nhìn anh đi
    Nhìn anh hôn em chưa bao giờ mà anh nghĩ suy
    
    Ronboogz: 
    Anh gục ngã từ ngay cầu môn nên hay phải ra sân bằng cáng
    Khi em cười xinh tựa như bình minh làm anh phải ra cân bằng sáng
    Bao buồn vui mà em vội cất ở đâu vào khi ta chạm trán
    Chờ đến một hôm mà em vụn vỡ thì nó lại đi ra làm loạn
    
    Anh lặng im và chỉ sợ em khóc ngay
    Niềm vui là những báu vật em chôn thật sâu ở bên gốc cây
    Em nói rằng anh đừng đi, không phải ngại ngùng chi lỡ em trót say
    Thì tối nay bàn tay mình đan vào nhau ở trên tóc mây
    
    Gây hoang mang bằng vài câu lan man để nhẹ nhàng chạm đôi bên
    Nhìn làn mây lang thang từ từ bay sang ngang mềm như vị ngọt môi em 
    Anh chẳng biết em buồn hay vui 
    Nhưng rồi một ngày mới nó vẫn đang chờ đây thôi
    Để ta lặng lẽ chìm vào trong bóng đêm
    Bài hát thường nghe tựa như con sóng êm
    Những thứ mà em vẫn nên nên nên mau chóng quên
    Dồn hết vào trong màn đêm đêm đêm ta phóng lên`
    const lyricLines = lyrics.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return (
        <section>
            <div className="list_head">

                <div className="left_head">
                    <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" />
                </div>

                <div className="mid_head">
                    <p>PlayList</p>
                    <h1 className="list_name">MyList</h1>
                    <p className="info">
                        <div className="small_avt">
                            <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" />
                        </div>
                        <div className="user_name">long</div>
                        .
                        <div className="total_song">41 bài hát,</div>
                        <div className="total_time">2 giờ 15 phút</div>
                    </p>
                </div>

            </div>


            <div className="song_body">
                <div className="song_control">
                    <button className="play_random">
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>
                    <button className="like_btn">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>

                    <Popup trigger={<button className="menu_btn">  <FontAwesomeIcon icon={faEllipsis} /></button>} position="left top"
                        nested
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{ padding: '0', border: 'none' }}
                        arrow={false}>
                        <div className="menu">
                            <button className="menu-item"> item 1</button>
                            <button className="menu-item"> item 2</button>
                            <button className="menu-item"> item 3</button>
                        </div>
                    </Popup>


                </div>
                <h1 className="Lyrics">Lyrics</h1>
                <section className="lyrics_line">
                    {lyricLines}
                </section>

                <Recommended datas={Recommendeds} type={"Recommended"} describe={'Based on this song'} />
                <Recommended datas={Recommendeds} type={"Popular"} describe={'Rap Việt'} />

                <ListCard data={element} />
            </div>
        </section>
    )
}

export default Songpage;