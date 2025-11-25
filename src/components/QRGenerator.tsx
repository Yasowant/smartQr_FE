import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = () => {
  const url = "https://smart-qr-fe.vercel.app/";

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0A0F1F] via-[#111827] to-[#1E293B] flex flex-col justify-center items-center px-6">
      {/* Tag badge */}
      <span className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full mb-4 border border-blue-500/20">
        SmartQR — Secure Emergency Access
      </span>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 leading-tight">
        Scan to Access
        <br />
        Emergency Services
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-center max-w-lg text-sm md:text-base mb-6">
        Instantly connect to 11+ lifesaving services — anytime, anywhere — with
        a single scan.
      </p>

      {/* QR Code */}
      <div className="p-4 bg-white rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] mb-4">
        <QRCodeCanvas value={url} size={200} level={"H"} includeMargin={true} />
      </div>

      {/* URL text */}
      <p className="text-gray-400 text-xs text-center select-all">{url}</p>

      {/* Button */}
      <a
        href={url}
        className="mt-6 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-lg transition"
      >
        Open SmartQR App
      </a>
    </div>
  );
};

export default QRGenerator;
