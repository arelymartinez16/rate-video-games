import { SignupForm } from "../ui/SignUpForm";

export default function SignupPage() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState(null);
    // const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        // const hashedPassword = await bcrypt.hash(password, 10);

        // const { data, error } = await supabase
        //     .from("users")
        //     .insert([{ name, email, password: hashedPassword }]);

        // if (error) {
        //     setError("Error signing up: " + error.message);
        //     return;
        // }

        // router.push("/login");
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            {/* <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to Game Insider</h1>
                <p className="text-lg mt-4">
                We're thankful that you're considering us to be the best source for game reviews.
                </p>
            </header> */}
            <SignupForm />
            {/* <form onSubmit={handleSignup} className="space-y-4">
                <h1 className="text-2xl font-bold">Sign Up</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm" 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm" 
                    />
                </div>
                <Button type="submit" className="w-full">
                    Sign Up
                </Button>
            </form> */}
        </div>
    )
}