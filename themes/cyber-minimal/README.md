# Cyber Minimal Theme

一个简约+赛博朋克风格的Hexo主题，专为技术博客和个人网站设计。

![主题预览](https://vision-blog.pages.dev/images/theme-preview.png)

## 🎨 设计理念

融合简约主义与赛博朋克美学，打造沉浸式的数字阅读体验。

### 核心特点
- **简约布局**: 清晰的视觉层次，无干扰的阅读环境
- **赛博朋克风格**: 霓虹色彩、Glitch效果、未来感设计
- **完全响应式**: 完美适配所有设备屏幕
- **高性能**: 优化的CSS和JavaScript，快速加载
- **可定制**: 丰富的配置选项，轻松个性化

## 🚀 快速开始

### 安装主题

1. 克隆主题到你的Hexo博客的`themes`目录：
```bash
cd your-hexo-site
git clone https://github.com/1jinbo/Vision.git themes/cyber-minimal
```

2. 修改Hexo配置文件`_config.yml`：
```yaml
theme: cyber-minimal
```

### 基本配置

在主题配置文件`themes/cyber-minimal/_config.yml`中：

```yaml
# 菜单配置
menu:
  Home: /
  Archives: /archives
  Tags: /tags
  Categories: /categories
  About: /about

# 社交链接
social:
  GitHub: https://github.com/yourusername
  Twitter: https://twitter.com/yourusername
  Email: mailto:your@email.com

# 侧边栏部件
widgets:
  - search
  - recent_posts
  - categories
  - tags

# 侧边栏位置
sidebar: right
```

## 🎯 功能特性

### 文章系统
- ✅ 完整的文章分类和标签系统
- ✅ 代码高亮和复制功能
- ✅ 阅读时间估算
- ✅ 上一篇/下一篇导航
- ✅ 相关文章推荐

### 页面类型
- ✅ 首页文章列表
- ✅ 文章详情页
- ✅ 归档页面
- ✅ 标签页面
- ✅ 分类页面
- ✅ 关于页面
- ✅ 自定义页面
- ✅ 404错误页面

### 交互效果
- ✅ Glitch背景效果
- ✅ 鼠标跟随光效
- ✅ 滚动动画
- ✅ 平滑过渡
- ✅ 悬停反馈

### 实用功能
- ✅ 站内搜索
- ✅ 代码复制
- ✅ 社交分享
- ✅ RSS订阅
- ✅ 响应式设计

## 🎨 自定义样式

### 颜色主题

主题使用CSS自定义变量，可以轻松修改颜色：

```css
:root {
  --primary: #00ff9d;      /* 霓虹绿 - 主要颜色 */
  --secondary: #ff00ff;    /* 霓虹粉 - 强调颜色 */
  --accent: #00d9ff;       /* 霓虹蓝 - 点缀颜色 */
  --bg-dark: #0a0a0a;      /* 深黑背景 */
  --bg-surface: #1a1a1a;   /* 表面颜色 */
  --text-primary: #ffffff; /* 主要文字 */
  --text-secondary: #b0b0b0; /* 次要文字 */
  --border: #333333;       /* 边框颜色 */
}
```

### 字体配置

默认使用以下字体：
- **主要字体**: 'Inter', sans-serif
- **代码字体**: 'Roboto Mono', monospace

可以在CSS中修改：
```css
:root {
  --font-primary: 'Your Font', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

## 📁 文件结构

```
cyber-minimal/
├── _config.yml           # 主题配置文件
├── layout/               # 布局文件
│   ├── _partial/         # 部分模板
│   ├── index.ejs         # 首页布局
│   ├── post.ejs          # 文章布局
│   ├── page.ejs          # 页面布局
│   ├── archive.ejs       # 归档布局
│   └── 404.ejs           # 404页面
├── source/               # 静态资源
│   ├── css/
│   │   └── style.css     # 主样式文件
│   ├── js/
│   │   └── main.js       # 主脚本文件
│   └── images/           # 图片资源
├── languages/            # 多语言文件
└── README.md            # 说明文档
```

## ⚙️ 高级配置

### 自定义JavaScript

在`source/js/main.js`中可以添加自定义交互效果：

```javascript
// 示例：添加自定义动画
document.addEventListener('DOMContentLoaded', function() {
  // 你的代码 here
});
```

### 自定义CSS

在`source/css/style.css`末尾添加自定义样式：

```css
/* 自定义样式 */
.your-custom-class {
  /* 你的样式 here */
}
```

### 添加新页面

1. 创建页面：
```bash
hexo new page "your-page"
```

2. 编辑页面内容：
```markdown
---
title: 页面标题
layout: page
date: 2024-01-01
---

你的页面内容...
```

## 🔧 开发指南

### 本地开发

1. 启动Hexo本地服务器：
```bash
hexo clean
hexo generate
hexo server
```

2. 访问 http://localhost:4000 查看效果

### 修改布局

所有布局文件使用EJS模板语法，可以在`layout/`目录中修改：

- `layout.ejs`: 基础布局
- `index.ejs`: 首页布局
- `post.ejs`: 文章布局
- `_partial/`: 可重用组件

### 添加新部件

1. 在`layout/_partial/sidebar.ejs`中添加部件HTML
2. 在`source/css/style.css`中添加部件样式
3. 在`_config.yml`的`widgets`数组中启用部件

## 🎯 最佳实践

### 文章写作建议

1. **使用Front-matter**：
```markdown
---
title: 文章标题
date: 2024-01-01
tags: [标签1, 标签2]
categories: [分类]
excerpt: 文章摘要
cover: /images/cover.jpg
---
```

2. **代码块语法**：
````markdown
```python
def hello():
    print("Hello, Cyberpunk!")
```
````

3. **图片优化**：
- 使用WebP格式减小文件大小
- 添加alt文本提高可访问性
- 适当压缩图片

### 性能优化

1. **图片优化**：
- 使用合适的图片格式（WebP > JPEG > PNG）
- 压缩图片文件大小
- 使用懒加载

2. **代码优化**：
- 最小化CSS和JavaScript
- 使用字体子集
- 启用浏览器缓存

3. **SEO优化**：
- 添加meta描述和关键词
- 使用语义化HTML
- 创建sitemap.xml

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

### 报告问题

1. 在GitHub Issues中创建新issue
2. 描述问题的详细情况
3. 提供复现步骤
4. 附上相关截图

### 提交代码

1. Fork仓库
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 📄 许可证

MIT License

## 🙏 致谢

- [Hexo](https://hexo.io/) - 快速、简洁且高效的博客框架
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 网页字体
- 所有贡献者和用户

## 📞 支持

- 文档: [vision-blog.pages.dev](https://vision-blog.pages.dev)
- GitHub: [1jinbo/Vision](https://github.com/1jinbo/Vision)
- 问题: [GitHub Issues](https://github.com/1jinbo/Vision/issues)

---

**享受你的赛博空间之旅！** 🚀