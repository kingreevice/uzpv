const appConfig = {
    _webSite: 'http://www.mucpan.cc',
    /**
     * 网站主页，uz 调用每个函数前都会进行赋值操作
     * 如果不想被改变 请自定义一个变量
     */
    get webSite() {
        return this._webSite
    },
    set webSite(value) {
        this._webSite = value
    },

    _uzTag: '',
    /**
     * 扩展标识，初次加载时，uz 会自动赋值，请勿修改
     * 用于读取环境变量
     */
    get uzTag() {
        return this._uzTag
    },
    set uzTag(value) {
        this._uzTag = value
    },
}

/**
 * 异步获取分类列表的方法。
 * @param {UZArgs} args
 * @returns {Promise<RepVideoClassList>}
 */
async function getClassList(args) {
    var backData = new RepVideoClassList()
    backData.data = [
        {
            type_id: '20',
            type_name: '小米电影',
            hasSubclass: false,
        },
        {
            type_id: '21',
            type_name: '小米剧集',
            hasSubclass: false,
        },
        {
            type_id: '22',
            type_name: '小米动漫',
            hasSubclass: false,
        },
        {
            type_id: '23',
            type_name: '小米综艺',
            hasSubclass: false,
        },
    ]
    return JSON.stringify(backData)
}
async function getSubclassList(args) {
    let backData = new RepVideoSubclassList()
    return JSON.stringify(backData)
}
//async function getSubclassVideoList(args) {
 //   var backData = new RepVideoList()
  //  return JSON.stringify(backData)
//}
/**
 * 获取分类视频列表
 * @param {UZArgs} args
 * @returns {Promise<RepVideoList>}
 */
async function getVideoList(args) {
    var backData = new RepVideoList()
    let url =
        UZUtils.removeTrailingSlash(appConfig.webSite) +
        `/index.php/vod/show/id/${args.url}/page/${args.page}.html`
    try {
        const pro = await req(url)
        backData.error = pro.error
        let videos = []
        if (pro.data) {
            const $ = cheerio.load(pro.data)
            let vodItems = $('#main .module-item')
            vodItems.each((_, e) => {
                let videoDet = new VideoDetail()
                videoDet.vod_id = $(e).find('.module-item-pic a').attr('href')
                videoDet.vod_name = $(e)
                    .find('.module-item-pic img')
                    .attr('alt')
                videoDet.vod_pic = $(e)
                    .find('.module-item-pic img')
                    .attr('data-src')
                videoDet.vod_remarks = $(e).find('.module-item-text').text()
                videoDet.vod_year = $(e)
                    .find('.module-item-caption span')
                    .first()
                    .text()
                videos.push(videoDet)
            })
        }
        backData.data = videos
    } catch (error) {}
    return JSON.stringify(backData)
}






function combineUrl(url) {
    if (url === undefined) {
        return ''
    }
    if (url.indexOf(appConfig.webSite) !== -1) {
        return url
    }
    if (url.startsWith('/')) {
        return appConfig.webSite + url
    }
    return appConfig.webSite + '/' + url
}
