/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'shibai' | 'video' | 'classify' | 'photo' | 'niandushixiangjianchabiao' | 'comment' | 'checklist' | 'yuyue1' | 'quotation' | 'dangqianweizhi' | 'dizhi' | 'yonghu1' | 'yonghu' | 'shouqiicon' | 'zhankaiiocn' | 'iconfontzhizuobiaozhun023138' | 'cuowu' | 'navicon-chjg' | 'arrow-up-bold' | 'arrow-down-bold' | 'xiala' | 'huifu' | 'tongguo' | 'chelianglicheng' | 'xiangmubaoyangtixing' | 'zhuanyongbiaoqian' | 'tuxiang' | 'youxiang' | 'mendianRed' | 'xiangmu' | 'shijian' | 'xiazai20' | 'weizhi' | 'lianxifangshi' | 'dianhua' | 'search' | 'guan' | 'guan1' | 'tianjia1' | 'paizhao' | 'tianjia' | 'shijian1' | 'remark' | 'feihang' | 'shuxing' | 'geren' | 'shouqi' | 'bangzhushouce' | 'picture-fill' | 'zhaopian' | 'shenhetongguo' | 'lingxing' | 'cuowutishi' | 'zhucaidanshouqi' | 'qiehuanzhanghao' | 'wode' | 'mendianhuaban' | 'siji-' | 'dilanxianxingiconyihuifu_huabanfuben' | 'yuyue' | 'gongdan' | 'xitongguanligongdanguanli' | 'banshuiyuyue' | 'wodeyuyue' | 'tucenggouxuan' | 'weixuankuang' | 'riqi1' | 'zhucaidanzhankai' | 'gengduo1' | 'fanhui' | 'suosou' | 'xiayiye' | 'xiaoxi' | 'guanbi1' | 'attribute' | 'mendian' | 'qiche' | 'driver' | 'sijirenzheng' | 'weixiuqiye' | 'shouye' | 'jujue' | 'bianji' | 'shanchu' | 'xuanze' | 'xuanze_xuanzhong' | 'jingshi' | 'xiuchefuwu' | 'jurassic_mge-money' | 'dianziqianming';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
