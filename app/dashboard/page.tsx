export default function Dashboard() {
    return (
        <main>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl shadow">
                    <h3>Users</h3>
                    <p className="text-2xl">1200</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow">
                    <h3>Revenue</h3>
                    <p className="text-2xl">$8,400</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow">
                    <h3>Orders</h3>
                    <p className="text-2xl">320</p>
                </div>
            </div>

            <div className="bg-white mt-8 p-5 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-3">Main Content</h2>
                <p>This is your dashboard content area.</p>
            </div>

        </main>
    )
}