'use strict'

let config = {
  debug: false,
  locale: 'zh-CN', // 决定时间格式
  ignoreWarn: { // 无视警告
    mode1: false,
    mode3: false,
    preferPath: false,
    install: false,
    withoutVirusScan: false
  },
  profile: {
    example: {
      deepmerge: true // 是否深度合并，是则只替换相同key的值，否则直接替换对象
    }
  },
  mode: 2, // 模式(对于免费软件) 0:只检查有无新版本 1.下载新版本安装包后不自动安装 2.下载并自动安装新版本 3.删除原版本（包括配置），并安装新版本
  commercialMode: 0, // 对于商业软件 0:只检查有无新版本 1.下载新版本安装包后不自动安装 2.下载并自动安装新版本 3.删除原版本（包括配置），并安装新版本
  freePersion: true, // 是否将 Free Personal 类型的软件是为商业软件
  freemium: true, // 是否将 Freemium 类型的软件是为商业软件
  virus: { // 检查病毒
    apiKey: '', // 获取地址: https://www.virustotal.com/#/settings/apikey (留空则不检查)
    upload: true, // 是否上传文件以分析
    ignoreSoftware: [], // 忽略来自某软件的检查结果
    ignoreResult: [], // 忽略来自某重结果
    safeDetectionRatio: 0 // 视为安全的检出率
  },
  specialMode: { // 为特定软件设置特定模式(最优先)
  },
  useProxy: 1, // 是否使用代理(包括请求与下载) 0.不使用 1.如果配置中声明，则使用 2.强制使用
  archivePath: 'archive',
  rootPath: 'path/to/root/path', // 根路径
  checkInterval: 1, // 检测更新的间隔(单位天)
  userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
  urlWithProxy: [ // 请求与下载的链接如果匹配任一，则走代理
  ],
  urlWithoutProxy: [ // 请求与下载的链接如果匹配任一，则不走代理(最优先)
  ],
  request: {
    retry: 5, // 重试次数(0表示不重试)
    timeout: 60, // 请求超时(单位秒)
    proxy: 'protocol://username:password@hostname:port' // 代理，留空则不使用代理 protocol: socks5/http
  },
  download: { // 下载相关
    method: 'request', // request(无需下载，但不支持续传) 或 aria2c(支持多进程) 或 wget 或 curl(支持socks代理)
    quiet: false, // 不显示进度
    continue: true, // 是否断点续传
    retry: 5, // 重试次数(0表示无数次)
    retryDelay: 5, // 重试延迟(单位秒)
    timeout: 600, // 超时(单位秒，0表示无超时)
    proxy: 'protocol://username:password@hostname:port', // 代理，留空则不使用代理
    urlWithoutHeader: [ // 下载链接如果匹配任一，则下载时不包括Header，Header包括userAgent/referer
    ],
    sfMirror: 'nchc'// sf下载镜像
  },
  preserveArchive: true, // 安装后是否保留安装包
  preserveOldArchive: false, // 当有新版本时，是否保留旧版本
  saveVersion: true, // 是否保存版本信息(推荐true)
  includeGlobal: [ // 安装中要保留的文件/文件夹(优先于excludeGlobal)
    'locales', 'resources'
  ],
  excludeGlobal: [ // 安装中要排除的文件/文件夹
    /^uninstall.exe/i // 相对于软件根路径
  ],
  search: [ // 留空则搜索全部网站，否则只按以下顺序搜索
    'softpedia'
  ],
  software: { // 要启用更新的软件
    '7-Zip': '7-Zip/7z.exe', // 路径(相对于rootPath，可使用绝对路径)
    'Bandisoft Bandizip:portable': 'Bandizip/Bandizip64.exe' // 安装 Bandizip 的 portable 版本
  }
}

module.exports = config
