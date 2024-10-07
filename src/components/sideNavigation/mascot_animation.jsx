import '../../css/mascot.scss'
import Modal from "react-modal";
Modal.setAppElement("#root");
const Loading = () => {
  return (
    <Modal
      isOpen={true}
      // style={customStyles}
      className="loading_main"
      overlayClassName="loading_conatiner"
      shouldCloseOnOverlayClick={true}

    >
      
          <div className="jiggly puffed">
            <div className="jiggly-body-upper">
              <div className="jiggly-body"></div>
              <div className="jiggly-ear jiggly-ear-left"></div>
              <div className="jiggly-ear jiggly-ear-right"></div>
              <div className="jiggly-puff"></div>
              <div className="jiggly-face">
                <div className="jiggly-eye jiggly-eye-left">
                  <div className="jiggly-eye-pupil"></div>
                  <div className="jiggly-eye-lid"></div>
                </div>
                <div className="jiggly-eye jiggly-eye-right">
                  <div className="jiggly-eye-pupil"></div>
                  <div className="jiggly-eye-lid"></div>
                </div>
                <div className="jiggly-blush jiggly-blush-left"></div>
                <div className="jiggly-blush jiggly-blush-right"></div>
                <div className="jiggly-mouth">
                  <div className="jiggly-mouth-singing"></div>
                </div>
              </div>
              <div className="jiggly-arm jiggly-arm-left">
                <div className="jiggly-marker"></div>
              </div>
              <div className="jiggly-arm-right-wrapper">
                <div className="jiggly-arm jiggly-arm-right"></div>
              </div>
            </div>
            <div className="jiggly-leg jiggly-leg-left"></div>
            <div className="jiggly-leg jiggly-leg-right"></div>
            <div className="jiggly-music-notes">
              <div className="jiggly-music-note jiggly-music-note-one"></div>
              <div className="jiggly-music-note jiggly-music-note-two"></div>
              <div className="jiggly-music-note jiggly-music-note-three"></div>
            </div>
          </div>

    </Modal>
  );
};

export default Loading
