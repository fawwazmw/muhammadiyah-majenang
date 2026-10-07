export const site = {
  name: "Muhammadiyah Majenang",
  fullName: "Pimpinan Cabang Muhammadiyah Majenang",
  description:
    "Situs resmi Pimpinan Cabang Muhammadiyah Majenang, Cilacap. Berita, dokumen, dan kegiatan persyarikatan.",
  url: "https://muhammadiyah-majenang.vercel.app",
  language: "id",
  address: {
    line1: "Majenang, Cilacap",
    line2: "Jawa Tengah, Indonesia",
  },
  email: "fawwazmufidw@gmail.com",
  phone: "+62 877-3688-1919",
  phoneHref: "+6287736881919",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.9552531707456!2d108.75883134448476!3d-7.301151912313588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f7ed6372bcc53%3A0x3ec8775cbec17ac!2sBtm%20Majenang!5e0!3m2!1sid!2sid!4v1690639722410!5m2!1sid!2sid",
  social: {
    youtube: "https://www.youtube.com/channel/UCgAXoFiCCWwWyARBzYQ9zDg",
  },
} as const;

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
] as const;
