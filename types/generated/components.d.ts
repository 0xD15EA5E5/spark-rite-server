import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHexagonRight extends Struct.ComponentSchema {
  collectionName: 'components_shared_hexagon_rights';
  info: {
    displayName: 'Single Hexagon Block';
    icon: 'layout';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    ButtonURL: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedScrollBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_scroll_banners';
  info: {
    displayName: 'Scroll Banner';
    icon: 'landscape';
  };
  attributes: {
    Enabled: Schema.Attribute.Boolean;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTripleHexagonBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_triple_hexagon_blocks';
  info: {
    displayName: 'Triple Hexagon Block';
    icon: 'layout';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    ButtonURL: Schema.Attribute.String;
    Images: Schema.Attribute.Media<'images', true>;
    Text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hexagon-right': SharedHexagonRight;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.scroll-banner': SharedScrollBanner;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.triple-hexagon-block': SharedTripleHexagonBlock;
    }
  }
}
