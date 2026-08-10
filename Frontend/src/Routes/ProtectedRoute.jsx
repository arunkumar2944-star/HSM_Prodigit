// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, allowedRoles }) {

//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user"));

//     console.log("Protected Route");
//     console.log("Token:", token);
//     console.log("User:", user);

//     if (!token || !user) {
//         return <Navigate to="/login" />;
//     }


//     // handle both formats
//     const role = (
//         user.role ||
//         user.Role ||
//         ""
//     ).toLowerCase();


//     console.log("Role:", role);


//     if (
//         allowedRoles &&
//         !allowedRoles.includes(role)
//     ) {
//         return <Navigate to="/login" />;
//     }


//     return children;
// }


// export default ProtectedRoute;