import React, {useState} from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

type Photo = {
  src: string;
  width: number;
  height: number;
};

const Gallery = ({photos}: {photos: Photo[]}) => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({index}) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
};

export default Gallery;
