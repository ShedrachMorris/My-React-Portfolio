import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9baf501a-207b-4c7e-8210-6e7ccfaff80c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap flex-row justify-center items-center min-[320px]:flex min-[320px]:items-center min-[320px]:mr-36">
        <div className="m-10">
          <form onSubmit={onSubmit}>
            <div className="min-[320px]:mr-32">
            <input
              type="text"
              name="NAME"
              required
              placeholder="YOUR NAME"
              className="flex m-5 size-2/4 rounded-md ml-32 h-10 text-center
               bg-slate-300 min-[320px]:size-11/12 "
            />
            <input
              type="email"
              name="email"
              required
              placeholder="YOUR EMAIL"
              className="flex m-5 size-2/4 rounded-md ml-32 h-10 text-center
               bg-slate-300 min-[320px]:size-11/12 "
            />
            <input
              type="text"
              name="text"
              required
              placeholder="ENTER SUBJECT"
              className="flex m-5 size-2/4 rounded-md ml-32 h-10 text-center
               bg-slate-300 min-[320px]:size-11/12 "
            />
            </div>
           

            <textarea
              name="message"
              id=""
              required
              cols="15"
              rows="8"
              placeholder="Message Here..."
              className="flex m-5 size-5/6 rounded-md bg-slate-300 min-[320px]:w-full min-[320px]:ml-11"
            ></textarea>

            <button
              type="submit"
              className="m-5 rounded-md border size-2/12 h-11 bg-orange-400 hover:bg-gradient-to-r from-orange-500 to-blue-400
               flex justify-center ml-11 min-[320px]:size-1/4"
            >
              <span className="text-center m-2">SUBMIT</span>
            </button>
          </form>
        </div>
      </div>
      <span>{result}</span>
    </div>
  );
}
