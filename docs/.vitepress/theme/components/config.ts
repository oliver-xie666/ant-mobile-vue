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
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/db2cc1f4-7c9a-4412-9117-0fe487272208.svg',
  },
  {
    name: '口碑',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/31acafc2-d143-4849-a3ae-87417d788890.svg',
  },
  {
    name: '网商银行',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/9991fbe9-d6bf-405d-9584-55f337396e18.svg',
  },
  {
    name: '菜鸟',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/40b66fe4-effc-41c3-8c8b-a1815ba6bd40.svg',
  },
  {
    name: '淘宝网',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/95224581-ffe0-44b5-ad70-d4c44ff14d0f.svg',
  },
  {
    name: '蚂蚁财富',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/c8eac91e-b243-409e-8d30-3edcde6236c9.svg',
  },
  {
    name: '阿里云',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/2683fc4d-8914-49f7-9453-61fc71395d03.svg',
  },
  {
    name: '蚂蚁链',
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/759ac1ec-59e8-4f99-b725-8eea69cc740d.svg',
  },
]

export const navbarConfig = {
  logo: {
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
    title: 'Ant Mobile Vue',
    version: 'v0.0.1',
  },
  search: {
    placeholder: '搜索',
  },
  nav: [
    { text: '指南', link: '/guide/introduction' },
    { text: '组件', link: '/components/button' },
    { text: '资源', link: '/resources' },
    { text: '发布日志', link: 'https://github.com/oliver-xie666/ant-mobile-vue/releases', target: '_blank' },
    { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue', target: '_blank' },
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

// 页脚配置
export const footerConfig = {
  sections: [
    {
      title: '相关资源',
      links: [
        { text: 'Ant Design Charts', href: 'https://charts.ant.design', target: '_blank' },
        { text: 'Ant Design Pro', href: 'https://pro.ant.design', target: '_blank' },
        { text: 'Ant Design Pro Components', href: 'https://procomponents.ant.design', target: '_blank' },
        { text: 'Ant Design Mini', href: 'https://mini.ant.design', target: '_blank' },
        { text: 'Ant Design Landing', href: 'https://landing.ant.design', target: '_blank', desc: '首页模板集' },
        { text: 'Scaffolds', href: 'https://scaffold.ant.design', target: '_blank', desc: '脚手架市场' },
        { text: 'Umi', href: 'https://umijs.org', target: '_blank', desc: 'React 应用开发框架' },
        { text: 'Dumi', href: 'https://d.umijs.org', target: '_blank', desc: '组件/文档研发工具' },
        { text: 'qiankun', href: 'https://qiankun.umijs.org', target: '_blank', desc: '微前端框架' },
        { text: 'ahooks', href: 'https://github.com/alibaba/hooks', target: '_blank', desc: 'React Hooks 库' },
        { text: 'Ant Motion', href: 'https://motion.ant.design', target: '_blank', desc: '设计动效' },
      ]
    },
    {
      title: '社区',
      links: [
        { text: 'GitHub Discussions', href: 'https://github.com/ant-design/ant-design-mobile/discussions', target: '_blank' },
        { text: 'Gitter', href: 'https://gitter.im/ant-design/ant-design-mobile', target: '_blank' },
        { text: 'Twitter', href: 'https://twitter.com/antdesignui', target: '_blank' },
        { text: '知乎专栏', href: 'https://www.zhihu.com/column/antdesign', target: '_blank' },
        { text: '官方博客', href: 'https://zhuanlan.zhihu.com/p/148675163', target: '_blank' },
      ]
    },
    {
      title: '帮助',
      links: [
        { text: '组件总览', href: '/zh/guide/introduction' },
        { text: '快速上手', href: '/zh/guide/quick-start' },
        { text: '常见问题', href: '/zh/guide/faq' },
        { text: 'GitHub Issues', href: 'https://github.com/oliver-xie666/ant-mobile-vue/issues', target: '_blank' },
        { text: '迁移指南', href: '/zh/guide/migration' },
        { text: '更新日志', href: 'https://github.com/oliver-xie666/ant-mobile-vue/releases', target: '_blank' },
      ]
    },
    {
      title: '更多产品',
      links: [
        { text: 'Ant Design', href: 'https://ant.design', target: '_blank' },
        { text: 'Ant Design Mobile', href: 'https://mobile.ant.design', target: '_blank' },
        { text: 'AntV', href: 'https://antv.vision', target: '_blank' },
        { text: 'Kitchen', href: 'https://kitchen.alipay.com', target: '_blank' },
        { text: '语雀', href: 'https://yuque.com', target: '_blank' },
      ]
    }
  ],
  copyright: {
    text: '© 2025 Ant Mobile Vue. 基于',
    linkText: 'Ant Design Mobile',
    linkHref: 'https://mobile.ant.design',
    description: '使用 Vue 3 技术栈重构的移动端组件库'
  },
  tech: {
    prefix: 'Built with',
    links: [
      { text: 'Vue 3', href: 'https://vuejs.org', target: '_blank' },
      { text: 'Vite', href: 'https://vitejs.dev', target: '_blank' },
      { text: 'VitePress', href: 'https://vitepress.dev', target: '_blank' }
    ]
  },
  madeBy: {
    text: 'Made with ❤️ by',
    author: 'oliver-xie666',
    authorHref: 'https://github.com/oliver-xie666'
  }
}

export const footerConfigEn = {
  sections: [
    {
      title: 'Related Resources',
      links: [
        { text: 'Ant Design Charts', href: 'https://charts.ant.design', target: '_blank' },
        { text: 'Ant Design Pro', href: 'https://pro.ant.design', target: '_blank' },
        { text: 'Ant Design Pro Components', href: 'https://procomponents.ant.design', target: '_blank' },
        { text: 'Ant Design Mini', href: 'https://mini.ant.design', target: '_blank' },
        { text: 'Ant Design Landing', href: 'https://landing.ant.design', target: '_blank', desc: 'Homepage Templates' },
        { text: 'Scaffolds', href: 'https://scaffold.ant.design', target: '_blank', desc: 'Scaffold Market' },
        { text: 'Umi', href: 'https://umijs.org', target: '_blank', desc: 'React Development Framework' },
        { text: 'Dumi', href: 'https://d.umijs.org', target: '_blank', desc: 'Component/Documentation Tool' },
        { text: 'qiankun', href: 'https://qiankun.umijs.org', target: '_blank', desc: 'Micro Frontend Framework' },
        { text: 'ahooks', href: 'https://github.com/alibaba/hooks', target: '_blank', desc: 'React Hooks Library' },
        { text: 'Ant Motion', href: 'https://motion.ant.design', target: '_blank', desc: 'Design Motion' },
      ]
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub Discussions', href: 'https://github.com/ant-design/ant-design-mobile/discussions', target: '_blank' },
        { text: 'Gitter', href: 'https://gitter.im/ant-design/ant-design-mobile', target: '_blank' },
        { text: 'Twitter', href: 'https://twitter.com/antdesignui', target: '_blank' },
        { text: 'Zhihu Column', href: 'https://www.zhihu.com/column/antdesign', target: '_blank' },
        { text: 'Official Blog', href: 'https://zhuanlan.zhihu.com/p/148675163', target: '_blank' },
      ]
    },
    {
      title: 'Help',
      links: [
        { text: 'Components Overview', href: '/en/guide/introduction' },
        { text: 'Quick Start', href: '/en/guide/quick-start' },
        { text: 'FAQ', href: '/en/guide/faq' },
        { text: 'GitHub Issues', href: 'https://github.com/oliver-xie666/ant-mobile-vue/issues', target: '_blank' },
        { text: 'Migration Guide', href: '/en/guide/migration' },
        { text: 'Changelog', href: 'https://github.com/oliver-xie666/ant-mobile-vue/releases', target: '_blank' },
      ]
    },
    {
      title: 'More Products',
      links: [
        { text: 'Ant Design', href: 'https://ant.design', target: '_blank' },
        { text: 'Ant Design Mobile', href: 'https://mobile.ant.design', target: '_blank' },
        { text: 'AntV', href: 'https://antv.vision', target: '_blank' },
        { text: 'Kitchen', href: 'https://kitchen.alipay.com', target: '_blank' },
        { text: 'Yuque', href: 'https://yuque.com', target: '_blank' },
      ]
    }
  ],
  copyright: {
    text: '© 2025 Ant Mobile Vue. Based on',
    linkText: 'Ant Design Mobile',
    linkHref: 'https://mobile.ant.design',
    description: 'Mobile UI component library built with Vue 3'
  },
  tech: {
    prefix: 'Built with',
    links: [
      { text: 'Vue 3', href: 'https://vuejs.org', target: '_blank' },
      { text: 'Vite', href: 'https://vitejs.dev', target: '_blank' },
      { text: 'VitePress', href: 'https://vitepress.dev', target: '_blank' }
    ]
  },
  madeBy: {
    text: 'Made with ❤️ by',
    author: 'oliver-xie666',
    authorHref: 'https://github.com/oliver-xie666'
  }
}
