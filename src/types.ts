export type ComponentCategory =
  | 'Banners'
  | 'Buttons'
  | 'Single Components'
  | 'Multi Components'
  | 'Layouts A'
  | 'Layouts B'
  | 'Layouts C'
  | 'Layouts D'
  | 'Varios';

export type MailComponent = {
  id: string;
  category: ComponentCategory;
  stringCode: string;
};

export type ImageCategory = 'Headers' | 'Icons' | 'Banners' | 'Logos' | 'Others' | 'Pre-Builts';

export type GalleryImage = {
  id: string | number;
  name: string;
  category: ImageCategory;
  url: string;
  width?: number;
  height?: number;
};

export type PrebuiltEmail = {
  id: number;
  name: string;
  url: string;
  code: string;
};

export type PrebuiltEmailPreview = Omit<PrebuiltEmail, 'code'>;

export type OutputItem = {
  id: number;
  stringCode: string;
};

export type EmailWrapper = {
  topWrapper: string;
  bottomWrapper: string;
};
