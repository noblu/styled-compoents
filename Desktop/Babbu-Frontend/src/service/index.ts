import axios from "axios";

const domain = "https://testnet-api.babbu.io/";

const getAllNFT = async () => {
  try {
    const res = await axios.get(domain + "nft");
    return res.data.data;
  } catch (err) {
    return err;
  }
};

const getOneNFT = async (id: any) => {
  try {
    const res = await axios.get(domain + "nft?id=" + id);    
    return res.data;
  } catch (err) {
    return err;
  }
};

export { getAllNFT, getOneNFT };


export const getAllBoxYou = async () => {
  try {
    const res = await axios.get(domain + "nft");
    return res.data.NftArray;
  } catch (err) {
    return err
  }
}

export const getOneBoxYou = async (id: any) => {
  try {
    const res = await axios.get(domain + "nft?id=" + id);
    return res.data;
  } catch (err) {
    return err
  }
}

