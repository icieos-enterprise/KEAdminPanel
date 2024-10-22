import { toast } from 'react-toastify';

const showToast = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        style: { fontSize: '14px', color: 'white', backgroundColor: "#240103" }
      });
      break;
    case 'error':
      toast.error(message, {
        style: { fontSize: '14px', color: 'white', backgroundColor: "#240103"}
      });
      break;
    case 'info':
      toast.info(message,{
        style: { fontSize: '14px', color: 'white', backgroundColor: "#240103" }
      });
      break;
    case 'warning':
      toast.warning(message, {
        style: { fontSize: '14px', color: 'white', backgroundColor: "#240103" },
      });
      break;
    default:
      toast(message, {
        style: { fontSize: '14px', color: 'white', backgroundColor: "#240103" },
      });
      break;
  }
};

export default showToast;
