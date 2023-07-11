export default function Page() {
  return (
    <div>
      <div className="p-6 max-w-lg max-h-24 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <img src="/" className="h-12 w-12 rounded overflow-hidden shrink-0" />
        <div className="overflow-hidden">
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500 line-clamp-2 ">
            You have a new message! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex w-10 h-8 border mt-2 mx-auto">
        <div className="w-5 shrink-0  bg-red-200"></div>
        <div className="w-5 bg-green-200"></div>
        <div className="w-5 bg-orange-200"></div>
      </div>
      <div className="border">
        <span className="inline-block max-w-lg bg-red-200 align-top">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est,
          illum quasi vel architecto temporibus, voluptas ipsam expedita eos,
          asperiores neque debitis cumque sapiente quaerat aut? Quisquam tenetur
          odit pariatur!
        </span>
        <span className="inline-block max-w-sm bg-green-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est,
          illum quasi vel architecto temporibus, voluptas ipsam expedita eos,
          asperiores neque debitis cumque sapiente quaerat aut? Quisquam tenetur
          odit pariatur!
        </span>
      </div>
    </div>
  );
}
