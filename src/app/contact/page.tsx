   

   export default function ContactPage() {
    return (
       
       <div>
           
           <main className="py-14">
  <div className="max-w-screen-xl mx-auto px-4 text-gray-200 md:px-8">
    <div className="max-w-lg mx-auto space-y-3 sm:text-center">
      <h3 className="text-white font-semibold">Contact</h3>
      <p className="text-black text-3xl font-semibold sm:text-4xl">
        Get in touch
      </p>
      <p>We’d love to hear from you! Please fill out the form bellow.</p>
    </div>
    <div className="mt-12 max-w-lg mx-auto">
      <form  className="space-y-5">
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
          <div>
            <label className="font-medium text-white">First name</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-white shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium text-white">Last name</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-white shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-white">Email</label>
          <input
            type="email"
            required
            className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-white shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium text-white">Phone number</label>
          <div className="relative mt-2">
            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
              <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                <option>Pk</option>
                <option>us</option>
                <option>inr</option>
              </select>
            </div>
            <input
              type="number"
              placeholder="+1 (555) 000-000"
              required
              className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:bg-white shadow-sm rounded-lg"
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-white">Message</label>
          <textarea
            required
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-white shadow-sm rounded-lg text-gray-300"
            defaultValue={""}
          />
        </div>
        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-600 active:bg-indigo-600 rounded-lg duration-150">
          Submit
        </button>
      </form>
    </div>
  </div>
</main>


       </div>
    )
}