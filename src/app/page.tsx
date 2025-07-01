export default function SubPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 p-8 text-center">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">Sub App</h1>
      <p className="text-lg text-purple-900 mb-6">This is the sub application</p>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="px-6 py-3 bg-purple-700 text-white rounded-xl shadow hover:bg-purple-800 transition">
        Back to Main App
      </a>
    </main>
  );
}
