import marquee from './marquee.js'
import tab from './tab.js'

marquee()
tab()

import './styles/index.css'
import './styles/index.less'
// 1.引入图片
// 图片的src属性
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

// 2.创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

//3.给src赋值
gif.src = gifSrc
png.src = pngSrc

//4.插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const fn = () => {
    console.log("我是一个箭头函数")
}
console.log(fn);

