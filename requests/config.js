export const config = {
  // url: 'https://back.vishnyakov.digital',
  url: 'http://localhost:5500',
  getInitData() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('__initdata')
    }
    return ''
  }
}