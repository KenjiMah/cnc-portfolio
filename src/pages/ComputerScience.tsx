import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";

// --- MAIN PAGE COMPONENT ---
// This page redirects to the resume section by default
export function ComputerScience() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${ROUTES.COMPUTERSCIENCE_RESUME}`, { replace: true });
  }, [navigate]);

  return (
    <div className="text-left grid col-6 max-w-6xl mx-auto min-w-0 pt-6 pb-24">
      <div className="col-start-2 col-span-4 bg-black min-w-0">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-zinc-400 text-lg">Redirecting...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
