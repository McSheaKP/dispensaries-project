export interface IDispensaryBackend {
    Address1: string;
    Address2: string | null;
    City: string;
    Country: string;
    CrawlDate: { $date: Date };
    Description: string;
    Email: string;
    FollowerCount: number;
    Image: string;
    LastMenuUpdate: { $date: string };
    LicenseNumber: string;
    Locations: string; // Assuming this is a string representation of an array of objects
    Menu: string; // Assuming this is a string representation of an array of menu items
    Name: string;
    Phone: string;
    PostalCode: string;
    PrimaryLocation: string; // Assuming this is a string representation of a single location
    Rating: string;
    Region: string;
    ReviewCount: number;
    Schedule: string; // Assuming this is a string representation of a schedule object
    Slug: string;
    Source: string;
    SourceID: string;
    Website: string;
    location: string; // Assuming this is a string representation of a geographic location
    logoUrl: string;
    _id: { $oid: string };
}