import path from 'path'
import {
  add as addLink,
  get as getLink,
  getWatchingNames,
  wait
} from './link-holder'

// 本地文章文件名没有空格 (Local article file name without spaces)
const POST_LINK_REG = /(file:\/\/(.+?))((:?\s+)?[\s\)])/g

var processContent = (data) => {
  var link
  data.content = data.content.replace(POST_LINK_REG, function(match, str, name, tail) {
    link = getLink(name)
    if (link) {
      return (link + tail)
    }
    wait(name, (link) => {
      data.content = data.content.replace('file://' + name, link)
    })
    return match
  })
}

export function process(data) {
  // 只对本地文章处理 (Only deal with local articles)
  if (data.layout === 'post') {
    processContent(data)
    addLink(path.basename(data.asset_dir), data.permalink)
  }
}

export function verifyComplete() {
  var names = getWatchingNames()
  if (names.length) {
    console.log('file:// 匹配不到下列文章 (Can\'t match the following articles)：' + names.join(', '))
  }
}
