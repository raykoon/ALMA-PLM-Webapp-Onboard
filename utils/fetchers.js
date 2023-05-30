import { API, graphqlOperation } from 'aws-amplify';
import {
  getBookQuery,
  getBooksQuery,
  getColorQuery,
  getBetaColorQuery,
  getColorsByCodeQuery,
  getClosestColorsQuery,
  getHarmonyQuery,
  getBookQueryTcx,
  getBookQueryTpm,
} from './queries';

export const getBook = async (type) => {
  try {
    const data = await API.graphql(
      graphqlOperation(
        type === 'tcx'
          ? getBookQueryTcx
          : type === 'tpm'
          ? getBookQueryTpm
          : getBookQuery
      )
    );
    if (data?.data) {
      return data.data.getBook;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getRelatedBook = async (type, color) => {
  try {
    const data = await API.graphql(
      graphqlOperation(`{
            getClosestColors(colorRGB: {r: ${color?.r}, g: ${color?.g}, b: ${
        color?.b
      }}, bookId: \"${
        type === 'tcx'
          ? 'pantoneFhCottonTcx'
          : type === 'tpm' && pantoneFhiMetallicShimmersTpm
      }\") {
                code,
                url,
                lab { l a b },
                cmyk {c m y k}
                rgb {r g b}
                pageNumberInBook
                colorValues {
                    M0 {
                    spectral {
                        values
                    }
                    }
                    M1 {
                    spectral {
                        values
                    }
                    }
                    M2 {
                    spectral {
                        values
                    }
                    }
                    M3 {
                    spectral {
                        values
                    }
                    }
                    SpInUVInc {
                    spectral {
                        values
                    }
                    }
                    SpInUVCal {
                    spectral {
                        values
                    }
                    }
                    SpInUVExc {
                    spectral {
                        values
                    }
                    }
                    SpExUVInc {
                    spectral {
                        values
                    }
                    }
                    SpExUVCal {
                    spectral {
                        values
                    }
                    }
                    SpExUVExc {
                    spectral {
                        values
                    }
                    }
                }
                positionInBook,
                closestColorsInBook {
                    code,
                    book {
                    title
                    }
                }
            }
        }`)
    );
    if (data?.data) {
      return data.data.getClosestColors;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getBooks = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBooksQuery));
    if (data?.data) {
      return data.data.getBooks;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getColor = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getColorQuery));
    if (data?.data) {
      return data.data.getColor;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getBetaColor = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBetaColorQuery));
    if (data?.data) {
      return data.data.getColor;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getColorsByCode = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getColorsByCodeQuery));
    if (data?.data) {
      return data.data.getColorsByCode;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getClosestColors = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getClosestColorsQuery));
    if (data?.data) {
      return data.data.getClosestColors;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getHarmony = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getHarmonyQuery));
    if (data?.data) {
      return data.data.getHarmony;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export default {
  getBook,
  getBooks,
  getColor,
  getColorsByCode,
  getClosestColors,
  getBetaColor,
  getHarmony,
};
