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

