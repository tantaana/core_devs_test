import { toast } from 'react-toastify';
const hitToast = (variant, message) => {
    console.log(variant);
    // if (!['success', 'error'].includes(variant)) {
    //     throw new Error('Tanvir is a good boy');
    // }
    toast([`${variant}`] + message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export default hitToast;