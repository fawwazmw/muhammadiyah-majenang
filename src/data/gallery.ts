import type { ImageMetadata } from "astro:assets";
import galleryPost from "../assets/gallery/post-mhd.jpeg";
import galleryBlog from "../assets/gallery/blog-mhd.jpeg";
import galleryBlog2 from "../assets/gallery/blog-mhd-2.jpeg";

export interface GalleryItem {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export const gallery: GalleryItem[] = [
  {
    image: galleryPost,
    alt: "Jajaran pengurus Pimpinan Cabang Muhammadiyah Majenang",
    caption: "Jajaran pengurus Pimpinan Cabang Muhammadiyah Majenang",
  },
  {
    image: galleryBlog,
    alt: "Formatur PCM Majenang periode Muktamar ke-48",
    caption: "Formatur PCM Majenang periode Muktamar ke-48",
  },
  {
    image: galleryBlog2,
    alt: "Musyawarah Ranting Muhammadiyah Mulyasari",
    caption: "Musyawarah Ranting Muhammadiyah Mulyasari",
  },
];
