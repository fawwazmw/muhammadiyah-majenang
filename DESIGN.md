# DESAIN

Direction document for the Muhammadiyah Majenang site. It gives the design its
identity; `antislop` is applied on top as a filter.

## Subject

Pimpinan Cabang Muhammadiyah Majenang, an Islamic community and education
organization in Majenang, Cilacap, Central Java. The site's job is to publish
official news, documents, and activity photos for members and the public.

Audience: members, local families, students, and anyone looking for the branch's
records and contact details. Indonesian language, formal but warm.

## Design Read

Reading this as: an institutional / public-notice site for a religious and
social organization, in a dignified editorial language, dial ENERGY 2 / RHYTHM 2
/ MOTION 1.

## Personality

Calm, trustworthy, scholarly, rooted. Not corporate, not trendy. It should feel
like a well-set printed bulletin from an organization that has existed for over a
century, not like a startup landing page.

## Palette

Taken from the official Muhammadiyah site (muhammadiyah.or.id), green with a
navy partner and an orange accent.

| Token            | Value     | Purpose                                                       |
| ---------------- | --------- | ------------------------------------------------------------ |
| `--brand`        | `#009C48` | Official Muhammadiyah green; gradient stop and favicon.       |
| `--brand-strong` | `#007A38` | Interactive green: buttons, links, chip text. Passes AA with  |
|                  |           | white text (5.5:1).                                           |
| `--brand-deep`   | `#1D8757` | Gradient stop from the official header gradient.              |
| `--brand-dark`   | `#0B4A2E` | Deep gradient stop.                                           |
| `--navy`         | `#1B3A7C` | Official navy; header and hero gradient start.                |
| `--navy-deep`    | `#0E2E75` | Footer gradient start (official).                             |
| `--accent`       | `#FF6B00` | Official orange accent: section star, active nav underline,   |
|                  |           | focus ring. Used sparingly, never as a background flood.      |
| `--brand-tint`   | `#EEF9F2` | Quiet green tint for chips and icon backgrounds.              |
| `--paper`        | `#F5F5F5` | Neutral page background (official greys).                     |
| `--surface`      | `#FFFFFF` | Cards and raised content.                                     |
| `--ink`          | `#1A1A1A` | Body and heading text.                                        |
| `--ink-soft`     | `#555555` | Secondary text, verified at WCAG AA on `--paper`.             |

Core colors: green, navy, neutral paper/ink. One accent: orange. The signature
is the official blue-to-green gradient (`--header-gradient`) carried by the
header, article headers, and hero.

## Typography

- **Display: Fraunces (variable serif).** Reason: a scholarly, literary serif
  fits an organization whose identity is tied to education and the written word,
  and it separates the site from the default AI sans-serif look. It also sits
  well beside the official wordmark.
- **Body / UI: Plus Jakarta Sans (variable).** Reason: an Indonesian-designed
  grotesque with strong legibility at small sizes, a deliberate local fit rather
  than a borrowed default.

Scale is set with `clamp()` so headings breathe on large screens and do not
overflow on small ones.

## Logos and identity motif

The official white lockups are used as supplied:

- `src/assets/logo-landscape.png` (emblem plus wordmark) in the header and
  footer, on the dark gradient surfaces.
- `src/assets/logo-square.png` (emblem, wordmark and tagline) in the hero.
- `public/favicon.png` is generated from the square lockup's emblem on the
  official green.

Because the emblem already carries the sun-ray motif, no drawn motif is added on
top of it. The orange section star is the only repeated decorative mark.

## Layout principles

- One focal point per screen: the hero headline (home) or the page title.
- Section rhythm varies: a wide hero, a two-column feature block, a quiet grid.
  Not every section is a centered title over identical cards.
- Whitespace is structure, not leftover.
- Nothing decorative ships without a reason (see antislop R-31).

## Content rules for this site

- Only real content. No invented statistics, testimonials, categories, or tags.
- Navigation points only to pages that exist.
- Every control does something. Dead social links and newsletter forms were
  removed from the original rather than reskinned.
- Text is Indonesian; document language is `id`.

## Dials

- ENERGY 2: composed and quiet, with one confident green hero.
- RHYTHM 2: mostly consistent, with a few deliberate breaks (featured post,
  inverted footer).
- MOTION 1: hover and focus states only. No scroll-reveal choreography.
