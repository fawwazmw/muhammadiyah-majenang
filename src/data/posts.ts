import type { ImageMetadata } from "astro:assets";
import blogMhd from "../assets/blog/blog-mhd.jpeg";
import blogMhd2 from "../assets/blog/blog-mhd-2.jpeg";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  list?: string[];
  image: ImageMetadata;
  imageAlt: string;
  category: string;
  pdf: string;
  pdfLabel: string;
}

export const posts: Post[] = [
  {
    slug: "formatur-pcm-majenang-muktamar-48",
    title: "11 Formatur PCM Majenang Periode Muktamar 48",
    date: "2023-07-15",
    excerpt:
      "11 Pimpinan Cabang Muhammadiyah Majenang periode Muktamar ke-48 masa bakti 2022 sampai 2027.",
    body: [
      "Pimpinan Cabang Muhammadiyah Majenang periode Muktamar ke-48 masa bakti 2022 sampai 2027 ditetapkan dengan susunan formatur sebagai berikut:",
    ],
    list: [
      "KH. Drs. Carhali",
      "KH. Drs. Muslihun, MM",
      "H. Sentot Panca Wardaya, SE",
      "KH. Drs. Saiful Anam, M.Pd",
      "Rahmat Alhidayat, S.Pd, M.Pd",
      "KH. Masbur Makmur, S.Ag, Lc",
      "KH. Masykur Ikhsan, S.Ag, M.Pd",
      "Drs. Bambang Yuntono",
      "Sugeng Prayitno, SE, MM",
      "Ahmad Syarifudin, S.Kom, S.Pd.I, MM",
      "Drs. H. Suwaji, M.MPd",
    ],
    image: blogMhd,
    imageAlt:
      "Jajaran Pimpinan Cabang Muhammadiyah Majenang periode Muktamar ke-48",
    category: "Berita",
    pdf: "/downloads/muscab-majenang-2023.pdf",
    pdfLabel: "Dokumen Muscab Majenang 2023",
  },
  {
    slug: "musyran-muhammadiyah-mulyasari",
    title: "Musyawarah Ranting Muhammadiyah Mulyasari",
    date: "2023-07-31",
    excerpt:
      "Musyran Muhammadiyah Mulyasari pada Senin 31 Juli 2023 dengan agenda Laporan Pertanggungjawaban dan pemilihan formatur.",
    body: [
      "Musyawarah Ranting (Musyran) Muhammadiyah Mulyasari dilaksanakan pada Senin, 31 Juli 2023 pukul 18.00 sampai 21.30 WIB dengan agenda Laporan Pertanggungjawaban dan pemilihan formatur.",
      "Dalam musyawarah tersebut terpilih lima formatur:",
      "Setelah tim formatur bermusyawarah, ditetapkan Ketua Marsono Abdul Syukur, Sekretaris Sugeng Darwito, M.Pd, dan Bendahara H. Sugeng Dzuriyanto.",
    ],
    list: [
      "Marsono Abdul Syukur",
      "Sugeng Darwito, S.Pd, M.Pd",
      "H. Sugeng Dzuriyanto",
      "Mohtar Nurohman, S.Pd",
      "Makhrus, ST",
    ],
    image: blogMhd2,
    imageAlt:
      "Musyawarah Ranting Muhammadiyah Mulyasari, Senin 31 Juli 2023",
    category: "Berita",
    pdf: "/downloads/laporan-musran-2023.pdf",
    pdfLabel: "Laporan Musyran Mulyasari",
  },
];

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
