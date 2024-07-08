import { __param } from 'tslib';
import { IDispensaryBackend } from './dispenary-backend.types';

export class Dispensaries {
  results: Dispensary[];

  constructor(params: Dispensaries) {
    this.results = params.results;
  }

  static fromBackend(backEndObj: IDispensaryBackend[]) {
    return new Dispensaries({
      results: backEndObj.map((backEndObj) =>
        Dispensary.fromBackend(backEndObj)
      ),
    });
  }
}

export interface IDispensaryParams {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  crawlDate: { $date: Date };
  description: string;
  email: string;
  followerCount: number;
  image: string;
  lastMenuUpdate: { $date: string };
  licenseNumber: string;
  locations: string; // Assuming this is a string representation of an array of objects
  logoUrl: string;
  menu: string; // Assuming this is a string representation of an array of menu items
  name: string;
  phone: string;
  postalCode: string;
  primaryLocation: string; // Assuming this is a string representation of a single location
  rating: number;
  region: string;
  reviewCount: number;
  schedule: string; // Assuming this is a string representation of a schedule object
  slug: string;
  source: string;
  sourceID: string;
  website: string;
  _id: { $oid: string };
}

export class Dispensary {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  crawlDate: { $date: Date };
  description: string;
  email: string;
  followerCount: number;
  image: string;
  lastMenuUpdate: { $date: string };
  licenseNumber: string;
  locations: string; // Assuming this is a string representation of an array of objects
  logoUrl: string;
  menu: string; // Assuming this is a string representation of an array of menu items
  name: string;
  phone: string;
  postalCode: string;
  primaryLocation: string; // Assuming this is a string representation of a single location
  rating: number;
  region: string;
  reviewCount: number;
  schedule: string; // Assuming this is a string representation of a schedule object
  slug: string;
  source: string;
  sourceID: string;
  website: string;

  _id: { $oid: string };

  constructor(params: IDispensaryParams) {
    this.address1 = params.address1;
    this.address2 = params.address2;
    this.city = params.city;
    this.country = params.country;
    this.crawlDate = params.crawlDate;
    this.description = params.description;
    this.email = params.email;
    this.followerCount = params.followerCount;
    this.image = params.image;
    this.lastMenuUpdate = params.lastMenuUpdate;
    this.licenseNumber = params.licenseNumber;
    this.locations = params.locations;
    this.logoUrl = params.logoUrl;
    this.menu = params.menu;
    this.name = params.name;
    this.phone = params.phone;
    this.postalCode = params.postalCode;
    this.primaryLocation = params.primaryLocation;
    this.rating = params.rating;
    this.region = params.region;
    this.reviewCount = params.reviewCount;
    this.schedule = params.schedule;
    this.slug = params.slug;
    this.source = params.source;
    this.sourceID = params.sourceID;
    this.website = params.website;

    this._id = params._id;
  }

  static fromBackend(backEndObj: IDispensaryBackend) {
    return new Dispensary({
      address1: backEndObj.Address1,
      address2: backEndObj.Address2,
      city: backEndObj.City,
      country: backEndObj.Country,
      crawlDate: backEndObj.CrawlDate,
      description: backEndObj.Description,
      email: backEndObj.Email,
      followerCount: backEndObj.FollowerCount,
      image: backEndObj.Image,
      lastMenuUpdate: backEndObj.LastMenuUpdate,
      licenseNumber: backEndObj.LicenseNumber,
      locations: backEndObj.Locations,
      logoUrl: backEndObj.logoUrl,
      menu: backEndObj.Menu,
      name: backEndObj.Name,
      phone: backEndObj.Phone,
      postalCode: backEndObj.PostalCode,
      primaryLocation: backEndObj.PrimaryLocation,
      rating: Number(backEndObj.Rating),
      region: backEndObj.Region,
      reviewCount: backEndObj.ReviewCount,
      schedule: backEndObj.Schedule,
      slug: backEndObj.Slug,
      source: backEndObj.Source,
      sourceID: backEndObj.SourceID,
      website: backEndObj.Website,

      _id: backEndObj._id,
    });
  }
}
