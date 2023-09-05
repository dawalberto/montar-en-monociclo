import client from "@/client";
import imageUrlBuilder from "@sanity/image-url";

export const valuesOfImg = (source: any) => {
  const imageBuilder = imageUrlBuilder(client as any).image(source);
  const imgUrl = imageBuilder.url();
  const sizes = getSizes(imgUrl);

  return {
    src: imgUrl,
    ...sizes,
  };
};

const getSizes = (imgUrl: string) => {
  const regex = /-(\d+)x(\d+)\./;
  const match = imgUrl.match(regex);

  if (match) {
    return {
      width: parseInt(match[1], 10),
      height: parseInt(match[2], 10),
    };
  }

  return {
    width: null,
    height: null,
  };
};
