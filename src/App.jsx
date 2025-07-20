import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendCode = () => {
    if (mobile.length === 11) {
      setStep(2);
    } else {
      alert("شماره موبایل معتبر وارد کنید");
    }
  };

  const handleVerifyCode = () => {
    if (code === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("کد تایید اشتباه است");
    }
  };

  const handleLogout = () => {
    setMobile("");
    setCode("");
    setStep(1);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-right">
        <h1 className="text-2xl font-bold mb-4">داشبورد نوین مارکت</h1>
        <ul className="w-full max-w-sm space-y-2">
          <li className="bg-white p-4 rounded-2xl shadow">کیف پول من</li>
          <li className="bg-white p-4 rounded-2xl shadow">گزارش خریدها</li>
          <li className="bg-white p-4 rounded-2xl shadow">بازپرداخت اقساط</li>
          <li className="bg-white p-4 rounded-2xl shadow text-red-600" onClick={handleLogout}>خروج</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4 text-right">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-bold">{step === 1 ? "ورود به نوین مارکت" : "کد تایید را وارد کنید"}</h1>

        {step === 1 ? (
          <>
            <Input
              type="tel"
              placeholder="شماره موبایل خود را وارد کنید"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="text-right"
            />
            <Button className="w-full" onClick={handleSendCode}>
              تایید و ادامه
            </Button>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="کد تایید پیامک شده را وارد کنید"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-right"
            />
            <Button className="w-full" onClick={handleVerifyCode}>
              ورود به داشبورد
            </Button>
          </>
        )}
      </div>
    </div>
  );
}