import { InventoryItem, OrderRow } from "@/types/pharmacyTypes";

export const inventoryData: InventoryItem[] = [
  {
    id: "P0001",
    medicineName: "Paracetamol",
    brand: "GSK",
    manufacturer: "GlaxoSmithKline",
    category: "pain_relief",

    stock: 30,
    minStock: 10,
    status: "in",

    batchNumber: "PAC-2024-01",
    expiryDate: "2026-02-08",
    prescriptionRequired: false,

    purchasePrice: 1.5,
    sellingPrice: 2.0,

    imageUrl: "/panadol.png",
    usageNotes: [
      "One tablet every 4–6 hours",
      "Do not exceed 4 tablets in 24 hours",
      "Store at room temperature",
      "Away from moisture and heat",
      "Keep container tightly closed",
      "Keep out of reach of children",
    ],
  },

  {
    id: "P0003",
    medicineName: "Aspirin",
    brand: "Bayer",
    manufacturer: "Bayer",
    category: "pain_relief",

    stock: 12,
    minStock: 10,
    status: "low",

    batchNumber: "ASP-2024-02",
    expiryDate: "2027-12-15",
    prescriptionRequired: false,

    purchasePrice: 1.2,
    sellingPrice: 1.8,

    imageUrl: "/aspirin.png",
    usageNotes: [
      "Take with food to avoid stomach upset",
      "Do not exceed recommended dose",
      "Store in a cool, dry place",
    ],
  },
  {
    id: "P0002",
    medicineName: "Panadol 500mg",
    brand: "Bayer",
    manufacturer: "Bayer",
    category: "pain_relief",

    stock: 12,
    minStock: 10,
    status: "low",

    batchNumber: "PAN-2025-06",
    expiryDate: "2026-02-15",
    prescriptionRequired: false,

    purchasePrice: 1.2,
    sellingPrice: 1.8,

    imageUrl: "/aspirin.png",
    usageNotes: [
      "Take with food to avoid stomach upset",
      "Do not exceed recommended dose",
      "Store in a cool, dry place",
    ],
  },
];

export const ORDERS: OrderRow[] = [
  {
    id: "O0001",
    inventoryId: "P0001",
    customer: "Eman Mohammad",
    medicine: "Panadol 500mg",
    total: "23.00$",
    date: "24 June",
    status: "Delivered",
  },
  {
    id: "O0002",
    inventoryId: "P0001",
    customer: "Eman Mohammad",
    medicine: "Panadol 500mg",
    total: "23.00$",
    date: "24 June",
    status: "Delivered",
  },
];
