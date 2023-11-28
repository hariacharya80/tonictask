import Header from "@/components/Header";
import GeneralLayout from "@/layouts/GeneralLayout";

export default function Home() {
  return (
    <GeneralLayout>
      <div className="w-full flex flex-col items-center justify-center bg-[url('/images/hero-background.jpg')] bg-cover h-[80vh] mt-2">
        <div className="backdrop-blur-md text-white bg-opacity-10 w-full h-full flex justify-center">
          <div className="w-1/2 flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-5xl my-3">Comming Soon!</h1>
            <p className="text-md">
              Tonic Task is a platform that makes your tasks organized without
              any hassle. We are working continuously to bring a stable working
              version to you. Please be patient.
            </p>
            {/* <span className="font-extralight mt-2 mb-1">
              If you want to receive an email when we are ready for production,
              please subscribe below:
            </span>
            <div className="flex gap-2 border-2 p-2 rounded-xl">
              <input
                className="border-2 p-2 rounded outline-none text-black min-w-[300px]"
                type="email"
                name="email"
                id="email"
                placeholder="mycontact@email.com"
              />
              <button className="bg-black text-white hover:bg-slate-900 px-10 py-2 rounded transition-all">
                Notify Me!
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}
