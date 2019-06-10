import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            "id": 1,
            "title": "社会热点",
            "imgUrl": "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 2,
            "title": "手绘",
            "imgUrl": "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 3,
            "title": "摄影",
            "imgUrl": "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 4,
            "title": "@IT.互联网",
            "imgUrl": "//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 5,
            "title": "读书",
            "imgUrl": "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 6,
            "title": "故事",
            "imgUrl": "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        },
        {
            "id": 7,
            "title": "科普",
            "imgUrl": "//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        }
    ],
    articleList: [
        {
           "id": "1",
           "title": "神技能：Python控制键盘鼠标",
           "imgUrl": "//upload-images.jianshu.io/upload_images/15679176-ab613a64131948b8?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
           "desc": "这个库让你可以控制和监控输入设备。 对于每一种输入设备，它包含一个子包来控制和监控该种输入设备： 学习Python中有不明白推荐加入交流群 py..."  
        },
        {
           "id": "2",
           "title": "女人有没有想你，对她说这“四个字”，就心里有数了",
           "imgUrl": "//upload-images.jianshu.io/upload_images/16050459-2fdca4e0a3858622.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
           "desc": "在感情里，再大大咧咧的男人，也会变得细心体贴，再粗狂的男人，也会变得情感细腻，不要以为，女人不在男人的身边，男人不想念女人。 男人不仅会想念女人..."  
        },
        {
           "id": "3",
           "title": "大神必备电脑软件，每个都是干货分享!",
           "imgUrl": "//upload-images.jianshu.io/upload_images/15375356-f7e1e810e38c2ebd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
           "desc": "我们大家在使用电脑时，都希望有一个特别好用的电脑软件，今天就来给大家分享一下哪些软件在电脑中比较好用吧。 Clover 在使用浏览器的时候，很多..."  
        },
        {
           "id": "4",
           "title": "Java 中的多线程你只要看这一篇就够了",
           "imgUrl": "//upload-images.jianshu.io/upload_images/9741289-cf7f4aa6a55801ed?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
           "desc": "作者丨纳达丶无忌 https://www.jianshu.com/p/40d4c7aebd66 引 如果对什么是线程、什么是进程仍存有疑惑，请先..."  
        },
    ]
})

export default (state=defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}