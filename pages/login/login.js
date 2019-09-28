const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData

Page({
  data: {
    
  },
  login(event) {
    let iv = event.detail.iv
    let encrypted_data = event.detail.encryptedData
    this.wxLogin(iv, encrypted_data)
  },
  wxLogin(iv, encrypted_data) {
    wx.login({
      success: (res) => {
        this.loginMe(res.code, iv, encrypted_data)
      }
    })
  },
  loginMe(code, iv, encrypted_data) {
    http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret
    })
    .then( (response) => {
      this.saveStorage(response)
      wx.reLaunch({
        url: '/pages/home/home'
      })
    })
  },
  saveStorage(response) {
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync('X-token', response.header["X-token"])
  }
})