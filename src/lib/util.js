class UTIL {
  static getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    if (match) {
      return match[2];
    }
    return false;
  }
}

export default UTIL;
