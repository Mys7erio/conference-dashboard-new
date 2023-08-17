import {
    FaBuilding,
    FaUserPlus,
    FaUserCheck,
} from "react-icons/fa"


// Add Role and Routes to this object
// Format => Role : path


const AppRoutes = {
    Admin: '/admin',
    Editor: '/editor',
    Author: '/author',
    Reviewer: '/reviewer',
    SuperAdmin: '/super-admin',
    Coordinator: '/coordinator',
    AssociateEditor: '/associate-editor',
}



const SuperAdminRoutes = [
    {
        name: 'Create Institutions',
        path: 'create-institute',
        icon: FaBuilding,
    },
    {
        name: 'Add Admin',
        path: 'add-admin',
        icon: FaUserPlus,
    },
    {
        name: 'Assign Admin',
        path: 'assign-admin',
        icon: FaUserCheck,
    },
]

export default AppRoutes
export { SuperAdminRoutes }