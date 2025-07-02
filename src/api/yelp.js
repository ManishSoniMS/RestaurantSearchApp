import axios from "axios";

const CLIENT_ID = "Y-SVKucs1QsicgcZ-CJq0A";

const API_KEY =
  "KYa0WJPuoVaE1XNx5pClnHPalw7NPWWgClaUkWG6_2r5nj5CK2bvEeSLlUteebd_ODDrFnqhppSGx0ZUICWEEa663gqcPY7p_KX3evAq0r7BVnlm7r9vHqbhZoKKZ3Yx";
//   "l2cmhf2ezR16ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30pLy0UWoHQOnYFjLozpYnZOx-UsXXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: { Authorization: `Bearer ${API_KEY}` },
});
