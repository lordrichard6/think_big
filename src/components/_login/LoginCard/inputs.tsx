export default function LoginInputs() {
    return (
        <div className="flex flex-col w-full lg:w-2/3 px-8">
            <input className="my-2 py-4 px-4 rounded-xl opacity-50" type="text" placeholder='Name' />
            <input className="my-2 py-4 px-4 rounded-xl opacity-50" type="email" placeholder='Email' />
            <input className="my-2 py-4 px-4 rounded-xl opacity-50" type="password" placeholder='Password' />
            <button className="rounded-xl bg-slate-100 font-bold py-4 my-2">Continue</button>
        </div>
    );
}