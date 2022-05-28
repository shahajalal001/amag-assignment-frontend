import Swal from "sweetalert2"

const swalAlert = {
    success: async (message: string) => {
        await Swal.fire({
            title: "Success",
            html: message,
            icon: 'success',
            timer: 1500
        })
    },
    error: async (message: string) => {
        await Swal.fire({
            title: "Error",
            html: message,
            icon: 'error',
            timer: 1500
        })
    },
    confirm: async (message: string, confirmText: string) => {
        return await Swal.fire({
            title: "Are you sure?",
            html: message,
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: confirmText || "Yes",
            cancelButtonText: 'Cancel',
            showCancelButton: true
        })
    }
}

export default swalAlert

export const swalLoading = () => {
    // @ts-ignore
    Swal.fire({
        title: "",
        html: `
         <div id="preloader" style="display: flex;">
            <div class="lds-roller">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
        </div>
         `,
        onBeforeOpen() {
            Swal.showLoading()
        },
        onAfterClose() {
            Swal.hideLoading()
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        background: "none"
    })
}
