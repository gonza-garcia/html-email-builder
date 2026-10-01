import { all_prebuilts_without_code } from './gallery-prebuilt-emails';
import type { GalleryImage, ImageCategory } from '../types';


export const image_categories: ImageCategory[] = [
    `Headers`,      // 0
    `Icons`,        // 1
    `Banners`,      // 2
    `Logos`,        // 3
    `Others`,       // 4
    `Pre-Builts`,   // 5
]

const headers = [
    `https://html-email-builder.pages.dev/images/headers/header-security-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-security-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-vpn-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-vpn-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-teams-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-teams-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-servicenow-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-servicenow-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-quality-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-quality-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-update-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-update-1.png`,
    `https://html-email-builder.pages.dev/images/headers/header-generic-0.png`,
    `https://html-email-builder.pages.dev/images/headers/header-generic-1.png`,
];

const icons = [
    `https://html-email-builder.pages.dev/images/icons/icon-lock.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-shield.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-warning.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-key.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-globe.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-cloud.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-monitor.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-download.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-phone.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-video.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-chat.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-user.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-gear.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-mail.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-folder.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-search.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-chart.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-check.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-star.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-calendar.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-clock.png`,
    `https://html-email-builder.pages.dev/images/icons/icon-info.png`,
];

const banners = [
    `https://html-email-builder.pages.dev/images/banners/banner-security-0.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-vpn-1.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-teams-2.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-servicenow-3.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-quality-4.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-update-5.png`,
    `https://html-email-builder.pages.dev/images/banners/banner-generic-0.png`,
];

const logos = [
    `https://html-email-builder.pages.dev/images/logos/logo-mailbuilder.png`,
];

const others = [
    `https://html-email-builder.pages.dev/images/others/other-1.png`,
    `https://html-email-builder.pages.dev/images/others/other-2.png`,
    `https://html-email-builder.pages.dev/images/others/other-3.png`,
    `https://html-email-builder.pages.dev/images/others/other-4.png`,
    `https://html-email-builder.pages.dev/images/others/other-5.png`,
    `https://html-email-builder.pages.dev/images/others/other-6.png`,
];


export const imageList: GalleryImage[] = headers.map((image, index): GalleryImage => ({
    id: `${image_categories[0]}_${index}`,
    name: `${image_categories[0]}_${index}`,
    category: image_categories[0],
    height: 140,
    url: image 
}))
    .concat(

    icons.map((image, index): GalleryImage => ({
      id: `${image_categories[1]}_${index}`,
      name: `${image_categories[1]}_${index}`,
      category: image_categories[1],
      height: 60,
      url: image 
    })),
    banners.map((image, index): GalleryImage => ({
      id: `${image_categories[2]}_${index}`,
      name: `${image_categories[2]}_${index}`,
      category: image_categories[2],
      width: 320,
      url: image 
    })),
    logos.map((image, index): GalleryImage => ({
      id: `${image_categories[3]}_${index}`,
      name: `${image_categories[3]}_${index}`,
      category: image_categories[3],
      height: 80,
      url: image 
    })),
    others.map((image, index): GalleryImage => ({
      id: `${image_categories[4]}_${index}`,
      name: `${image_categories[4]}_${index}`,
      category: image_categories[4],
      height: 140,
      url: image 
    })),
    all_prebuilts_without_code.map((preb): GalleryImage => ({
      ...preb,
      category: image_categories[5],
      width: 300
    })),
);
