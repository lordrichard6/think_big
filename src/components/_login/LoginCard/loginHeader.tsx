
export default function LoginCardHeader() {
    return (
        <div className="w-full text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-6">LogIn to Think Big</h1>
            <div className="flex justify-center text-slate-100">
                <p>Don't have an account?</p><a className="ml-4 font-black text-primary-color lg:text-secondary-color" href="/">Sign up</a>
            </div>
        </div>
    );
}