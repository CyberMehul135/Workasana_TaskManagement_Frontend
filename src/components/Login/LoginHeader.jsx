export default function LoginHeader({ heading, subHeading, icon: Icon }) {
  return (
    <header className="flex flex-col items-center mb-8">
      {<Icon className="w-28" />}
      <h1 className="text-2xl font-bold text-text-black">{heading}</h1>
      <p className="text-[15px] text-text-primary mt-2">{subHeading}</p>
    </header>
  );
}
