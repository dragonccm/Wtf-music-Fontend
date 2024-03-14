import  '../../css/mascot.scss'

const Mascot_animation = () => {
  return (
    <div classname="jiggly puffed">
      <div classname="jiggly-body-upper">
        <div classname="jiggly-body"></div>
        <div classname="jiggly-ear jiggly-ear-left"></div>
        <div classname="jiggly-ear jiggly-ear-right"></div>
        <div classname="jiggly-puff"></div>
        <div classname="jiggly-face">
          <div classname="jiggly-eye jiggly-eye-left">
            <div classname="jiggly-eye-pupil"></div>
            <div classname="jiggly-eye-lid"></div>
          </div>
          <div classname="jiggly-eye jiggly-eye-right">
            <div classname="jiggly-eye-pupil"></div>
            <div classname="jiggly-eye-lid"></div>
          </div>
          <div classname="jiggly-blush jiggly-blush-left"></div>
          <div classname="jiggly-blush jiggly-blush-right"></div>
          <div classname="jiggly-mouth">
            <div classname="jiggly-mouth-singing"></div>
          </div>
        </div>
        <div classname="jiggly-arm jiggly-arm-left">
          <div classname="jiggly-marker"></div>
        </div>
        <div classname="jiggly-arm-right-wrapper">
          <div classname="jiggly-arm jiggly-arm-right"></div>
        </div>
      </div>
      <div classname="jiggly-leg jiggly-leg-left"></div>
      <div classname="jiggly-leg jiggly-leg-right"></div>
      <div classname="jiggly-music-notes">
        <div classname="jiggly-music-note jiggly-music-note-one"></div>
        <div classname="jiggly-music-note jiggly-music-note-two"></div>
        <div classname="jiggly-music-note jiggly-music-note-three"></div>
      </div>
    </div>
  );
};

export default Mascot_animation
