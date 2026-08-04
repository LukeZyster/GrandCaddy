import { Eye } from "lucide-react";

export default function PasswordInput() {
  return (
    <div className="space-y-2">

      <label className="font-semibold text-sm">
        Password
      </label>

      <div
        className="
          flex
          items-center
          rounded-full
          border
          border-gray-200
          bg-white
          px-5
          py-4
        "
      >
        <input
          type="password"
          placeholder="********"
          className="flex-1 outline-none bg-transparent"
        />

        <Eye
          size={18}
          className="text-gray-400"
        />

      </div>

    </div>
  );
}