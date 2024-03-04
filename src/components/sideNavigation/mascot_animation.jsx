import  '../../css/mascot.scss'

const Mascot_animation = () => {
  return (
    <div class="jiggly puffed">
      <div class="jiggly-body-upper">
        <div class="jiggly-body"></div>
        <div class="jiggly-ear jiggly-ear-left"></div>
        <div class="jiggly-ear jiggly-ear-right"></div>
        <div class="jiggly-puff"></div>
        <div class="jiggly-face">
          <div class="jiggly-eye jiggly-eye-left">
            <div class="jiggly-eye-pupil"></div>
            <div class="jiggly-eye-lid"></div>
          </div>
          <div class="jiggly-eye jiggly-eye-right">
            <div class="jiggly-eye-pupil"></div>
            <div class="jiggly-eye-lid"></div>
          </div>
          <div class="jiggly-blush jiggly-blush-left"></div>
          <div class="jiggly-blush jiggly-blush-right"></div>
          <div class="jiggly-mouth">
            <div class="jiggly-mouth-singing"></div>
          </div>
        </div>
        <div class="jiggly-arm jiggly-arm-left">
          <div class="jiggly-marker"></div>
        </div>
        <div class="jiggly-arm-right-wrapper">
          <div class="jiggly-arm jiggly-arm-right"></div>
        </div>
      </div>
      <div class="jiggly-leg jiggly-leg-left"></div>
      <div class="jiggly-leg jiggly-leg-right"></div>
      <div class="jiggly-music-notes">
        <div class="jiggly-music-note jiggly-music-note-one"></div>
        <div class="jiggly-music-note jiggly-music-note-two"></div>
        <div class="jiggly-music-note jiggly-music-note-three"></div>
      </div>
    </div>
  );
};

export default Mascot_animation
