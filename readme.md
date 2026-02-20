# 随机数生成器 - 网页版

<p align="center">
  🎲
</p>

<p align="center">
  <b>基于 Material Design 3 的在线随机数生成工具</b>
</p>

<p align="center">
  <a href="https://github.com/hpgeyyds/Random_Number"><img src="https://img.shields.io/badge/下载Android版本-blue?style=flat-square&logo=android" alt="Android版本"></a>
  <a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://img.shields.io/badge/License-GPL%203.0-green?style=flat-square" alt="License"></a>
</p>

---

## ✨ 功能特性

### 🎲 随机数生成
- **开始/停止抽取**：点击开始按钮，数字快速跳动；再次点击停止，获得最终结果
- **自定义范围**：支持任意正整数范围内的随机数生成
- **快速选择**：提供4组常用范围快速切换（1-10、1-100、1-1000、骰子1-6）
- **历史记录**：自动保存抽取记录，格式为"于 xx 与 yy 间取得 zz"
- **复制结果**：一键复制随机数到剪贴板

### 🎨 界面设计
- **Material Design 3 Elevation**：采用最新的 MD3 设计规范
- **自动深色模式**：根据系统主题自动切换浅色/深色模式
- **非线性动画**：流畅自然的过渡动画效果
- **响应式布局**：完美适配桌面端和移动端浏览器

---

## 🚀 使用方法

### 在线使用
直接在浏览器中打开 `index.html` 文件即可使用，无需安装任何软件。

### 本地运行
```bash
# 克隆仓库
git clone https://github.com/hpgeyyds/Random_Number.git

# 进入网页版目录
cd Random_Number/RandomNumberWeb

# 使用浏览器打开 index.html
# 或使用本地服务器
python -m http.server 8080
```

---

## 🛠️ 技术栈

- **HTML5** - 语义化页面结构
- **CSS3** - CSS变量、Flexbox、动画、响应式设计
- **JavaScript** - 原生ES6+、Clipboard API、localStorage

---

## 📁 项目结构

```
RandomNumberWeb/
├── index.html      # 主页面
├── styles.css      # MD3E样式
├── script.js       # 交互逻辑
└── readme.md       # 项目说明
```

---

## 🤖 Android 版本

推荐使用 Android 原生应用，获得更完整的体验：

- ✅ 完整的 Material Design 3 组件和动画
- ✅ 支持 Android 12+ 莫奈动态取色
- ✅ 设置页面（主题切换、重复抽取控制）
- ✅ 自定义快速取值范围
- ✅ 离线使用，无需网络

👉 [下载 Android 版本](https://github.com/hpgeyyds/Random_Number/releases)

---

## 📄 开源协议

本项目采用 [GNU General Public License v3.0 (GPL 3.0)](https://www.gnu.org/licenses/gpl-3.0.html) 开源协议。

```
随机数生成器 - 网页版
Copyright (C) 2026 核平鸽

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

---

## 👨‍💻 开发者

**核平鸽** (hpgeyyds)

- GitHub: [@hpgeyyds](https://github.com/hpgeyyds)
- 项目地址: [https://github.com/hpgeyyds/Random_Number_Web](https://github.com/hpgeyyds/Random_Number_Web)

---

## 🙏 致谢

<p align="center">
  <b>Powered By <a href="https://www.trae.ai">Trae</a> & <a href="https://www.moonshot.cn">Kimi 2.5</a></b>
</p>

---

<p align="center">
  <b>© 2026 核平鸽 版权所有</b>
</p>
