export function LeftSide() {
  return (
    <div className="relative  hidden w-1/2 items-center justify-center bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-700 lg:flex overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-2xl"></div>

      <div className="z-10 text-center px-8">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          خوش آمدید
        </h1>
        <p className="mt-4 text-lg text-cyan-100">
          خوش آمد گویی صدرا کرمی را بپذیرید
        </p>
      </div>
    </div>
  );
}
