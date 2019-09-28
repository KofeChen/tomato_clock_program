Page({
  data: {
    defaultSecond: 1500,
    time: "",
    timer: null,
    stop: false,
    showAgainBtn: false,
    visible: false,
    finishConfirm: false
  },
  onShow: function () {
    this.startTimer()
  },
  startTimer() {
    this.changeTime()
    this.setData({ stop: false })
    this.data.timer = setInterval(() => {
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
      if (this.data.defaultSecond === 0) {
        this.setData({ 
          stop: true, 
          showAgainBtn: true,
          finishConfirm: true
        })
        return clearInterval(this.data.timer)
      }
    }, 1000)
  },
  changeTime() {
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond%60)
    if ((s+"").length === 1) {
      s = "0" + s
    }
    if ((m+"").length === 1) {
      m = "0" + m
    }
    this.setData({ time: `${m}:${s}` })
  },
  stopTimer() {
    if (this.data.stop) {
      this.startTimer()
    } else {
      clearInterval(this.data.timer)
      this.setData({ stop: true })
    }
  },
  showConfirm() {
    clearInterval(this.data.timer)
    this.setData({ visible: true })
  },
  cancelAbandon() {
    this.setData({ visible: false })
    this.startTimer()
  },
  confirmAbandon(event) {
    console.log(event.detail)
    wx.navigateBack({
      to: -1
    })
  },
  againTimer() {
    this.setData({ 
      defaultSecond: 1500 ,
      showAgainBtn: false
    })
    this.startTimer()
  },
  confirmFinish(event) {
    console.log(event.detail)
    this.setData({ finishConfirm: false })
  },
  confirmcancel() {
    this.setData({ finishConfirm: true })
  }
})