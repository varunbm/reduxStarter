import IMAGES from "../constants/index";

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  payload: images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  payload: error,
});

export { loadImages, setImages, setError };
