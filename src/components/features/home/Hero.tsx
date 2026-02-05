import PrescriptionIcon from "@/components/icons/PrescriptionIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import StarIcon from "@/components/icons/StarIcon";
import CertificateIcon from "@/components/icons/CertificateIcon";
import DeliveryIcon from "@/components/icons/DeliveryIcon";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[#121B3C] font-extrabold leading-[1.1] text-[34px] sm:text-[44px] lg:text-[56px]">
              Your Trusted Online <br />
              Pharmacy for Every <br />
              Need
            </h1>

            <p className="text-[#5F85DB] leading-[1.5] text-[18px] sm:text-[20px] lg:text-[24px] max-w-[560px]">
              Order medicines, consult doctors online, and get doorstep
              delivery within 24 hours.
            </p>

            {/* Action cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-3 bg-[#EBEDF7] border border-black/10 rounded-2xl px-4 py-3 w-full sm:w-[290px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <PrescriptionIcon className="w-[18px] h-[24px] text-[#334EAC]" />
                </div>
                <div className="text-[#1F2F67] font-semibold text-[18px]">
                  Orders by <br /> prescriptions
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#EBEDF7] border border-black/10 rounded-2xl px-4 py-3 w-full sm:w-[290px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <DeliveryIcon className="w-[32px] h-[32px] text-[#334EAC]" />
                </div>
                <div className="text-[#1F2F67] font-semibold text-[18px]">
                  Delivery to your <br /> location
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/images/hero-doctor.png"
              alt="Doctor"
              className="w-full max-w-[640px]"
            />

            {/* Desktop floating cards */}
            <div className="hidden sm:block">
              {/* +2.5M card */}
              <div
                className="absolute top-[90px] left-[40px] lg:left-[120px]
                  w-[227px] h-[109px]
                  rotate-[-17.5deg]
                  rounded-[32px]
                  bg-[#334EAC]
                  shadow-[0_2px_10px_rgba(0,0,0,0.15)]
                  [box-shadow:0_2px_10px_rgba(0,0,0,0.15),inset_0_4px_4px_rgba(0,0,0,0.15)]
                  px-6 py-5 flex flex-col justify-center gap-4
                "
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="text-white font-black text-[20px] leading-none">
                    +2.5M
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                    <UsersIcon className="w-6 h-6 text-[#334EAC]" />
                  </div>
                </div>

                {/* Bottom text */}
                <div className="flex items-center gap-2 text-white font-extrabold text-[16px] leading-none">
                  <span className="w-[6px] h-[6px] rounded-full bg-white" />
                  Happy Users
                </div>
              </div>


              {/* 99% card */}
              <div
                className="absolute top-[40px] right-[10px] rotate-[4deg]
                w-[223px] h-[116px]
                rounded-[32px]
                border border-[#334EAC]
                bg-white/25
                backdrop-blur-[0.2px]
                backdrop-saturate-[160%]
                shadow-[0_2px_19px_rgba(0,0,0,0.15),0_4px_4px_rgba(0,0,0,0.15)_inset]
                px-6 py-5 flex flex-col justify-center gap-4
              "
              >
                <div className="flex items-center justify-between">
                  <div className="text-[#293E8A] font-black text-[16px]">
                    99%
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#2E469B] flex items-center justify-center">
                    <StarIcon className="w-4 h-4 text-[#FFBB00]" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#334EAC] font-extrabold text-[14px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#334EAC]" />
                  Satisfying Treatment
                </div>
              </div>



                {/* 100% Pharmacist card */}
              <div
                className="
                  absolute bottom-[10px] right-[30px]
                  rotate-[5deg]
                  w-[290px] h-[155px]
                  rounded-[32px]
                  bg-[#F4F6FD]
                  shadow-[0_2px_10px_rgba(0,0,0,0.15)_inset,0_4px_4px_rgba(0,0,0,0.15)]
                  px-6 py-5
                  flex flex-col justify-center gap-6
                "
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="text-[#2E469B] font-black text-[32px] leading-none">
                    100%
                  </div>

                  {/* Icon circle */}
                  <div className="w-[64px] h-[64px] rounded-full bg-[#DCE2F5] flex items-center justify-center shrink-0">
                    <CertificateIcon className="w-6 h-6 text-[#F4F6FD]" />
                  </div>
                </div>

                {/* Text Row */}
                <div className="flex items-center gap-2 text-[#2E469B] font-extrabold text-[20px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#2E469B]" />
                  Pharmacist Certified
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
