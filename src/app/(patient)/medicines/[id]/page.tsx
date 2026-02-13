"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { inventoryData } from "@/services/pharmacyData";
import { NEARBY_PHARMACIES } from "@/services/nearbypharmacies.data";
import { InventoryItem, Pharmacy } from "@/types/pharmacyTypes";

export default function MedicineDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const medicineId = params?.id as string;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const medicine = inventoryData.find((m) => m.id === medicineId);

  if (!medicine) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Medicine not found
          </h2>
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  const images = [
    medicine.imageUrl || "/placeholder-medicine.png",
    medicine.imageUrl || "/placeholder-medicine.png",
    medicine.imageUrl || "/placeholder-medicine.png",
  ];

  const originalPrice = medicine.sellingPrice;
  const discountedPrice = originalPrice * 0.8;
  const hasDiscount = medicine.stock > 20;

  const similarMedicines = inventoryData
    .filter((m) => m.category === medicine.category && m.id !== medicine.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    console.log("Adding to cart:", { medicine, quantity });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: medicine.medicineName,
        text: `Check out ${medicine.medicineName}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                {images[selectedImage] ? (
                  <Image
                    src={images[selectedImage]}
                    alt={medicine.medicineName}
                    fill
                    className="object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {img ? (
                      <Image
                        src={img}
                        alt={`${medicine.medicineName} ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                  {medicine.medicineName}
                </h1>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    $
                    {hasDiscount
                      ? discountedPrice.toFixed(2)
                      : originalPrice.toFixed(2)}
                  </span>
                  {hasDiscount && (
                    <span className="text-xl text-gray-400 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {medicine.prescriptionRequired && (
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Prescription required upon checkout
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-semibold text-base transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
                <button
                  onClick={handleShare}
                  className="px-6 py-3.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <NearbyPharmaciesSection />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
          <InfoSection
            title="Description"
            content="Recommended to help relieve pain associated with: Headaches Dental pain Backache Muscle pain Osteoarthritis Rheumatic Pain Period Extra can also be used to relieve fever and aches and pains associated with colds and flu. Contains Paracetamol 500mg and Caffeine 65mg to boost the pain relieving action of Paracetamol. Formulated to be absorbed up to twice as fast as standard Paracetamol for even faster pain relief. Panadol Extra is gentle on your stomach and is suitable for those with a sensitive stomach or stomach disorders."
          />

          <InfoSection
            title="Directions For Use"
            content={`Adults and children over 12 years of age:
Take 2 tablets every 4 hours as needed.
Do not take more frequently than every 4 hours.
Do not take more than 8 tablets in 24 hours.`}
          />

          <InfoSection
            title="Active Ingredients"
            content={`Each tablet contains:
Paracetamol 500mg
Caffeine 65mg`}
          />

          <InfoSection
            title="Warnings"
            content={`Keep out of reach and sight of children.
Please read the accompanying instructions carefully before using this product.
Only use this product as intended. In the event of misuse, seek medical advice.
Do not exceed the recommended dose. Please seek medical attention if you take too many tablets even if you feel well.`}
          />

          <InfoSection title="Storage" content="Store below 25°C" isLast />
        </div>

        <SimilarProductsSection medicines={similarMedicines} />
      </div>
    </div>
  );
}

function NearbyPharmaciesSection() {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/pharmacies");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Nearby Pharmacies</h2>
        <button
          onClick={handleSeeAll}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
        >
          See all
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto -mx-2 px-2">
        <div className="flex gap-4 pb-2">
          {NEARBY_PHARMACIES.slice(0, 4).map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PharmacyCardProps {
  pharmacy: Pharmacy;
}

function PharmacyCard({ pharmacy }: PharmacyCardProps) {
  const router = useRouter();

  const handleViewPharmacy = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/pharmacies/${pharmacy.id}`);
  };

  const handleCardClick = () => {
    router.push(`/pharmacies/${pharmacy.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex-shrink-0 w-64 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
            {pharmacy.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">{pharmacy.distance}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <svg
              className="w-3.5 h-3.5 text-yellow-400 fill-current flex-shrink-0"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium text-gray-700">{pharmacy.rating}</span>
            <span className="text-gray-500">
              ({pharmacy.reviewCount}+ Rating)
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-green-600 font-medium">
          Delivery fee ${pharmacy.deliveryFee}
        </span>
        <button
          onClick={handleViewPharmacy}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View
        </button>
      </div>
    </div>
  );
}

interface InfoSectionProps {
  title: string;
  content: string;
  isLast?: boolean;
}

function InfoSection({ title, content, isLast = false }: InfoSectionProps) {
  return (
    <div className={!isLast ? "mb-8 pb-8 border-b border-gray-200" : ""}>
      <div className="flex items-start gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line pl-4">
        {content}
      </p>
    </div>
  );
}

interface SimilarProductsSectionProps {
  medicines: InventoryItem[];
}

function SimilarProductsSection({ medicines }: SimilarProductsSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <div className="flex items-start gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
        <h2 className="text-xl font-bold text-gray-900">Similar</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {medicines.map((medicine) => (
          <SimilarMedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

interface SimilarMedicineCardProps {
  medicine: InventoryItem;
}

function SimilarMedicineCard({ medicine }: SimilarMedicineCardProps) {
  const hasDiscount = medicine.stock > 20;

  return (
    <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer relative">
      <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-50 transition-colors z-10">
        <svg
          className="w-4 h-4 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="relative w-full aspect-square mb-3 bg-white rounded-lg flex items-center justify-center">
        {medicine.imageUrl ? (
          <Image
            src={medicine.imageUrl}
            alt={medicine.medicineName}
            fill
            className="object-contain p-2"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {medicine.medicineName}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-gray-900">
            $
            {hasDiscount
              ? (medicine.sellingPrice * 0.8).toFixed(2)
              : medicine.sellingPrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-gray-400 line-through">
              ${medicine.sellingPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
          Add to cart
        </button>
      </div>
    </div>
  );
}
