const appConfig = {
    _webSite: 'https://www.taozi008.com',
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
            type_id: '229',
            type_name: '电影',
            hasSubclass: false,
        },
        {
            type_id: '230',
            type_name: '电视剧',
            hasSubclass: false,
        },
        {
            type_id: '231',
            type_name: '综艺',
            hasSubclass: false,
        },
        {
            type_id: '232',
            type_name: '动漫',
            hasSubclass: false,
        },
    ]
    return JSON.stringify(backData)
}
async function getSubclassList(args) {
    let backData = new RepVideoSubclassList()
    return JSON.stringify(backData)
}
async function getSubclassVideoList(args) {
    var backData = new RepVideoList()
    return JSON.stringify(backData)
}
