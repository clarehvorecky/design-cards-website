export function isSafari() {
  const ua = navigator.userAgent;
  const isSafariBrowser = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua);
  return isSafariBrowser;
}
export default isSafari;