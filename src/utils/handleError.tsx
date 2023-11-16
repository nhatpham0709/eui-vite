import toast from 'react-hot-toast'

export const handleError = (e: any) => {
  const error = e.response?.data?.meta?.message || e.message || 'Đã có lỗi xảy ra'
  toast.error(error)
}
