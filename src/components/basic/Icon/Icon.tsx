import { defineComponent } from 'vue';

const typeMap = {
  close: 'icon-guanbi1',
  full: 'icon-fangda',
  minus: 'icon-jianhao',
  reload: 'icon-refresh',
  message: 'icon-xiaoxi',
  setting: 'icon-setting',
  zoomOut: 'icon-suoxiao1',
  play: 'icon-bofang',
  volume: 'icon-volume',
  disabledVolume: 'icon-volume_close',
  next: 'icon-M_bofangkuaijin',
  randomPlay: 'icon-suijibofang',
  onceLoop: 'icon-danquxunhuan',
  listLoop: 'icon-24gl-repeat2',
  songWord: 'icon-geciweidianji',
  list: 'icon-list',
  'arrow-right': 'icon-arrow-right',
  download: 'icon-download',
  share: 'icon-share',
  collect: 'icon-folder-add',
  like: 'icon-xihuan',
  like2: 'icon-24px',
  pause: 'icon-pause1',
  empty: 'icon-empty',
  delete: 'icon-delete',
  logout: 'icon-logout',
  comment: 'icon-comment',
  home: 'icon-home_fill_light',
  'theme-hight': 'icon-ai250',
  'theme-dark': 'icon-dark1',
  video: 'icon-shipin',
  radio: 'icon-a-tupianyihuifu-10',
  browser: 'icon-liulanqi',
  crown: 'icon-huangguan',
  chart: 'icon-tubiao-bingtu',
};
export type IconType = keyof typeof typeMap;

const Icon = defineComponent({
  props: {
    type: {
      type: String,
      def: 'close',
    },
    size: {
      type: Number,
      def: undefined,
    },
    className: {
      type: String,
      def: '',
    },
    style: {
      type: Object,
      def: {},
    },
  },
  render() {
    const { type, size, className, style } = this;

    const _className = `base-icon iconfont ${typeMap[type as string] || typeMap['chart']}`;

    return (
      <i
        class={`${_className} ${className}`}
        style={{
          fontSize: size,
          ...style,
        }}
      />
    );
  },
});
export default Icon;
