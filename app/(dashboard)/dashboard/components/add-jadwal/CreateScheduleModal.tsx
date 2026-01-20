"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CreateScheduleModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose} // klik backdrop nutup
    >
      <div
        className="bg-white rounded-xl p-4 min-w-[360px]"
        onClick={(e) => e.stopPropagation()} // klik dalam modal gak nutup
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-black">Buat Jadwal</h2>
          <button className="text-black cursor-pointer" type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="space-y-3">
          <input
            className="w-full rounded outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Nama jadwal"
          />
          <input
            className="w-full rounded outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Hari Absensi"
          />
          <input
            className="w-full rounded outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Tingkat Kelas"
          />
          <input
            type="date"
            className="w-full rounded outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Tanggal Abseni"
          />
          <input
            type="time"
            className="w-full rounded outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
            placeholder="Toleransi Keterlambatan"
          />
          <button className="w-full border rounded p-2 text-blue-500 font-medium hover:underline" type="submit">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
