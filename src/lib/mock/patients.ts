import type { BadgeVariant } from "@/components/admin/shared";

/* ==================================================================
   SHARED PATIENT MOCK DATA
   Single source of truth consumed by both:
     - /admin/patients        (list / table)
     - /admin/patients/[id]   (detail page)
   ================================================================== */

export interface MockPatient {
  /** Clean id used in URLs and display (shown as #P0001) */
  id: string;
  name: string;
  phone: string;
  phonePrefix: string;
  phoneNumber: string;
  location: string;
  address: string;
  email: string;
  avatar: string;
  lastVisit: string;
  lastVisitTime: string;
  totalSpent: string;
  status: BadgeVariant;
  age: number;
  gender: string;
  birthday: string;
  registeredOn: string;
  lastUpdated: string;
}

export const patients: MockPatient[] = [
  {
    id: "P0001",
    name: "Mohammed B. K. Alfarra",
    phone: "(+970) 59-244-9634",
    phonePrefix: "+970",
    phoneNumber: "59-244-9634",
    location: "Gaza",
    address: "Gaza city, Al Rimal area",
    email: "mohammed@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "12, Mar, 2026",
    lastVisitTime: "At 11:34pm",
    totalSpent: "302.12$",
    status: "active",
    age: 24,
    gender: "Male",
    birthday: "20 - April - 2002",
    registeredOn: "2020-03-10",
    lastUpdated: "2026-03-12",
  },
  {
    id: "P0002",
    name: "Sarah Al-Masri",
    phone: "(+970) 59-111-2233",
    phonePrefix: "+970",
    phoneNumber: "59-111-2233",
    location: "Gaza",
    address: "Gaza city, Al Shuja'iyya",
    email: "sarah.m@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "10, Mar, 2026",
    lastVisitTime: "At 09:15am",
    totalSpent: "185.50$",
    status: "unactive",
    age: 30,
    gender: "Female",
    birthday: "15 - June - 1996",
    registeredOn: "2021-07-22",
    lastUpdated: "2026-03-10",
  },
  {
    id: "P0003",
    name: "Ahmed K. Hassan",
    phone: "(+970) 59-333-4455",
    phonePrefix: "+970",
    phoneNumber: "59-333-4455",
    location: "Khan Yunis",
    address: "Khan Yunis, Al Amal area",
    email: "ahmed.h@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "08, Mar, 2026",
    lastVisitTime: "At 02:45pm",
    totalSpent: "420.00$",
    status: "active",
    age: 35,
    gender: "Male",
    birthday: "03 - January - 1991",
    registeredOn: "2019-11-15",
    lastUpdated: "2026-03-08",
  },
  {
    id: "P0004",
    name: "Fatima A. Nasser",
    phone: "(+970) 59-555-6677",
    phonePrefix: "+970",
    phoneNumber: "59-555-6677",
    location: "Rafah",
    address: "Rafah, Tel Al-Sultan",
    email: "fatima.n@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "05, Mar, 2026",
    lastVisitTime: "At 12:00pm",
    totalSpent: "90.25$",
    status: "active",
    age: 28,
    gender: "Female",
    birthday: "11 - September - 1998",
    registeredOn: "2022-01-05",
    lastUpdated: "2026-03-05",
  },
  {
    id: "P0005",
    name: "Omar R. Saleh",
    phone: "(+970) 59-777-8899",
    phonePrefix: "+970",
    phoneNumber: "59-777-8899",
    location: "Gaza",
    address: "Gaza city, Sheikh Radwan",
    email: "omar.s@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "03, Mar, 2026",
    lastVisitTime: "At 04:20pm",
    totalSpent: "567.80$",
    status: "active",
    age: 42,
    gender: "Male",
    birthday: "25 - December - 1983",
    registeredOn: "2020-06-18",
    lastUpdated: "2026-03-03",
  },
  {
    id: "P0006",
    name: "Layla M. Jabr",
    phone: "(+970) 59-222-3344",
    phonePrefix: "+970",
    phoneNumber: "59-222-3344",
    location: "Deir al-Balah",
    address: "Deir al-Balah, Central district",
    email: "layla.j@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "01, Mar, 2026",
    lastVisitTime: "At 10:10am",
    totalSpent: "215.40$",
    status: "active",
    age: 26,
    gender: "Female",
    birthday: "07 - March - 2000",
    registeredOn: "2023-02-14",
    lastUpdated: "2026-03-01",
  },
  {
    id: "P0007",
    name: "Yusuf T. Abed",
    phone: "(+970) 59-444-5566",
    phonePrefix: "+970",
    phoneNumber: "59-444-5566",
    location: "Gaza",
    address: "Gaza city, Al Zeitoun",
    email: "yusuf.a@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "28, Feb, 2026",
    lastVisitTime: "At 06:30pm",
    totalSpent: "130.00$",
    status: "active",
    age: 19,
    gender: "Male",
    birthday: "30 - August - 2006",
    registeredOn: "2024-09-01",
    lastUpdated: "2026-02-28",
  },
  {
    id: "P0008",
    name: "Nadia S. Qassem",
    phone: "(+970) 59-666-7788",
    phonePrefix: "+970",
    phoneNumber: "59-666-7788",
    location: "Khan Yunis",
    address: "Khan Yunis, Al Nasser area",
    email: "nadia.q@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "25, Feb, 2026",
    lastVisitTime: "At 11:00am",
    totalSpent: "345.90$",
    status: "active",
    age: 33,
    gender: "Female",
    birthday: "19 - November - 1992",
    registeredOn: "2021-04-10",
    lastUpdated: "2026-02-25",
  },
  {
    id: "P0009",
    name: "Khaled W. Barakat",
    phone: "(+970) 59-888-9900",
    phonePrefix: "+970",
    phoneNumber: "59-888-9900",
    location: "Gaza",
    address: "Gaza city, Al Nasr",
    email: "khaled.b@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "22, Feb, 2026",
    lastVisitTime: "At 03:15pm",
    totalSpent: "78.60$",
    status: "active",
    age: 50,
    gender: "Male",
    birthday: "14 - February - 1976",
    registeredOn: "2020-01-20",
    lastUpdated: "2026-02-22",
  },
  {
    id: "P0010",
    name: "Hana Z. Othman",
    phone: "(+970) 59-999-0011",
    phonePrefix: "+970",
    phoneNumber: "59-999-0011",
    location: "Rafah",
    address: "Rafah, Yibna camp",
    email: "hana.o@gmail.com",
    avatar: "/avatar.png",
    lastVisit: "20, Feb, 2026",
    lastVisitTime: "At 08:45am",
    totalSpent: "260.75$",
    status: "active",
    age: 22,
    gender: "Female",
    birthday: "02 - July - 2003",
    registeredOn: "2023-08-30",
    lastUpdated: "2026-02-20",
  },
];

/** Look up a patient by clean ID (e.g. "P0001") */
export function getPatientById(id: string): MockPatient | undefined {
  return patients.find((p) => p.id === id);
}
