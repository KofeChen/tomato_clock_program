// pages/me/me.js
Page({
  data: {
    tab: "tomato",
    list: {
      本周一: [
        { time: "08:00", text: "我做完了作业", id: 1 },
        { time: "19:00", text: "我下了课去跑步，然后打包饭回宿舍吃，最后洗澡学习", id: 2 }
      ],
      本周二: [
        { time: "07:00", text: "早起并跑步，吃了掩面三及第", id: 3 },
        { time: "20:00", text: "吃完晚饭陪家人散步，兜风", id: 4 }
      ],
      本周三: [
        { time: "08:00", text: "我做完了作业", id: 5 },
        { time: "19:00", text: "我下了课去跑步，然后打包饭回宿舍吃，最后洗澡学习", id: 6 }
      ],
      本周四: [
        { time: "07:00", text: "早起并跑步，吃了掩面三及第", id: 7 },
        { time: "20:00", text: "吃完晚饭陪家人散步，兜风", id: 8 }
      ]
    }
  },
  onLoad: function (options) {

  },
  changeTab(event) {
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name })
  }
})