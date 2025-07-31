export const productIntroduce = [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/c4cbdbb0-fcca-49e9-8771-861a77ede237.svg',
    title: '高性能',
    description: '无需配置，即可拥有最佳的包体积大小和极致的性能',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/6c6c89c8-d6dd-407b-8d80-1e1785113716.svg',
    title: '可定制',
    description: '可以高效地对组件外观进行调整或创造自己的主题',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/a1034495-3689-4b69-a4f1-cc432eeeee34.svg',
    title: '原子化',
    description: '每个组件的功能不多也不少，恰好就是你所需',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/423cc9c3-c3ab-416c-a5db-eee37d9a9fa0.svg',
    title: '流畅感',
    description: '拥有流畅的手势和细腻的动画，助力产品打造出极致体验',
  },
]

export const productIntroduceEn = [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/c4cbdbb0-fcca-49e9-8771-861a77ede237.svg',
    title: 'High Performance',
    description: 'Have best bundle size and performance without additional config',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/6c6c89c8-d6dd-407b-8d80-1e1785113716.svg',
    title: 'Customizable',
    description: 'Adjust style or customize theme effective',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/a1034495-3689-4b69-a4f1-cc432eeeee34.svg',
    title: 'Meta',
    description: 'Component is just what you need',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/423cc9c3-c3ab-416c-a5db-eee37d9a9fa0.svg',
    title: 'Fluency',
    description: 'Helps the product to create the ultimate experience with smooth animation',
  },
]

export const getProductResource = (isWideScreen: boolean, en: boolean) => [
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/8ee0cfed-e5f1-4c2d-9648-9931aa98851e.svg',
    title: en ? 'Preview' : '在线体验',
    description: en
      ? 'Preview online without installation'
      : '你可以直接在线体验，无需安装和配置环境',
    backgroundImage: isWideScreen
      ? 'https://gw.alipayobjects.com/zos/bmw-prod/239bb8cf-3fcd-4cfe-bb5a-ba2d910342bc.svg'
      : 'https://gw.alipayobjects.com/zos/bmw-prod/613c0844-d32d-4b89-83f2-36bc6840628a.svg',
    buttonText: en ? 'Get Start' : '开始体验',
    buttonLink: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/src/App.tsx',
    target: '_blank',
  },
  {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/06ae4a67-b93a-413b-9c58-75dbbe79f5b7.svg',
    title: en ? 'Components' : '组件列表',
    description: en
      ? 'Base on Ant business experience'
      : '基于蚂蚁集团的众多业务实践，抽象构建出移动端资产库',
    backgroundImage: isWideScreen
      ? 'https://gw.alipayobjects.com/zos/bmw-prod/adc38047-867d-4924-be79-dddc481e4650.svg'
      : 'https://gw.alipayobjects.com/zos/bmw-prod/3479a5ca-2abf-4eb3-bb64-01eadcfcfa64.svg',
    buttonText: en ? 'View All' : '查看全部',
    buttonLink: '/components',
  },
]

export const productDesignValues = [
  {
    title: '设计价值观',
    description:
      '这是 Ant Design 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们在「确定性」和「自然」的基础上，新增「意义感」和「生长性」两个价值观，指引每个设计者做更好地判断和决策。',
    icons: [
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/aba20fd6-069b-41c3-a3b3-d56c73a1d9bd.json',
        text: '确定性',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/624e8763-db76-4820-8013-434455492dd4.json',
        text: '自然',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/bae75092-3dc2-43ae-8b31-b8e6d7237da0.json',
        text: '意义感',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/c1dd4701-3b83-485a-b57a-bb23b5a0f1bd.json',
        text: '生长性',
      },
    ],
  },
]

export const productDesignValuesEn = [
  {
    title: 'Design Values',
    description:
      "This is Ant Design's internal standard for evaluating design quality. Based on the assumption that \"everyone pursues happy work\", we have added two values of \"Meaningfulness\" and \"Growth\" on the basis of \"Certainty\" and \"Naturalness\" to guide designers to make better judgment and decision-making.",
    icons: [
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/aba20fd6-069b-41c3-a3b3-d56c73a1d9bd.json',
        text: 'Certainty',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/624e8763-db76-4820-8013-434455492dd4.json',
        text: 'Naturalness',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/bae75092-3dc2-43ae-8b31-b8e6d7237da0.json',
        text: 'Meaningfulness',
      },
      {
        lottie: 'https://gw.alipayobjects.com/os/bmw-prod/c1dd4701-3b83-485a-b57a-bb23b5a0f1bd.json',
        text: 'Growth',
      },
    ],
  },
]

export const getProductDesignValuesBackgroundImage = (isWideScreen: boolean) =>
  isWideScreen
    ? 'https://gw.alipayobjects.com/zos/bmw-prod/af5f0ca9-e0f8-4f0b-aba6-3d3daa5ed5d3.svg'
    : 'https://gw.alipayobjects.com/zos/bmw-prod/f17ac910-049a-4506-9498-723dec7d0d7a.svg'

export const getGuides = (isWideScreen: boolean, en: boolean) => [
  {
    title: en ? 'Quick Start' : '快速上手',
    description: en
      ? 'Quickly start with installation and import'
      : '轻松两步，快速实现安装和引入组件，ant-mobile 自动为你加载 css 样式文件。',
    backgroundImage: isWideScreen
      ? 'https://gw.alipayobjects.com/zos/bmw-prod/f0556074-4581-42c4-9cf7-7b7072ed6a05.svg'
      : 'https://gw.alipayobjects.com/zos/bmw-prod/64172109-6ad4-4628-b3c9-24fd410329da.svg',
    buttonText: en ? 'View Detail' : '查看详情',
    buttonLink: '/guide/quick-start',
  },
  {
    title: en ? 'FAQ' : '常见问题',
    description: en
      ? "We've collected some FAQ which may help you"
      : '我们为你整理了一些常见的问题，遇到疑问不妨先来查阅一下。',
    backgroundImage: isWideScreen
      ? 'https://gw.alipayobjects.com/zos/bmw-prod/49710c3f-7ac2-4135-bd39-ae36cd456a4b.svg'
      : 'https://gw.alipayobjects.com/zos/bmw-prod/a56a3cf4-d84d-49f3-952c-b9cd1197f7b3.svg',
    buttonText: 'FAQ',
    buttonLink: '/guide/faq',
  },
]

export const getRecommends = (en: boolean) => [
  {
    title: 'Ant Design',
    description: en
      ? 'Enterprise-level products. Create an efficient and enjoyable work experience.'
      : '企业级产品设计体系，创造高效愉悦的工作体验',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/1c33ec37-9291-485f-81c6-a9cbd57c08f9.svg',
    link: 'https://ant.design',
  },
  {
    title: 'Ant Design Pro',
    description: en
      ? 'Out-of-the-box front-end/design solutions'
      : '开箱即用的中台前端/设计解决方案',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/1c33ec37-9291-485f-81c6-a9cbd57c08f9.svg',
    link: 'https://pro.ant.design',
  },
  {
    title: 'AntV',
    description: en
      ? 'Ant new generation of data visualization solutions'
      : '蚂蚁集团全新一代数据可视化解决方案',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/42c6e259-a343-4fb7-8fff-2058dd835f43.svg',
    link: 'https://antv.vision',
  },
]

export const users = [
  {
    name: '支付宝',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/9c62c53a-67e6-45e1-8ecf-d5edb84c97f6.svg',
    href: 'https://render.alipay.com/p/yuyan/180020010001196791/preview.html?previewToken=e81b793b9e7b4a7f8c5de18bb597e3d9',
  },
  {
    name: '网商银行',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/42db77ca-db22-4e70-9d6a-dd55096b3088.svg',
    href: 'https://fil.mybank.cn/fil/app/',
  },
  {
    name: '蚂蚁财富',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/96d63de8-3b5e-4f89-9e14-51a0c35fe50b.svg',
  },
  {
    name: '蚂蚁保险',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/e72a6b0b-aa26-49a9-9e09-cb8e6074fb7e.svg',
  },
  {
    name: '掌上英雄联盟',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/3ed6b03b-abb6-4ad8-bfc3-f7badb4c4f2c.svg',
  },
  {
    name: '语雀',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/78be83e9-3fa6-48b1-9e97-3c23b7b60dd9.svg',
    href: 'https://www.yuque.com/',
  },
]

export const navbarConfig = {
  logo: {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/b2c7ff8b-eba0-4af9-9dd5-0b5b17f42c57.svg',
    title: 'Ant Mobile Vue',
    version: 'v0.0.1',
  },
  search: {
    placeholder: '搜索',
  },
  nav: [
    { text: '指南', link: '/guide/introduction' },
    { text: '组件', link: '/components/button' },
    { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue', target: '_blank' },
    { text: 'English', link: '/guide/quick-start' },
  ],
}

export const heroConfig = {
  title: 'Ant Mobile Vue',
  description: '探索移动端 Web 的极致体验',
  actions: [
    { text: '开始使用', link: '/guide/quick-start', type: 'primary' },
    { text: '在线体验', link: '/components/button', type: 'primary' },
  ],
  phone: {
    image: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kQ_zRK8YuGoAAAAAAAAAAAAAARQnAQ',
    alt: '手机演示',
  },
}

export const heroConfigEn = {
  title: 'Ant Mobile Vue',
  description: 'Explore the ultimate mobile web experience',
  actions: [
    { text: 'Get Started', link: '/en/guide/quick-start', type: 'primary' },
    { text: 'Live Demo', link: '/en/components/button', type: 'primary' },
  ],
  phone: {
    image: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kQ_zRK8YuGoAAAAAAAAAAAAAARQnAQ',
    alt: 'Phone Demo',
  },
}
