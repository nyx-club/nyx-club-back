import type { Schema, Struct } from '@strapi/strapi';

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'address';
    icon: 'gate';
  };
  attributes: {
    city: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Madrid'>;
    country: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Espa\u00F1a'>;
    postalCode: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'28015'>;
    street: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Calle de Amaniel 13'>;
  };
}

export interface OpeningHourOpeningHour extends Struct.ComponentSchema {
  collectionName: 'components_opening_hour_opening_hours';
  info: {
    displayName: 'opening-hour';
    icon: 'clock';
  };
  attributes: {
    close: Schema.Attribute.String;
    day: Schema.Attribute.Enumeration<
      [
        'Lunes',
        'Martes',
        'Mi\u00E9rcoles',
        'Jueves',
        'Viernes',
        'S\u00E1bado',
        'Domingo',
      ]
    >;
    open: Schema.Attribute.String & Schema.Attribute.DefaultTo<'20:30'>;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
    icon: 'eye';
  };
  attributes: {
    fetlife: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://fetlife.com/NYX_BDSM_CLUB'>;
    instagram: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.instagram.com/nyx_club_madrid'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.address': AddressAddress;
      'opening-hour.opening-hour': OpeningHourOpeningHour;
      'social.social': SocialSocial;
    }
  }
}
