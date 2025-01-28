import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="flex max-w-[320px] flex-col items-center justify-center rounded-[20px] text-center">
        <div className="mb-10 mt-4 px-4">
          <div>
            <Image
              src="/images/image-qr-code.png"
              alt="QR Code"
              width={288}
              height={288}
              className="rounded-[10px]"
            />
          </div>
          <div className="mx-4 mt-6">
            <CardTitle className="text-[22px] font-bold leading-[1.2] text-slate-900">
              Improve your front-end skills by building projects
            </CardTitle>
            <CardDescription className="mt-4 text-[15px] leading-[1.4] tracking-[0.2px] text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </CardDescription>
          </div>
        </div>
      </Card>
    </main>
  );
}
