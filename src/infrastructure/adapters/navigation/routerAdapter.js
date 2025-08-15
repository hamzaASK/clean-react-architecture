// infrastructure/adapters/navigation/routerAdapter.js
import {
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

// Adapter pour l’abstraction du routeur
export const useRouter = () => {
  return {
    navigate: useNavigate(),
    location: useLocation(),
    params: useParams(),
  };
};
