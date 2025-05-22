// This code lives in the file app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border rounded px-3 py-2 h-32" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
