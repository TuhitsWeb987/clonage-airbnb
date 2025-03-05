import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children, user }: { children: React.ReactNode, user: any }) {
    return user ? children : <Navigate to="/auth" />;
}