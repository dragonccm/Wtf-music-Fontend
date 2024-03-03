
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
// import "react-jinke-music-player/lib/styles/index.less";
import "../../css/Bottombar.scss";
import { createRoot } from "react-dom/client";
import "../../css/player.less";

const lyric = [
  "[ti:高尚]",
  "[ar:薛之谦]",
  "[al:高尚]",
  "[by:]",
  "[offset:0]",
  "[00:01.35]高尚 - 薛之谦",
  "[00:03.11]词：薛之谦",
  "[00:04.34]曲：周以力",
  "[00:07.55]",
  "[00:09.18]在阴郁的地方 积攒能量",
  "[00:15.77]",
  "[00:18.71]人交出了什么 能变个样",
  "[00:25.37]",
  "[00:28.67]奇形怪状 的人在生长",
  "[00:35.37]",
  "[00:38.63]我躲在人群中 头在晃",
  "[00:44.78]",
  "[00:48.73]刺破我的心脏 样本不算肮脏",
  "[00:54.45]别恐慌",
  "[00:57.09]",
  "[00:58.63]你看我虚荣模样 你该怎么补偿",
  "[01:04.53]",
  "[01:07.40]我多高尚 向自尊开了枪",
  "[01:16.00]",
  "[01:17.26]你同情的眼光 我特别的欣赏",
  "[01:22.49]",
  "[01:23.15]哀而不伤",
  "[01:26.42]",
  "[01:27.17]我多慌张 怕人闯入我围墙",
  "[01:35.62]",
  "[01:36.88]窥探五官不详 见我原本模样",
  "[01:42.01]",
  "[01:42.53]还能 模仿 任何形状",
  "[01:49.15]",
  "[02:00.55]越恶劣的情况 越要想象",
  "[02:07.31]",
  "[02:10.24]狼藏起反犬旁 像从了良",
  "[02:17.47]",
  "[02:20.72]张牙舞爪 的人在散谎",
  "[02:27.20]",
  "[02:29.92]愿形容我的词 别太荒唐",
  "[02:36.26]",
  "[02:40.88]贪念表现恰当 就像索要嫁妆",
  "[02:45.90]在情理上",
  "[02:48.80]",
  "[02:49.79]请当我孤芳自赏 还规矩条条框框",
  "[02:57.32]",
  "[02:59.28]我多高尚 向自尊开了枪",
  "[03:07.35]",
  "[03:08.86]你异样的眼光 我特别的欣赏",
  "[03:14.08]",
  "[03:14.71]让人难忘",
  "[03:18.63]我多风光 你别闯入我围墙",
  "[03:27.12]",
  "[03:28.33]你要什么真相 不就图个皮囊",
  "[03:33.42]",
  "[03:34.07]不如 让我 留在橱窗",
  "[03:40.09]",
  "[03:52.49]我多难忘 像秀色可餐的模样",
  "[04:00.91]",
  "[04:01.97]感谢你又打赏 你用词越恰当",
  "[04:07.87]我越膨胀",
  "[04:11.44]",
  "[04:11.99]我的疯狂 连我自己都看不上",
  "[04:20.44]",
  "[04:21.35]阴里怪气的愿望 那屈辱的轻伤",
  "[04:27.15]谁能给我 发个奖章",
  "[04:34.85]",
  "[04:43.45]我多向往 有个美丽的地方",
  "[04:52.21]",
  "[04:53.41]我最初的模样 没痛也不会痒",
  "[04:59.88]",
  "[05:00.96]能把赏赐 都烧光",
  "[05:10.86]制作人：周以力",
  "[05:11.93]编曲：周以力",
  "[05:12.73]大提琴：郎莹",
  "[05:13.53]鼓：尹森",
  "[05:14.43]贝斯：陈然然",
  "[05:14.63]吉他：张凇",
  "[05:14.80]Vocal录音室：江苏广电总台录音室",
  "[05:15.26]乐器录音室：北京录顶技录音室",
  "[05:15.72]乐器录音师：王晓海/鲍锐（鼓）",
  "[05:16.22]混音工程师：鲍锐@录顶技Studio",
  "[05:16.65]母带工程师：Friedemann Tishmeyer@Hambug Studio",
].join("\n");

const audioList1 = [
  {
    name: "高尚",
    singer: "薛之谦",
    cover: "//cdn.lijinke.cn/nande.jpg",
    musicSrc: "//cdn.lijinke.cn/gaoshang.mp3",
    lyric: lyric,
  },
  {
    name: "Despacito",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc: () => {
      return Promise.resolve(
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
      );
    },
  },
];

const options = {
  //audio lists model
    audioLists: audioList1,
    modifyVars: {
                 'primary-color': '#000'
    },
    javascriptEnabled: true,

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "dark",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120,
  },

  // play mode text config of the audio player
  playModeText: {
    order: "顺序播放",
    orderLoop: "列表循环",
    singleLoop: "单曲循环",
    shufflePlay: "随机播放",
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: "打开",

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: "关闭",

  //audio theme switch checkedText  [ type `String | ReactNode` default '-']
  checkedText: "开",

  //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
  unCheckedText: "关",

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: "暂无音乐",

  panelTitle: "播放列表",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "mini",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
  // controllerTitle: <FaHeadphones />,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: true,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log("audio download", audioInfo);
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log("audio playing", audioInfo);
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log("audio pause", audioInfo);
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log("audio seeked", audioInfo);
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log("audio volume change", currentVolume);
  },

  //The single song is ended handle
  onAudioEnded(audioInfo) {
    // swal('Audio is ended!', '', 'success')
    console.log("audio ended", audioInfo);
  },

  //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
  onAudioAbort(e) {
    console.log("audio abort", e);
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log("audio reload:", audioInfo);
  },

  //audio load failed error handle
  onAudioLoadError(e) {
    console.error("audio load err", e);
  },

  //theme change handle
  onThemeChange(theme) {
    console.log("theme change:", theme);
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  onPlayModeChange(playMode) {
    console.log("play mode change:", playMode);
  },

  onModeChange(mode) {
    console.log("mode change:", mode);
  },

  onAudioListsPanelChange(panelVisible) {
    console.log("audio lists panel visible:", panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log("audio lists drag end:", fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log("audio lyric change:", lineNum, currentLyric);
  },

  // custom music player root node
  getContainer() {
    return document.body;
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log("audio instance", audio);
  },

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3'
  //   })
  // }
};

const Bottombar = () => {
  // const [play, setPlay] = useState(false);
  // const [audioInstance, setAudioInstance] = useState();

  // const getAudioInstance = (instance) => {
  //   console.log("Getting audio instance", instance);
  //   setAudioInstance(instance);
  // };

  // const onPlayHandler = () => setPlay(true);
  // const onPauseHandler = () => setPlay(false);


//   useEffect(() => {
//     console.log("Updated audio instance", audioInstance);
//   }, [audioInstance]);

  return (
    <div className="main_bottom_bar">
      <link
        rel="stylesheet/less"
        type="text/css"
        href="path/to/your-less-file.less"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js"></script>

      <div className="bottom_bar">
        {/* <div className="left">
          <div className="info_img">
            <img
              src="https://lh3.googleusercontent.com/03WLPin15fkpkLMayBhp4E1YyOJRtcwOL8r2albpcYfmva2vqNbr4RM8q8zk5pGhu9PHdWHk60d2haTOPdgghaUxpDFO4ROPSg=w1600-rj"
              alt="f"
              className="song_avt"
            />
          </div>
          <div className="info">
            <h3>Flower</h3>
            <p>JISOO</p>
          </div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="center">
          <div id="music-player"></div>
        </div>
        <div className="right">
          <p>một cái gì đó tao sẽ làm </p>
        </div> */}
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <ReactJkMusicPlayer {...options} />
);

export default Bottombar;
