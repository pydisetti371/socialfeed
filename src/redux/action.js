export function getFaceBook(payload) {
  // console.log(payload, "payload");
  return {
    type: "GET_FACEBOOK",
    payload,
  };
}
export function getTwitter(payload) {
  // console.log(payload, "payload");
  return {
    type: "GET_TWITTER",
    payload,
  };
}
export function getLinkedin(payload) {
  return {
    type: "GET_LINKEDIN",
    payload,
  };
}
