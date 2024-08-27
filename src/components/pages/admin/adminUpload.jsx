import "../../../css/admin/adminUpload.scss";

const AdminUpload = () => {
    return (
        <div className="edit">
            <h2 className="edit_title">
                Upload Nhạc
            </h2>
            <div className="player"></div>
            <div className="edit_body">
                <div className="edit_body_lyrics">

                </div>
                <div className="edit_body_info">
                    <div className="edit_body_info_head">
                        <div className="edit_body_info_img">
                            <img src="https://static.thempho.com/candy/image/lAfQM5VoWtLqkUdqMwJ4BxBNS5J_kzF8dy7uRh_2024041609.webp?w=300&h=450" alt="song" />
                        </div>
                        <div className="edit_body_info_text">
                            <div className="edit_body_info_text_title">
                                <h3>long đại đế</h3>
                            </div>
                            <div className="edit_body_info_text_singer">
                                <p>pop</p>
                            </div>
                            <div className="edit_body_info_text_singer">
                                <p>long đại đế</p>
                            </div>
                        </div>
                    </div>
                    <div className="edit_body_info_body">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUpload;