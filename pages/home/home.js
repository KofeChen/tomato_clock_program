Page({
  data: {
    lists: [
      { id: 1, text: "我今天跑了步", finished: false },
      { id: 2, text: "我今天刷了题", finished: true },
      { id: 3, text: "我今天上了课，泡了图书馆，扣了女", finished: false }
    ],
    visible: false
  },
  showConfirm() {
    this.setData({ visible: true })
  },
  confirm(event) {
    let content = event.detail
    if(content) {
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hide()
    }
  },
  hide() {
    this.setData({ visible: false })
  },
  finishTodo(event) {
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  }
})