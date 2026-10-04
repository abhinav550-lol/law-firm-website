// Placeholder office and contact details supplied for the contact-page design.
export const officeLocations = [
  {
    id: "office-1",
    label: "Office 1",
    city: "Noida",
    addressLine: "B-27, Sector 18",
    regionLine: "Noida, Uttar Pradesh 201301",
    country: "India",
    mapQuery: "Sector 18, Noida, Uttar Pradesh, India",
  },
  {
    id: "office-2",
    label: "Office 2",
    city: "Kolkata",
    addressLine: "21, Park Street",
    regionLine: "Kolkata, West Bengal 700016",
    country: "India",
    mapQuery: "Park Street, Kolkata, West Bengal, India",
  },
] as const;

export const contactDetails = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "contact@loremadvocates.com",
  website: "www.loremadvocates.com",
  websiteHref: "https://www.loremadvocates.com",
} as const;
