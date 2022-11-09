import axios from "axios";
export const isImage = async (url) => {
  const res = await axios.get(url);
  const buff = await res.blob();
 
  return buff.type.startsWith('image/')
}

