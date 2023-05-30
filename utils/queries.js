export const getBooksQuery = `{
    getBooks {
        id
        title
        info {
        en {
            target
            description
        }
        }
    }
}
`;

// This query will return all colors for specific book
export const getBookQuery = `{
    getBook(id: "pantoneCmykCoated") {
        id
        colors {
        code
        name
        rgb {r g b}
        positionInBook
        }
    }
}
`;

export const getBookQueryTcx = `{
    getBook(id: "pantoneFhCottonTcx") {
        id
        colors {
        code
        name
        rgb {r g b}
        positionInBook
        }
    }
}
`;

export const getBookQueryTpm = `{
    getBook(id: "pantoneFhiMetallicShimmersTpm") {
        id
        colors {
        code
        name
        rgb {r g b}
        positionInBook
        }
    }
}
`;

// This query allows user to get single code based on Pantone Color Code
export const getColorQuery = `{
    getColor(code: "105 C") {
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
  }
`;

// This query allows user to get single code based on Pantone Color Code
export const getBetaColorQuery = `{
    getColor(code: "P 43-13 C") {
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
  }
`;

// This query allows user to get Multiple Colros By Color Code
export const getColorsByCodeQuery = `{
    getColorsByCode(codes: ["3570 C", "3570 U", "16-4535 TPG"]) { 
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
}
`;

// This query will return the closest Pantone Color for specific book based on RGB, LAB, CMYK Color Space Input
export const getClosestColorsQuery = `
{
    getClosestColors(colorRGB: {r: 4, g: 4, b: 4}, bookId: "pantoneFhiMetallicShimmersTpm") {
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
}
`;
// This query will return harmonies for the provided colors
export const getHarmonyQuery = `{
    getHarmony(colorCode: "105 C", harmony: ANALOGOUS) {
        code,
        positionInBook
        code,
        url,
        lab { l a b },
        cmyk {c m y k}
        rgb {r g b}
        pageNumberInBook
    }
}
`;

export default {
  getBooksQuery,
  getBookQuery,
  getColorQuery,
  getBetaColorQuery,
  getColorsByCodeQuery,
  getClosestColorsQuery,
  getHarmonyQuery,
};
