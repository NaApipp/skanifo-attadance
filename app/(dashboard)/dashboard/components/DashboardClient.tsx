"use client";

import { useState } from "react";
// Add Schedule
import Modal from "./add-jadwal/modal";
import CreateScheduleCard from "./add-jadwal/CreateScheduleCard";
import CreateScheduleModal from "./add-jadwal/CreateScheduleModal";

// Add User
import ChooseUserDialog from "./add-user/ChooseUserDialog";
import SiswaForm from "./add-user/siswaForm";
import AdminForm from "./add-user/adminForm";

// Variable for Form Add User
type Step = "closed" | "choose" | "form-siswa" | "form-admin";
type UserType = "siswa" | "admin";

export default async function DashboardClient({ user }: { user: any }) {


  // Add User Function & Modal
  const [step, setStep] = useState<Step>("closed");

  const openChoose = () => setStep("choose");
  const closeAll = () => setStep("closed");
  const backToChoose = () => setStep("choose");
  
  const goForm = (type: UserType) => {
    setStep(type === "siswa" ? "form-siswa" : "form-admin");
  };

  const isOpen = step !== "closed";
  const title =
    step === "choose"
      ? "Pilih user untuk ditambahkan:"
      : step === "form-admin"
        ? "Form Tambah Admin"
        : "Form Tambah Siswa";

  return (
    <>
      <div className="flex flex-col">
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-6 gap-3">
          {/* Tittle */}
          <div className="flex items-center">
            <h1 className="text-[#39568E] font-poppins font-bold text-3xl">
              Dashboard Skanifo Attadance
            </h1>
          </div>
          {/* Buat Jadwal */}
          <div className="justify-self-end">
            <CreateScheduleCard />
          </div>

          {/* Add User */}
          <>
            <button onClick={openChoose}>
              <div className="box-dashboard" id="buat_jadwal">
                <svg
                  className="w-10 h-10 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Add user</p>
              </div>
            </button>

            <Modal open={isOpen} title={title} onClose={closeAll}>
              {step === "choose" && <ChooseUserDialog onPick={goForm} />}

              {/* Form Siswa */}
              {step === "form-siswa" && (
                <SiswaForm
                  onBack={backToChoose}
                  onSubmit={(data) => {
                    console.log("SUBMIT SISWA:", data);
                    alert();
                    //   `Siswa tersimpan:\nNama: ${data.nama}\nNIS: ${data.nis}`,
                    closeAll();
                  }}
                />
              )}

              {/* Form Admin */}
              {step === "form-admin" && (
                <AdminForm
                  onBack={backToChoose}
                  onSubmit={(data) => {
                    console.log("SUBMIT ADMIN:", data);
                    alert();
                    //   `Admin tersimpan:\nEmail: ${data.email}\nRole: ${data.role}`,
                    closeAll();
                  }}
                />
              )}
            </Modal>
          </>
        </div>
      </div>
    </>
  );
}
